import { Html } from "@react-three/drei";

const Loader = ({ className }) => {
  return (
    <Html>
      <div className="flex justify-center items-center ">
        <div
          className={`inline-block w-20 h-20 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
          role="status"
        ></div>
      </div>
    </Html>
  );
};

export default Loader;
