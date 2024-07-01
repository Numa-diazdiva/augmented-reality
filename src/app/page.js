'use client';
import dynamic from "next/dynamic";
import { useGLTF } from "@react-three/drei";
const ModelComponent = dynamic(() => import('@/components/modelComponent'), { ssr: false });

export default function Home() {

  return (
    
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
      <ModelComponent />
    </main>
  );
}
