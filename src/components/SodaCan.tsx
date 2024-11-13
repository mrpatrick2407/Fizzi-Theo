"use client"

import { useGLTF, useTexture } from "@react-three/drei"
import * as Three from "three"

useGLTF.preload('/Soda-can.gltf')

const SodaCanTextures = {
  "cherry": '/labels/cherry.png',
  "grape": '/labels/grape.png',
  "lemon": '/labels/lemon-lime.png',
  "strawberry": '/labels/strawberry.png',
  "watermelon": '/labels/watermelon.png'
}
const metalMaterial = new Three.MeshStandardMaterial({
  roughness: .3,
  metalness: 2,
  color: '#bbbbbb'
})
export type SodaCanProps = {
  flavour?: keyof typeof SodaCanTextures
  scale?: number
}

export function SodaCan({ flavour = "cherry", scale = 2, ...props }: SodaCanProps) {
  const { nodes } = useGLTF('/Soda-can.gltf')
  const labels = useTexture(SodaCanTextures)

  //flip all labels if they are upside down
  labels.cherry.flipY = false
  labels.grape.flipY = false
  labels.lemon.flipY = false
  labels.strawberry.flipY = false
  labels.watermelon.flipY = false

  const label = labels[flavour]

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh geometry={(nodes.cylinder as Three.Mesh).geometry} material={metalMaterial} receiveShadow castShadow>
      </mesh>
      <mesh geometry={(nodes.cylinder_1 as Three.Mesh).geometry} castShadow receiveShadow>
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh geometry={(nodes.Tab as Three.Mesh).geometry} material={metalMaterial} castShadow receiveShadow>
      </mesh>
    </group>
  )

}