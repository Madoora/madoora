import { useState } from 'react';

const CardOurTeam = ({ name, jobDesk, image }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className="relative overflow-hidden w-full hover:lg:-ml-10 transition-all duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-32 md:h-60 bg-blue-100">
        <img src={image} className="object-cover object-top w-full h-full" alt="" />
      </div>
      <div
        className={
          `bg-black bg-opacity-75 absolute top-0 bottom-0 w-1/2 md:w-[40%] text-white flex items-center justify-center madoora-card-team ` +
          (isHover ? 'madoora-card-team-active' : '')
        }
      >
        <div>
          <p
            className="font-indigo text-3xl md:text-5xl leading-6 md:leading-10"
            dangerouslySetInnerHTML={{ __html: name }}
          />
          <p className="font-helvetica tracking-wider">{jobDesk}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOurTeam;
