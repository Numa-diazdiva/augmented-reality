'use client';
import dynamic from 'next/dynamic';

const ARView = dynamic(() => import('react-three-mind').then((mod) => mod.ARView), { ssr: false });
const ARAnchor = dynamic(() => import('react-three-mind').then((mod) => mod.ARAnchor), { ssr: false });

export default function ModelComponent({ model, target=`/targets.mind` }) {
  
  return(
    <div className="w-full h-full">
        <ARView
          imageTargets={target}
          filterMinCF={0.1}
          filterBeta={10000}
          missTolerance={10}
          warmupTolerance={0}
        >
          <ARAnchor
            target={0}
            >
            { model }
          </ARAnchor>
        </ARView>

    </div>  
  );
}