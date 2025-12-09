import dynamic from "next/dynamic";
import Lights from "./Lights";
import { Suspense } from "react";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  const View = dynamic(() => import("@react-three/fiber").then((m) => m.View), {
    ssr: false,
  });
  const PerspectiveCamera = dynamic(
    () => import("@react-three/fiber").then((m) => m.PerspectiveCamera),
    { ssr: false }
  );
  const IPhone = dynamic(() => import("./IPhone").then((mod) => mod.default), {
    ssr: false,
  });
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<div>Loading...</div>}>
        <IPhone />
      </Suspense>
    </View>
  );
};

export default ModelView;
