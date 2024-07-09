'use client';
import dynamic from "next/dynamic";
const ModelComponent = dynamic(() => import('@/components/modelComponent'), { ssr: false });
import Model from "@/components/model";

export default function Page() {

  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-center">
      <ModelComponent 
        model={<Model />}  
        />
    </div>
  );
}
