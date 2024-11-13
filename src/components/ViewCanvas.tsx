"use client"
import { Canvas } from "@react-three/fiber"
import { SodaCan } from "./SodaCan"
import { Environment, Float, OrbitControls, View } from "@react-three/drei"
import FloatingCan from "./FloatingCan"
import { Suspense } from "react"
import dynamic from "next/dynamic"
const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  { ssr: false },
);

type Props = {}

const ViewCanvas = (props: Props) => {
  return (
    <>
      <Canvas
        style={
          {
            position: 'fixed',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            overflow: 'hidden',
            zIndex: 30,
            //pointerEvents: 'none'
          }
        }
        camera={{
          fov: 30,
          near: 0.1,
          far: 1000,
        }}
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>

          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
export default ViewCanvas