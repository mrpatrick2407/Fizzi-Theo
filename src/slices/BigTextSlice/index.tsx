"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import Bubbles from "../Hero/Bubbles";

/**
 * Props for `BigTextSlice`.
 */
export type BigTextSliceProps = SliceComponentProps<Content.BigTextSliceSlice>;

/**
 * Component for "BigTextSlice" Slices.
 */
const BigTextSlice = ({ slice }: BigTextSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen overflow-hidden w-screen text-[#FEE832] bg-[#FE6334]"
    >
      <h2 className="grid gap-[3vw] w-[100vw] text-center py-10 font-black uppercase leading-[.7]">
        <div className="text-[34vw]">
          Soda
        </div>
        <div className="grid gap-[3vw] text-[34vw] md:flex md:text-[11vw]">
          <span className="inline-block">that</span>
          <span className="inline-block max-md:text-[27vw]">makes</span>
          <span className="inline-block max-md:text-[40vw]">you</span>
        </div>
        <div className="inline-block md:text-[32vw]">Smile</div>
      </h2>
      
    </section>
  );
};

export default BigTextSlice;
