"use client"
import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Scene from "./Scene";
import { Environment, OrbitControls, View } from "@react-three/drei";

/**
 * Props for `CanDiver`.
 */
export type CanDiverProps = SliceComponentProps<Content.CanDiverSlice>;

/**
 * Component for "CanDiver" Slices.
 */
const CanDiver = ({ slice }: CanDiverProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      <View className="h-screen w-screen">
        <Scene sentence={slice.primary.sentenve} flavour={slice.primary.flavour}/>
      </View>
    </Bounded>
  );
};

export default CanDiver;
