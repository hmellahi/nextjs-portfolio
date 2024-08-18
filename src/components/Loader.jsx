import { Html } from "@react-three/drei";

const Loader = ({ className }) => {
  return (
    <Html>
      <div className="flex justify-center items-center flex-col gap-3">
        <div
          className={`inline-block w-20 h-20 animate-spin rounded-full border-4 border-solid border-primary-500 border-r-primary-500 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
          role="status"
        ></div>
        <h3 className="text-3xl">Preparing your adventure....</h3>
      </div>
    </Html>
  );
};

export default Loader;
