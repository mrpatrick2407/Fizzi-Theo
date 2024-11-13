"use client"

import FloatingCan from "@/components/FloatingCan"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useGSAP } from "@gsap/react"
import { Content } from "@prismicio/client"
import { Cloud, Clouds, Environment, Text } from "@react-three/drei"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import * as THREE from 'three'
import { color } from "three/webgpu"
type SkyDiveProps = {
    sentence: string | null,
    flavour: Content.CanDiverSliceDefaultPrimary["flavour"]
}
gsap.registerPlugin(useGSAP, ScrollTrigger)
export default function Scene({ sentence, flavour }: SkyDiveProps) {
    const groupRef = useRef<THREE.Group>(null)
    const canRef = useRef<THREE.Group>(null)
    const cloud1Ref = useRef<THREE.Group>(null)
    const cloud2Ref = useRef<THREE.Group>(null)
    const cloudGroupRef = useRef<THREE.Group>(null)
    const wordsRef = useRef<THREE.Group>(null)

    const ANGLE = 75 * (Math.PI / 180)
    const getXPosition = (distance: number) => distance * Math.cos(ANGLE)
    const getYPosition = (distance: number) => distance * Math.sin(ANGLE)
    const getXYPosition = (distance: number) => {
        return { x: getXPosition(distance), y: getYPosition(-1 * distance) }
    }
    useGSAP(() => {
        if (
            !cloudGroupRef.current ||
            !cloud1Ref.current ||
            !cloud2Ref.current ||
            !wordsRef.current ||
            !canRef.current ||
            !groupRef.current
        ) return;
        //setting default position
        gsap.set(cloudGroupRef.current.position, { z: 10 })
        gsap.set(canRef.current.position, {
            ...getXYPosition(-4)
        })
        gsap.set(wordsRef.current.children.map((word) => word.position), { ...getXYPosition(7), z: 2 })
        //spinning can
        gsap.to(canRef.current.rotation, {
            y: Math.PI * 2,
            repeat: -1,
            ease: "none",
            duration: 1.7
        })


        //infinte cloud movement
        const DISTANCE = 15;
        const DURATION = 7
        gsap.set([cloud1Ref.current.position,cloud1Ref.current.position],{
            ...getXYPosition(DISTANCE)
        })
        gsap.to(cloud1Ref.current.position,{
            x: `${getXPosition(DISTANCE*-2)}`,
            y: `${getYPosition(DISTANCE*2)}`,
            ease:"none",
            duration:DURATION,
            repeat:-1
        })
        gsap.to(cloud2Ref.current.position,{
            x: `${getXPosition(DISTANCE*-2)}`,
            y: `${getYPosition(DISTANCE*2)}`,
            ease:"none",
            delay:DURATION/2,
            duration:DURATION,
            repeat:-1
        })
        const ScrollTL= gsap.timeline ({
              scrollTrigger:{
                trigger: '.skydive',
                start: "top top",
                end: "+=2000px",
                scrub: 1.5,
                pin:true
              }
        })

        ScrollTL
        .to("body",{backgroundColor:"#C0F0F5",duration:.1,overwrite:"auto"})
        .to(cloudGroupRef.current.position,{z:0,duration:.3},.5)
        .to(canRef.current.position,{
            x:0,
            y:0,
            ease:"back.out(1.7)",
            duration:1
        },1)
        .to(wordsRef.current.children.map((word)=>word.position),{
            keyframes:[
                {x:0,y:0,z:-2},
                {...getXYPosition(-7),z:-7}
            ],
            delay:.5,
            duration:3,
            stagger:1.3
        },1)
        .to(canRef.current.position,{
            ...getXYPosition(4),
            ease: "back.in(1.7)",
            duration:2
        })
        .to(cloudGroupRef.current.position,{
            z:10,
            duration:2
        })
    })

    return (
        <group ref={groupRef}>
            <group rotation={[0, 0, .5]}>
                <FloatingCan
                    flavour={flavour} ref={canRef}
                    floatIntensity={3}
                    rotationIntensity={0}
                    floatspeed={3}
                >
                    <pointLight position={[0,0,0]} intensity={30} color="#8C0413" /> 
                </FloatingCan>
            </group>

            <Clouds ref={cloudGroupRef}>
                <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
                <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
            </Clouds>


            {
                sentence && (
                    <group ref={wordsRef}>
                        <TextComponent sentence={sentence} color={"#F97315"} />
                    </group>
                )
            }
            <ambientLight intensity={2.5} color={'#9DDEFA'} />
            <Environment files={'/hdr/field.hdr'} environmentIntensity={1.5} />
        </group>
    )
}

function TextComponent({ sentence, color = "white" }: { sentence: string, color: string }) {
    const words = sentence.toUpperCase().split(" ");
    const material = new THREE.MeshLambertMaterial();
    const isDesktop = useMediaQuery("(min-width:950px)", true)
    return words.map((word: string, index: number) => (
        <Text
            key={`${index}-${word}`}
            scale={isDesktop ? 1 : .5}
            color={color}
            material={material}
            font="/font/Alpino-Variable.woff"
            fontWeight={900}
            anchorX={"center"}
            anchorY={"middle"}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ?!.-()*$#@"
        >
            {word}
        </Text>
    ))
}