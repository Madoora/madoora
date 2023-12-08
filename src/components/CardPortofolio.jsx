import { useState } from 'react';

const CardPortofolio = ({ imagePortofolio }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="h-[350px] 2xl:h-full relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imagePortofolio} alt="" className="h-full w-full object-cover object-top" />
      <div
        className={`absolute flex flex-col gap-5 items-center justify-center text-black bg-black bg-opacity-50 h-full w-full transition-all duration-700 ${
          isHover ? 'top-0' : 'top-full'
        }`}
      >
        <div className="uppercase font-helvetica  bg-madooraYellow w-32 p-2 text-center italic cursor-pointer">
          preview
        </div>
        <div className="uppercase font-helvetica  bg-madooraYellow w-32 p-2 text-center italic cursor-pointer">
          detail
        </div>
      </div>
    </div>
  );
};

export default CardPortofolio;
