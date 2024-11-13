"use client"
import { Group } from 'three'
import { SodaCan, SodaCanProps } from './SodaCan'
import { Float } from '@react-three/drei'
import { forwardRef, ReactNode } from 'react'


type FloatingCanProps = {
    flavour?:SodaCanProps["flavour"],
    floatspeed?:number,
    rotationIntensity?:number,
    floatIntensity?:number,
    floatingRange?:[number,number],
    children?:ReactNode
}

const FloatingCan = forwardRef<Group, FloatingCanProps>(({
    flavour = 'cherry',
    floatspeed =  1,
    rotationIntensity = 1,
    floatIntensity =  1,
    floatingRange = [-.1,.1],
    children,
    ...props
},ref) => {
    return (
        <group ref={ref} {...props}>
            {/* Add your floating can here */}
            <Float 
            speed={floatspeed} 
            rotationIntensity={rotationIntensity} 
            floatIntensity={floatIntensity} 
            floatingRange={[...floatingRange]}
            >
                <SodaCan flavour={flavour}/>
            </Float>
        </group>
    )
})
FloatingCan.displayName = 'FloatingCan'

export default FloatingCan