const SceneLoader = ({ className }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 h-full">
      <div
        className={`inline-block w-16 h-16 animate-spin rounded-full border-4 border-solid border-primary-500 border-r-primary-500 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
        role="status"
      ></div>
      <h3 className="text-3xl text-white">Loading your adventure</h3>
    </div>
  );
};

export default SceneLoader;
