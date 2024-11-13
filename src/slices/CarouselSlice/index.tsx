"use client"
import FloatingCan from "@/components/FloatingCan";
import { SodaCanProps } from "@/components/SodaCan";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { Center, Environment, View } from "@react-three/drei";
import { useRef, useState } from "react";
import { WavyCircles } from "./WavyCircles";
import { on } from "stream";
import { ArrowIcon } from "./ArrowIcon";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Group } from "three";
import gsap from "gsap";

/**
 * Props for `CarouselSlice`.
 */
gsap.registerPlugin(useGSAP)
const FLAVORS: {
  flavor: SodaCanProps["flavour"];
  color: string;
  name: string;
}[] = [
    { flavor: "cherry", color: "#710523", name: "Black Cherry" },
    { flavor: "grape", color: "#572981", name: "Grape Goodness" },
    { flavor: "lemon", color: "#164405", name: "Lemon Lime" },
    {
      flavor: "strawberry",
      color: "#690B3D",
      name: "Strawberry Lemonade",
    },
    { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
  ];
export type CarouselSliceProps =
  SliceComponentProps<Content.CarouselSliceSlice>;

/**
 * Component for "CarouselSlice" Slices.
 */
const CarouselSlice = ({ slice }: CarouselSliceProps): JSX.Element => {
  const SPIN_ON_CHANGE = 18
  const SodaCanRef = useRef<Group>(null);
  const [currentFlavourIndex, setCurrentFlavourIndex] = useState(0);
  function ChangeFlavour(index: number) {
    if (!SodaCanRef.current) return;
    const nextIndex = (index + FLAVORS.length) % FLAVORS.length;

    const tl = gsap.timeline();
    tl.to(SodaCanRef.current.rotation, {
      y: index > FLAVORS.length ? `-=${Math.PI * 2 * SPIN_ON_CHANGE}` : `+=${Math.PI * 2 * SPIN_ON_CHANGE}`,
      ease: "power3.out",
      duration: 1,
    }, 0)
    .to(".background, .wavy-circles-inner, .wavy-circles-outer",{
      backgroundColor:FLAVORS[nextIndex].color,
      fill:FLAVORS[nextIndex].color,
      ease: "power3.out",
      duration: 1,
    },0)
    .to(".text-wrapper",{
      duration:.2,y:-10,opacity:0
    },0)
    .to({},{onStart:()=>setCurrentFlavourIndex(nextIndex)},.5)
    .to(".text-wrapper",{
      duration:.2,y:0,opacity:1
    },.7)
  }
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="carousel relative h-screen grid-rows-[auto,4fr,auto] justify-center overflow-hidden bg-white py-12 text-white"
    >
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />
      <h2 className="relative text-center text-5xl font-bold">
        <PrismicText field={slice.primary.heading} />
      </h2>
      <WavyCircles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  h-[120vmin] text-[#710523]" />
      <div className="grid grid-cols-[auto,auto,auto] justify-center items-center">
        <ArrowButton direction="left" label={"Previous"} onClickHandler={() => ChangeFlavour(currentFlavourIndex + 1)} />
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingCan ref={SodaCanRef} flavour={FLAVORS[currentFlavourIndex].flavor} floatIntensity={.3} rotationIntensity={1} />
          </Center>
          <Environment files={'/hdr/lobby.hdr'} environmentIntensity={.6} environmentRotation={[0, 3, 0]} />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>
        <ArrowButton direction="right" label={"Next"} onClickHandler={() => ChangeFlavour(currentFlavourIndex - 1)} />
      </div>
      <div className="text-area relative text-center mx-auto">
        <div className="text-wrapper text-4xl font-medium">
          {FLAVORS[currentFlavourIndex].name}
        </div>
        <div className="mt-2 text-4xl font-normal opacity-90">
          <PrismicRichText field={slice.primary.pricecopy} />
        </div>
      </div>
    </section>
  );
};

type ArrowButtonProps = {
  direction: "left" | "right",
  label: string | null,
  onClickHandler: () => void
}

function ArrowButton({ direction, label, onClickHandler }: ArrowButtonProps) {
  return (
    <button
      onClick={onClickHandler}
      className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20 z-[120]"
    >
      <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
      <span className="sr-only">{label}</span>
    </button>
  )
}

export default CarouselSlice;
