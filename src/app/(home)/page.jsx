"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import HomeInfo from "./components/HomeInfo";
import SceneLoader from "./components/SceneLoader";
import { Bird, Island, Plane, Sky } from "@/models";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (typeof window === "undefined") return [0, 0];

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (typeof window === "undefined") return [0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative bg-[#242429] z-10">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* <div className="flex items-center justify-center w-full h-screen">he</div> */}

      <Canvas
        className={`w-full h-screen bg-transparent z-10 relative ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        onCreated={() => setIsLoaded(true)}
      >
        <Suspense fallback={<SceneLoader className="border-white" />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      {isLoaded && (
        <div className="absolute bottom-20 sm:bottom-16 text-primary-500 text-md sm:text-xl font-medium flex justify-center items-center left-0 right-0">
          <div className="bg-white px-3 sm:px-6 py-3 shadow-lg flex justify-center items-center gap-2 rounded-md">
            Rotate right to see other sections
            <svg
              fill="currentColor"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
