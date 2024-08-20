import { Html } from "@react-three/drei";

const SceneLoader = ({ className }) => {
  return (
    <Html>
      <div className="absolute transform -translate-x-1/2 justify-center items-center  top-1/2 w-[26rem] text-center bottom-[2rem]">
        <div
          className={`inline-block w-16 h-16 animate-spin rounded-full border-4 border-solid border-primary-500 border-r-primary-500 motion-reduce:animate-[spin_1.5s_linear_infinite] mb-2 mt-[-4rem] ${className}`}
          role="status"
        ></div>
        <h3 className="text-md sm:text-3xl text-white text-nowrap">
          Loading your adventure
        </h3>
      </div>
    </Html>
  );
};

export default SceneLoader;
