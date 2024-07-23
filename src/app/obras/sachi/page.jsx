'use client';
import dynamic from "next/dynamic";
const ModelComponent = dynamic(() => import('@/components/modelComponent'), { ssr: false });
import Model from "@/components/model";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useState } from "react";

export default function Page() {

  const handle = useFullScreenHandle();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (isFullScreen) {
      handle.exit();
    } else {
      handle.enter();
    }
    setIsFullScreen(!isFullScreen);
  };
  return (
    <div className="flex min-h-screen min-w-screen flex-col items-start justify-start">
      <FullScreen handle={handle}>
        <button onClick={toggleFullScreen} className="z-10 text-white absolute left-[50%] top-[3%]">
         <FullScreenIcon />
        </button>
        <ModelComponent
          model={<Model modelUrl="/models/sachi.glb"/>}
          target={"/targets/sachi.mind"}
          scale={1.3}
          position={[0,3,-2]}
          ligths={<SceneLights />}
        />
      </FullScreen>
    </div>
  );
}
function SceneLights() {

  return(
  <>
    <directionalLight position={[0,30,0]} intensity={1.5}/>
    <directionalLight position={[0,-30,0]} intensity={1.5}/>
    <directionalLight position={[0,-30,0]} intensity={1.5}/>
  </>
)}

function FullScreenIcon() {
  return(
    <svg width="32" height="32" viewBox="0 0 48 48" fill="#ddd" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 4.5V1.5H1.5V19.5H4.5V6.62128L19.5644 21.6856L21.6856 19.5644L6.62128 4.5H19.5ZM43.5 28.5V41.3787L28.0606 25.9394L25.9394 28.0606L41.3787 43.5H28.5V46.5H46.5V28.5H43.5Z" fill="white"/>
    </svg>

  )
}