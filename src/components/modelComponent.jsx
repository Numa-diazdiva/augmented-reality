'use client';
import dynamic from 'next/dynamic';

const ARView = dynamic(() => import('react-three-mind').then((mod) => mod.ARView), { ssr: false });
const ARAnchor = dynamic(() => import('react-three-mind').then((mod) => mod.ARAnchor), { ssr: false });

export default function ModelComponent({ model, target=`/targets.mind`, scale = 1, position = [0,0,0], ligths}) {
  
  return(
    <div className="w-full h-full">
        <ARView
          imageTargets={target}
          filterMinCF={0.0001}
          filterBeta={0.1}
          missTolerance={10}
          warmupTolerance={0}
        >
          <ARAnchor
            target={0}
            >
            <group scale={scale} position={position}> { model } </group>
            {ligths}
          </ARAnchor>
        </ARView>

    </div>  
  );
}