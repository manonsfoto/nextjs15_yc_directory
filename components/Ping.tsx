const Ping = () => {
  return (
    <div className="relative">
      <div className="absolute top-1 -left-4">
        <span className="flex size-[11px]">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-76"></span>
          <span className="relative inline-flex size-[11px] rounded-full bg-primary"></span>
        </span>
      </div>
    </div>
  );
};

export default Ping;
