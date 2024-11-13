# Fizzi: 3D Imaginary Soda Can Company Application

## Overview
Welcome to Fizzi, an exciting 3D web app that brings our imaginary soda brand to life! With Fizzi, you can interact with realistic 3D models of our soda cans, exploring each unique flavor in a fun and immersive way. Built with modern web tech like **Three.js** and **React Three Fiber**, Fizzi aims to give you a seamless and engaging experience.

## Features
- **Interactive 3D Models**: Rotate, zoom, and explore our soda cans from every angle.
- **Detailed Product Info**: Learn more about each soda flavor with a simple click.
- **Responsive Design**: Enjoy a smooth experience whether you’re on a computer, tablet, or smartphone.
- **Animations**: Delightful animations make exploring Fizzi’s products even more enjoyable.

## Technologies Used
- **Three.js**: The core engine behind our 3D rendering.
- **React Three Fiber**: Makes building 3D scenes with React straightforward and intuitive.
- **React.js**: The framework we use to create user-friendly UI components.
- **Next.js**: For server-side rendering and optimized performance.
- **GSAP (GreenSock Animation Platform)**: For smooth and complex animations.
- **Prismic**: Headless CMS for managing content dynamically.
- **JavaScript/TypeScript**: For writing the main application logic.
- **HTML/CSS**: For structuring and styling the app.

## Installation
Getting started with Fizzi is easy:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mrpatrick2407/Fizzi-Theo.git
   cd fizzi-3d-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Head to `http://localhost:3000` in your browser and start exploring!

## How to Use
- **Rotate the Model**: Click and drag on the can to spin it around.
- **Zoom In/Out**: Scroll with your mouse wheel to zoom.
- **Click for Details**: Click on a can to see more information about that flavor.

## Sample Code
Want to know how it all comes together? Here’s a sample implementation of a floating 3D soda can component that uses React Three Fiber and Drei:

```javascript
"use client"
import { Group } from 'three';
import { SodaCan, SodaCanProps } from './SodaCan';
import { Float } from '@react-three/drei';
import { forwardRef, ReactNode } from 'react';

// Define the props for the FloatingCan component
type FloatingCanProps = {
    flavour?: SodaCanProps["flavour"],
    floatspeed?: number,
    rotationIntensity?: number,
    floatIntensity?: number,
    floatingRange?: [number, number],
    children?: ReactNode
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(({
    flavour = 'cherry',
    floatspeed = 1,
    rotationIntensity = 1,
    floatIntensity = 1,
    floatingRange = [-0.1, 0.1],
    children,
    ...props
}, ref) => {
    return (
        <group ref={ref} {...props}>
            <Float 
                speed={floatspeed} 
                rotationIntensity={rotationIntensity} 
                floatIntensity={floatIntensity} 
                floatingRange={[...floatingRange]}
            >
                <SodaCan flavour={flavour} />
            </Float>
        </group>
    );
});

FloatingCan.displayName = 'FloatingCan';

export default FloatingCan;
```
Want to know how it all comes together? Here’s a simple component that renders a 3D soda can with React Three Fiber:

```javascript
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanModel from './CanModel';

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <CanModel />
      </Suspense>
    </Canvas>
  );
}

export default App;
```

## Deployment
Deploying Fizzi is straightforward:

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Serve the production build**:
   Upload the `dist` or `build` folder to your preferred hosting platform (e.g., Vercel, Netlify).

## Future Plans
We’re excited about what’s next for Fizzi:
- **More Animations**: Imagine cans opening with a satisfying pop and sound effects!
- **Customization**: Let users design their own can labels.
- **AR Features**: Bring the cans into your real-world space with augmented reality.

---
Thanks for joining us in exploring the world of Fizzi!

