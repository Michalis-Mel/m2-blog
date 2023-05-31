"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Robot = () => {
  const robot = useGLTF("./robot/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.52}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={robot.scene}
        scale={8}
        position={[0, -6, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, 3, 50], fov: 8 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={2}
        />
        <Robot />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
