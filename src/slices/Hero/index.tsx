"use client";
import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import Bubbles from "./Bubbles";
import useStore from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
gsap.registerPlugin(useGSAP,ScrollTrigger)
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const ready=useStore((state)=>state.ready)
  const isDesktop= useMediaQuery("(min-width: 768px)",true)
  useGSAP(() => {
    if(!ready && isDesktop) return
    let introTL = gsap.timeline();
    introTL.
      set('.hero', { opacity: 1 }).
      from('.hero-header-word', {
        scale: 3,
        opacity: 0,
        delay:.3,
        stagger: 1,
        ease: "power4.in",
      }).
      from('.hero-subheading',{
        opacity:0,
        y:30
      },"+=.8")
      .from('.hero-body',{opacity:0,y:10})
      .from('.hero-button',{opacity:0,y:10,duration:.6})


      const scrollTL= gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,     
        },
      })
      scrollTL.fromTo('body',{backgroundColor:"#FDE047"},{backgroundColor:"#D9F99D",duration:1},5)
      .from('.text-side-heading .split-char',{
        y:40,
        opacity:0,
        rotation:-25,
        stagger: .1,
        ease: "back.out(3)",
        scale:1.3
      }).from('.text-side-body',{
        y:10,
        opacity:0,
      smoothOrigin:true,
      })
  },[ready,isDesktop])

  return (
    <Bounded
      className="hero opacity-0"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isDesktop &&

      (<View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] h-screen w-screen md:block">
        <Scene/>
        <Bubbles/>
      </View>
      )}
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="mt-[4rem] hero-header lg:text-[13rem] text-[30rem] uppercase font-black leading-[.8] text-orange-500">
              <TextSplitter className="hero-header-word" wordDisplayStyle="block" text={asText(slice.primary.heading)} />
            </h1>
            <div className="hero-subheading mt-12 text-8xl lg:text-[13xl] font-semibold text-sky-950">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <div className="hero-body mt-8 text-2xl lg:text-[5xl] font-normal text-sky-950">
              <PrismicRichText field={slice.primary.body} />
            </div>
            <Button buttonLink={slice.primary.buttonlink} buttonText={slice.primary.buttontext} className="hero-button mt-12" />
          </div>
        </div>
        <div className="grid text-side z-[90] h-screen items-center gap-4 md:grid-cols-2">

          <PrismicNextImage className="md:hidden w-full" field={slice.primary.cansimage} />
          <div>
            <h2 className="text-side-heading uppercase font-black text-balance text-6xl text-sky-950">
              <TextSplitter text={asText(slice.primary.secondheader)} />
            </h2>
            <div className="font-normal text-sky-950 text-side-body mt-4 max-w-xl text-balance text-xl">
              <PrismicRichText field={slice.primary.secondbody} />
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
