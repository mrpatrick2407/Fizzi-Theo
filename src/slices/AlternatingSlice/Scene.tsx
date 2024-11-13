"use client"
import FloatingCan from '@/components/FloatingCan'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useGSAP } from '@gsap/react'
import { Environment } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Group } from 'three'

gsap.registerPlugin(useGSAP,ScrollTrigger)

function Scene() {
    const canRef= useRef<Group>(null)
    const isDesktop = useMediaQuery("(min-width:768px)", true)
    useGSAP(()=>{
        if(!canRef.current) return
        const sections= gsap.utils.toArray(".alternating-section");
        const bgColor=["#FFA6B5","#E9CFF6","#CBEF9A"]
        const scollTl=gsap.timeline({
            scrollTrigger: {
                trigger: ".alternating-text-view",
                endTrigger:".alternating-text-container",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin:true
            }
        })

        sections.forEach((_,index)=>{
            const isOdd=index%2==0?false:true;
            if(!canRef.current) return
            if(index==0 ) return
            const xPosition=isDesktop? (isOdd?'-2':'1'):0;
            const yRotation=isDesktop? (isOdd?'.4':'-.4'):0
            scollTl.to(canRef.current.position, {
                x:xPosition,
                ease:"circ.inOut",
                delay:.3,
                duration:1.5
            })
            .to(canRef.current.rotation,{
                y:yRotation,
                ease:"back.inOut",
                duration:1.5
            },"<")
            .to(".alternating-text-container",{
                backgroundColor:gsap.utils.wrap(bgColor,index),
                ease:"sine.in"
            })
        })
    })

  return (
    <group  position-x={isDesktop?1:0}>
        <FloatingCan ref={canRef}/>
        <Environment 
        files={'/hdr/lobby.hdr'}
        environmentIntensity={1.5}/>
    </group>
  )
}

export default Scene