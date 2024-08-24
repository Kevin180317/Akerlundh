const Carrousel = () => {
  return (
    <div className="relative w-full h-screen md:h-screen">
      <video
        src="/Hero.mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default Carrousel;
