"use client"

import FloatingCan from "@/components/FloatingCan"
import { useGSAP } from "@gsap/react"
import { Environment, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import ScrollTrigger from "gsap/src/ScrollTrigger"
import { Group } from "three"
import gsap from "gsap"
import useStore from "@/hooks/useStore"
type Props = {}
gsap.registerPlugin(useGSAP, ScrollTrigger)

/**
 * Props for `Hero`.
 */
export default function Scene({ }: Props) {
  const isReady = useStore((state) => state.isReady);

  useGSAP(() => {
    if (!can1Ref.current ||
      !can2Ref.current ||
      !can3Ref.current ||
      !can4Ref.current ||
      !can5Ref.current ||
      !groupRef.current ||
      !can1GroupRef.current ||
      !can2GroupRef.current
    ) return
    isReady();
    //setting can1 on the left 
      gsap.set(can1Ref.current.position, { x: -1.5 })
      gsap.set(can1Ref.current.rotation, { z: -.5 })
    //setting can2 on the right
      gsap.set(can2Ref.current.position, { x: 1.5 })
      gsap.set(can2Ref.current.rotation, { z: .5 })
    //setting default positions for the other cans
      gsap.set(can3Ref.current.position, { y: 5 ,z:2})
      gsap.set(can4Ref.current.position, { x:2,y: 4,z:2 })
      gsap.set(can5Ref.current.position, { y: -5 })
 
    const introTL = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      }
    })
    if(window.scrollY<20){
      introTL
    .from(can1GroupRef.current.position, { y: -5, x: 1 }, 0)
    .from(can1GroupRef.current.rotation, { z: -13 }, 0)
    .from(can2GroupRef.current.position, { y: 5, x: 1 }, 0)
    .from(can2GroupRef.current.rotation, { z: 5}, 0);
    }
    const ST= gsap.timeline({
      defaults:{
        duration: 3,
      },
      scrollTrigger:{
        trigger: '.hero',
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    })

    ST
    // Rotate can group
    .to(groupRef.current.rotation, { y: Math.PI * 2 })

    // Can 1 - black cherry
    .to(can1Ref.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
    .to(can1Ref.current.rotation, { z: 0.3 }, 0)

    // Can 2 - Lemon Lime
    .to(can2Ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
    .to(can2Ref.current.rotation, { z: 0 }, 0)

    // Can 3 - Grape
    .to(can3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
    .to(can3Ref.current.rotation, { z: -0.1 }, 0)

    // Can 4 - Strawberry Lemonade
    .to(can4Ref.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
    .to(can4Ref.current.rotation, { z: 0.3 }, 0)

    // Can 5 -Watermelon
    .to(can5Ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
    .to(can5Ref.current.rotation, { z: -0.25 }, 0)
    .to(groupRef.current.position, { x:1,duration:4,ease:"sine.inOut"},1.2)

  })
  var can1GroupRef = useRef<Group>(null);
  var can2GroupRef = useRef<Group>(null);
  var can1Ref = useRef<Group>(null);
  var can2Ref = useRef<Group>(null);
  var can3Ref = useRef<Group>(null);
  var can4Ref = useRef<Group>(null);
  var can5Ref = useRef<Group>(null);
  var groupRef = useRef<Group>(null);
  const FLOAT_SPEED = 1.5;
  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan flavour="cherry" ref={can1Ref} floatspeed={FLOAT_SPEED} />
      </group>
      <group ref={can2GroupRef}>
        <FloatingCan flavour="lemon" ref={can2Ref} floatspeed={FLOAT_SPEED} />
      </group>
      <FloatingCan flavour="grape" ref={can3Ref} floatspeed={FLOAT_SPEED} />
      <FloatingCan flavour="strawberry" ref={can4Ref} floatspeed={FLOAT_SPEED} />
      <FloatingCan flavour="watermelon" ref={can5Ref} floatspeed={FLOAT_SPEED} />
      <Environment environmentIntensity={1.5} files={'/hdr/lobby.hdr'} />
    </group>
  )
}
