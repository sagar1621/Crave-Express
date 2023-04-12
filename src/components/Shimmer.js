const Shimmer = () => {
  return (
    <div className="restraunt-list flex flex-wrap animate-pulse">
      {Array(15)
        .fill("")
        .map((e) => (
          <div className="flex flex-row bg-gray-300 h-56 w-56 m-2 "></div>
        ))}
    </div>
  );
};

export default Shimmer;
