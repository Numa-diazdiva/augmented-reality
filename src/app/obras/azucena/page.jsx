'use client';
import dynamic from "next/dynamic";
const ModelComponent = dynamic(() => import('@/components/modelComponent'), { ssr: false });
import Model from "@/components/model";

export default function Page() {

  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-center">
      <ModelComponent 
        model={<Model modelUrl="/models/azucenas.glb" />} 
        target={"/targets/azucenas.mind"}
        scale={0.005}
        position={[0,0,0]}
        ligths={<SceneLights />}  
        />
    </div>
  );
}
function SceneLights() {

  return(
  <>
    <directionalLight position={[0,30,0]} intensity={1.5}/> 
    <directionalLight position={[0,-30,0]} intensity={1.5}/> 
  </>
)}