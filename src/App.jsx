import HeaderImage from './assets/Header-Image.png';
import HeaderImageMobile from './assets/Header-Image-Mobile.png';
import MadooraGarden from './assets/Madoora-Website-Design2.jpg';
import AlamoConcrete from './assets/Alamo-Ranch-Concrete-Homepage.jpg';
import AlamoLandscaping from './assets/HomePage-Alamo-Ranch-Landscaping.jpg';
import DeadWood from './assets/AdobeStock_86383296.png';
import Boljem from './assets/boljem-Low.jpg';
import Ega from './assets/ega.jpg';
import Bayu from './assets/bayu.jpg';
import Kukuh from './assets/kukuh.jpg';
import FooterImage from './assets/Footer-Low.jpg';
import CardOurTeam from './components/CardOurTeam';
import CardPortofolio from './components/CardPortofolio';

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[url('./assets/BG-Pattern.jpg')] bg-repeat relative overflow-hidden">
      <div className="absolute hidden md:block top-0 lg:top-10 -ml-44 md:w-[1200px] 2xl:w-full 2xl:-ml-60">
        <img src={HeaderImage} alt="" className="w-full" />
      </div>
      {/* header */}
      <div className="p-10 2xl:p-20 2xl:px-0 min-h-[600px] 2xl:min-h-[800px] 2xl:w-[1140px] 2xl:mx-auto overflow-hidden relative">
        {/* heading1 */}
        <div className="mt-4 md:ml-10 2xl:ml-0 text-2xl md:text-4xl tracking-widest">
          <div className="flex gap-3 items-center">
            <h1 className="font-georgia">Hello</h1>
            <div className="h-0.5 w-12 mt-2 bg-black"></div>
          </div>
          <h2 className="-mt-2 font-georgia">welcome to</h2>
        </div>
        {/* heading1 */}
        {/* header-image */}
        <div className="absolute w-[1500px] -ml-72 -mt-72 rotate-[5deg] md:hidden">
          <img src={HeaderImageMobile} width="900" alt="" />
        </div>
        {/* <div className="absolute hidden  top-0 lg:top-10 -ml-44 md:w-[1200px] 2xl:w-[1500px] 2xl:-ml-[300px]">
          <img src={HeaderImage} alt="" className="" />
        </div> */}
        {/* header-image */}
        {/* yellow-line */}
        <div className="bg-madooraYellow mix-blend-multiply w-28 2xl:w-40 absolute top-0 bottom-0 right-32 md:right-1/3">
          <div className="h-7 w-7 2xl:h-10 2xl:w-10 bg-black absolute -right-4  top-6"></div>
        </div>
        {/* yellow-line */}
        {/* logo */}
        <div className="text-5xl md:text-7xl 2xl:text-9xl font-indigo text-right absolute right-8 bottom-8 md:right-24 lg:right-40 2xl:right-5">
          Madoora
        </div>
        {/* logo */}
      </div>
      {/* header */}
      {/* section-1 */}
      <div className="p-10 md:p-20 2xl:p-0 2xl:mt-32 2xl:w-[1140px] 2xl:mx-auto">
        {/* content */}
        <div className="grid 2xl:grid-cols-3 gap-8 font-helvetica">
          {/* content-1 */}
          <div className="flex justify-start">
            <div className="w-[85%] lg:w-3/4 2xl:w-full">
              <h3 className="text-xl 2xl:text-3xl 2xl:font-georgia font-bold tracking-widest">
                Website Design
              </h3>
              <p className="mt-2 xl:text-lg">
                Elevate your brand with Madoora's exceptional website design service—where
                innovation, aesthetics, and user experience converge seamlessly.
              </p>
            </div>
          </div>
          {/* content-1 */}
          {/* content-2 */}
          <div className="flex justify-end lg:justify-start">
            <div className="text-right lg:text-left w-[85%] lg:w-3/4 2xl:w-full">
              <h3 className="text-xl 2xl:text-3xl 2xl:font-georgia font-bold tracking-widest">
                Website Development
              </h3>
              <p className="mt-2 xl:text-lg">
                Madoora transforms ideas into dynamic online solutions with expert website
                development—innovation, efficiency, and user-focused excellence
              </p>
            </div>
          </div>
          {/* content-2 */}
          {/* content-3 */}
          <div className="flex justify-start">
            <div className="w-[85%] lg:w-3/4 2xl:w-full">
              <h3 className="text-xl 2xl:text-3xl 2xl:font-georgia font-bold tracking-widest">
                Logo Design
              </h3>
              <p className="mt-2 xl:text-lg">
                Madoora crafts impactful logos that capture your brand essence, blending creativity
                and strategy for lasting impressions.
              </p>
            </div>
          </div>
          {/* content-3 */}
        </div>
        {/* content */}
        {/* image */}
        <div className="w-[800px] 2xl:w-[900px] absolute top-[400px] -right-[350px] 2xl:-right-[300px] hidden lg:block">
          <img src={DeadWood} alt="" className="transform -scale-x-100 rotate-[30deg]" />
        </div>
        {/* image */}
      </div>
      {/* section-1 */}
      {/* step-we-work */}
      <div className="mt-10 2xl:mt-32 lg:px-20 2xl:px-0 grid lg:grid-cols-2 w-full 2xl:w-[1140px] 2xl:mx-auto">
        {/* heading */}
        <div className="flex justify-between items-center lg:items-start">
          <div className="ml-10 md:ml-20 lg:ml-0 w-[50%]">
            <h2 className="font-indigo lg:font-georgia text-3xl lg:text-2xl xs:text-[40px] md:text-5xl">
              Step We Work
            </h2>
          </div>
          <div className="lg:hidden h-16 w-[40%] bg-madooraYellow mix-blend-multiply relative">
            <div className="h-7 w-7 bg-black absolute -bottom-3 -left-3 rotate-45"></div>
          </div>
        </div>
        {/* heading */}
        {/* content */}
        <div className="mt-14 lg:mt-0 font-georgia text-lg 2xl:text-2xl lg:-ml-20">
          <div className="flex gap-10 px-10 md:px-20 2xl:px-10 py-5 border-y border-black">
            <div>
              <p>01</p>
            </div>
            <div>
              <p>Briefing and Research</p>
            </div>
          </div>
          <div className="flex gap-10 px-10 md:px-20 2xl:px-10 py-5 border-b border-black">
            <div>
              <p>02</p>
            </div>
            <div>
              <p>Brainstorming & Sketching</p>
            </div>
          </div>
          <div className="flex gap-10 px-10 md:px-20 2xl:px-10 py-5 border-b border-black">
            <div>
              <p>03</p>
            </div>
            <div>
              <p>Designing & Detailing</p>
            </div>
          </div>
          <div className="flex gap-10 px-10 md:px-20 2xl:px-10 py-5 border-b border-black">
            <div>
              <p>04</p>
            </div>
            <div>
              <p>Developing & Testing</p>
            </div>
          </div>
          <div className="flex gap-10 px-10 md:px-20 2xl:px-10 py-5 border-b border-black">
            <div>
              <p>05</p>
            </div>
            <div>
              <p>Feedback & Finishing</p>
            </div>
          </div>
        </div>
        {/* content */}
      </div>
      {/* step-we-work */}
      {/* portfolio */}
      <div className="mt-10 xs:mt-20 2xl:mt-32">
        {/* heading */}
        <div className="flex justify-start items-center relative">
          <div className="h-16 lg:h-28 w-[40%] lg:w-[60%] 2xl:w-[40%] bg-madooraYellow mix-blend-multiply relative">
            <div className="h-7 w-7 2xl:h-10 2xl:w-10 bg-black absolute -bottom-3 2xl:-bottom-5 -right-3 2xl:-right-5 rotate-45"></div>
          </div>
          <div className="ml-10 lg:ml-20 lg:w-full lg:flex lg:items-center lg:pr-20 2xl:pr-0 gap-10 2xl:hidden">
            <h2 className="font-indigo text-[40px] md:text-5xl">Portfolio</h2>
            <hr className="w-full hidden lg:block bg-black h-0.5" />
          </div>
          {/* heading2xl-screen */}
          <div className="hidden 2xl:flex justify-start items-center 2xl:w-[1140px] absolute translate-x-[34%]">
            <div className="h-16 lg:h-28 w-[40%] lg:w-[60%]  mix-blend-multiply relative"></div>
            <div className="ml-10 lg:ml-20 lg:w-full lg:flex lg:items-center lg:pr-20 2xl:pr-0 gap-10">
              <h2 className="font-indigo text-[72px] text-6xl tracking-wider">Portfolio</h2>
              <hr className="w-full hidden lg:block bg-black h-0.5" />
            </div>
          </div>
          {/* heading2xl-screen */}
        </div>
        {/* heading */}
        {/* content */}
        <div className="px-10 md:px-20 2xl:px-0 mt-10 xs:mt-20 2xl:mt-32 grid md:grid-cols-3 gap-5 2xl:gap-10 2xl:w-[1350px] 2xl:mx-auto ">
          <CardPortofolio imagePortofolio={MadooraGarden} />
          <CardPortofolio imagePortofolio={AlamoConcrete} />
          <CardPortofolio imagePortofolio={AlamoLandscaping} />
        </div>
        {/* content */}
      </div>
      {/* portfolio */}
      {/* form */}
      <div className="grid lg:grid-cols-2 md:shadow-lg mt-20 md:mt-32  mx-10 md:mx-20 2xl:w-[1140px] 2xl:mx-auto">
        <div className="hidden md:block bg-[#1c1a1b] h-72 lg:h-full">
          <img src={Boljem} className="object-contain lg:object-cover w-full h-full" alt="" />
        </div>
        <div className="md:bg-white md:p-20 lg:px-10 2xl:px-16 grid gap-10">
          {/* heading */}
          <div className="relative">
            <h3 className="text-center text-3xl font-georgia">Reach Us</h3>
            <div className="h-3 w-3 2xl:h-5 2xl:w-5 bg-black absolute top-3 2xl:top-1 right-5 rotate-45"></div>
          </div>
          {/* heading */}
          {/* content */}
          <form action="" className="grid gap-10">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-3 py-1 font-georgia bg-transparent text-black border-b border-black placeholder:text-black placeholder:italic focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-1 font-georgia bg-transparent text-black border-b border-black placeholder:text-black placeholder:italic focus:outline-none"
            />
            <textarea
              name=""
              id=""
              cols="30"
              placeholder="Message"
              rows="5"
              className="w-full px-3 py-1 font-georgia bg-transparent text-black border-b border-black placeholder:text-black placeholder:italic focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white p-1 md:p-2.5 font-georgia italic w-1/2 place-self-center"
            >
              Submit
            </button>
          </form>
          {/* content */}
        </div>
      </div>
      {/* form*/}
      {/* Our Team */}
      <div className="p-10 md:p-20 2xl:p-0 2xl:mt-32 grid lg:grid-cols-2 gap-5 2xl:w-[1140px] mx-auto">
        {/* description */}
        <div className="self-center lg:w-3/4 2xl:w-1/2">
          <h2 className="text-[40px] md:text-5xl 2xl:text-6xl lg:leading-10 2xl:leading-10 font-indigo">
            Meet the Team
          </h2>
          <p className="font-helvetica text-lg lg:mt-5">
            Introducing Madoora's Team: One creative designer, two dedicated developers. We blend
            skills and passion to elevate digital experiences together.
          </p>
        </div>
        {/* description */}
        {/* card */}
        <div className="grid gap-2">
          <CardOurTeam name="Ega <br /> Wahyudi" jobDesk="Designer" image={Ega} />
          <CardOurTeam name="Bayu <br /> Wicaksono" jobDesk="Web Developer" image={Bayu} />
          <CardOurTeam name="Kukuh <br /> Pribadi" jobDesk="Web Developer" image={Kukuh} />
        </div>
        {/* card */}
      </div>
      {/* Our Team */}
      {/* footer */}
      <footer className="mt-20 md:mt-28 2xl:mt-72 flex gap-5 xs:gap-10 2xl:gap-0 pr-10 md:pr-20">
        <div className="bg-madooraYellow mix-blend-multiply w-[90px] relative">
          <div className="h-6 w-6 2xl:h-10 2xl:w-10 bg-black absolute top-8 2xl:top-14 -right-3 2xl:-right-5 rotate-45"></div>
        </div>
        <div className="w-full 2xl:w-[1350px] mx-auto pt-3 pb-5">
          <div className="flex justify-between items-end">
            <div className="flex gap-3 mb-4 w-full 2xl:hidden">
              <div className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 bg-black"></div>
              <div className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 bg-black"></div>
              <div className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 bg-black"></div>
              <div className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 bg-black"></div>
            </div>
            <div className="hidden 2xl:flex w-full h-72 justify-center relative">
              <img
                src={FooterImage}
                className="w-3/4 absolute -top-52 right-24 mix-blend-multiply"
                alt=""
              />
              <div className="flex gap-3 mb-4 w-full absolute bottom-0 left-[60%]">
                <div className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 bg-black"></div>
                <div className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 bg-black"></div>
                <div className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 bg-black"></div>
                <div className="w-2.5 h-2.5 2xl:w-4 2xl:h-4 bg-black"></div>
              </div>
            </div>
            <div className="text-right font-georgia 2xl:text-2xl">
              <p>Contact Us:</p>
              <p className="-mt-1">+62 858 7960 6878</p>
              <p className="-mt-1">studio@madoora.com</p>
              <h3 className="font-indigo text-5xl xs:text-6xl 2xl:text-8xl">Madoora</h3>
            </div>
          </div>
          <div className="mt-5 md:mt-10">
            <p className="font-georgia text-sm md:text-center 2xl:text-lg 2xl:p-8">
              © {year} All Right Reserved | Madoora
            </p>
          </div>
        </div>
      </footer>
      {/* footer */}
    </div>
  );
}

export default App;
