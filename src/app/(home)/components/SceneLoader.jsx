import { Html } from "@react-three/drei";

const SceneLoader = ({ className }) => {
  return (
    <Html>
      <div className="absolute left-1/2 transform -translate-x-1/2 justify-center items-center text-center top-1/2 w-[26rem]">
        <div
          className={`inline-block w-16 h-16 animate-spin rounded-full border-4 border-solid border-primary-500 border-r-primary-500 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
          role="status"
        ></div>
        <h3 className="text-md sm:text-3xl text-white text-nowrap">Loading your adventure</h3>
      </div>
    </Html>
  );
};

export default SceneLoader;
