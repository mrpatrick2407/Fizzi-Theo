"use client"
import { Bounded } from "@/components/Bounded";
import { asText, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Scene from "./Scene";
import { View } from "@react-three/drei";
import clsx from "clsx";


/**
 * Props for `AlternatingSlice`.
 */
export type AlternatingSliceProps =
  SliceComponentProps<Content.AlternatingSliceSlice>;

/**
 * Component for "AlternatingSlice" Slices.
 */
const AlternatingSlice = ({ slice }: AlternatingSliceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative text-sky-950 bg-yellow-300 "
    >
      <div>
        <View className="alternating-text-view absolute top-0 left-0 h-screen w-full ">
          <Scene/>
        </View>
        <div className="grid z-[100] relative">
          {slice.primary.text_group.map((item,index) => (
            <div key={asText(item.heading)} className="alternating-section text-2xl grid h-screen place-items-center md:grid-cols-2 gap-x-12">
              <div className={clsx(index%2===0?"col-start-1 ":"col-start-2","rounded-lg p-4 backdrop-blur-lg max-md:bg-white/20")}>
              <PrismicRichText field={item.heading} />
              <PrismicRichText field={item.body} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingSlice;
