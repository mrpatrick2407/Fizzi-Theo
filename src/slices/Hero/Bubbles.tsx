"use client"
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const o = new THREE.Object3D();

export default function Bubbles({
    count = 300,
    speed = 5,
    bubbleSize = 0.05,
    opacity = 0.5,
    repeat = true,
}) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const material = new THREE.MeshStandardMaterial({
        transparent: true,
        opacity
    })
    const geometry = new THREE.SphereGeometry(bubbleSize, 16, 16);
    const bubbleSpeed = useRef(new Float32Array(count));
    const minSpeed = speed * 0.001;
    const maxSpeed = speed * 0.005;
    useEffect(() => {
        const mesh = meshRef.current
        if (!mesh) return;
        for (let i = 0; i < count; i++) {
            o.position.set(gsap.utils.random(-4, 4), gsap.utils.random(-4, 4), gsap.utils.random(-4, 4))
            bubbleSpeed.current[i] = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            o.updateMatrix();
            mesh.setMatrixAt(i, o.matrix)
        }
        mesh.instanceMatrix.needsUpdate = true;
        return () => {
            mesh.geometry.dispose();
            (mesh.material as THREE.Material).dispose();
        }
    }, [count, minSpeed, maxSpeed])

    useFrame(() => {
        if (!meshRef.current) return;
        material.color=new THREE.Color(document.body.style.backgroundColor)
        for (let i = 0; i < count; i++) {
            meshRef.current.getMatrixAt(i, o.matrix);
            o.position.setFromMatrixPosition(o.matrix);
            o.position.y += bubbleSpeed.current[i];
            if(o.position.y>4 && repeat){
                o.position.y=-2;
                o.position.x=gsap.utils.random(-4,4);
                o.position.z=gsap.utils.random(-4,4)
            }
            o.updateMatrix();
            meshRef.current.setMatrixAt(i, o.matrix)
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
    });
    return (
        <instancedMesh
            ref={meshRef}
            args={[undefined, undefined, count]}
            position={[0, 0, 0]}
            material={material}
            geometry={geometry}
        ></instancedMesh>
    )
}