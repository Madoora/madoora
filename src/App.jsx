import HeaderImage from './assets/Header-Image.png';
import HeaderImageMobile from './assets/Header-Image-Mobile.png';
import MadooraGarden from './assets/Madoora-Website-Design2.jpg';
import AlamoConcrete from './assets/Alamo-Ranch-Concrete-Homepage.jpg';
import AlamoLandscaping from './assets/HomePage-Alamo-Ranch-Landscaping.jpg';
import DeadWood from './assets/AdobeStock_86383296.png';
import Boljem from './assets/boljem-Low.jpg';

function App() {
  return (
    <div className="bg-[url('./assets/BG-Pattern.jpg')] bg-repeat relative overflow-hidden">
      {/* header */}
      <div className="p-10 min-h-[600px] overflow-hidden relative">
        {/* heading1 */}
        <div className="mt-4 md:ml-10 text-2xl md:text-4xl tracking-widest">
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
        <div className="absolute hidden md:block top-0 lg:top-10 -ml-44 md:w-[1200px] ">
          <img src={HeaderImage} alt="" className="" />
        </div>
        {/* header-image */}
        {/* yellow-line */}
        <div className="bg-madooraYellow mix-blend-multiply w-28 absolute top-0 bottom-0 right-32 md:right-1/3">
          <div className="h-7 w-7 bg-black absolute -right-4 top-6"></div>
        </div>
        {/* yellow-line */}
        {/* logo */}
        <div className="text-5xl md:text-7xl font-indigo text-right absolute right-8 bottom-8 md:right-24 lg:right-40">
          Madoora
        </div>
        {/* logo */}
      </div>
      {/* header */}
      {/* section-1 */}
      <div className="p-10 md:p-20 h-full">
        {/* content */}
        <div className="grid gap-8 font-helvetica">
          {/* content-1 */}
          <div className="flex justify-start">
            <div className="w-[85%] lg:w-3/4">
              <h3 className="text-xl font-bold tracking-widest">Website Design</h3>
              <p className="mt-2">
                Elevate your brand with Madoora's exceptional website design service—where
                innovation, aesthetics, and user experience converge seamlessly.
              </p>
            </div>
          </div>
          {/* content-1 */}
          {/* content-2 */}
          <div className="flex justify-end lg:justify-start">
            <div className="text-right lg:text-left w-[85%] lg:w-3/4">
              <h3 className="text-xl font-bold tracking-widest">Website Development</h3>
              <p className="mt-2">
                Madoora transforms ideas into dynamic online solutions with expert website
                development—innovation, efficiency, and user-focused excellence
              </p>
            </div>
          </div>
          {/* content-2 */}
          {/* content-3 */}
          <div className="flex justify-start">
            <div className="w-[85%] lg:w-3/4">
              <h3 className="text-xl font-bold tracking-widest">Logo Design</h3>
              <p className="mt-2">
                Madoora crafts impactful logos that capture your brand essence, blending creativity
                and strategy for lasting impressions.
              </p>
            </div>
          </div>
          {/* content-3 */}
        </div>
        {/* content */}
        {/* image */}
        <div className="w-[800px] absolute top-[400px] -right-[350px] hidden lg:block">
          <img src={DeadWood} alt="" className="transform -scale-x-100 rotate-[30deg]" />
        </div>
        {/* image */}
      </div>
      {/* section-1 */}
      {/* step-we-work */}
      <div className="mt-10 lg:px-20 grid lg:grid-cols-2 w-full">
        {/* heading */}
        <div className="flex justify-between items-center lg:items-start">
          <div className="ml-10 md:ml-20 lg:ml-0 w-[50%]">
            <h2 className="font-indigo lg:font-georgia text-3xl lg:text-xl xs:text-[40px] md:text-5xl">
              Step We Work
            </h2>
          </div>
          <div className="lg:hidden h-16 w-[40%] bg-madooraYellow mix-blend-multiply relative">
            <div className="h-7 w-7 bg-black absolute -bottom-3 -left-3 rotate-45"></div>
          </div>
        </div>
        {/* heading */}
        {/* content */}
        <div className="mt-14 lg:mt-0 font-georgia text-lg lg:-ml-20">
          <div className="flex gap-10 px-10 md:px-20 py-5 border-y border-black">
            <div>
              <p>01</p>
            </div>
            <div>
              <p>Briefing and Research</p>
            </div>
          </div>
          <div className="flex gap-10 px-10 md:px-20 py-5 border-b border-black">
            <div>
              <p>02</p>
            </div>
            <div>
              <p>Brainstorming & Sketching</p>
            </div>
          </div>
          <div className="flex gap-10 px-10 md:px-20 py-5 border-b border-black">
            <div>
              <p>03</p>
            </div>
            <div>
              <p>Designing & Detailing</p>
            </div>
          </div>
          <div className="flex gap-10 px-10 md:px-20 py-5 border-b border-black">
            <div>
              <p>04</p>
            </div>
            <div>
              <p>Developing & Testing</p>
            </div>
          </div>
          <div className="flex gap-10 px-10 md:px-20 py-5 border-b border-black">
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
      <div className="mt-10 xs:mt-20">
        {/* heading */}
        <div className="flex justify-start items-center">
          <div className="h-16 lg:h-28 w-[40%] lg:w-[60%] bg-madooraYellow mix-blend-multiply relative">
            <div className="h-7 w-7 bg-black absolute -bottom-3 -right-3 rotate-45"></div>
          </div>
          <div className="ml-10 lg:ml-20 lg:w-full lg:flex lg:items-center lg:pr-20 gap-10">
            <h2 className="font-indigo text-[40px] md:text-5xl">Portfolio</h2>
            <hr className="w-full hidden lg:block bg-black h-0.5" />
          </div>
        </div>
        {/* heading */}
        {/* content */}
        <div className="px-10 md:px-20 mt-10 xs:mt-20 grid md:grid-cols-3 gap-5">
          <div className="bg-red-400 h-[350px]">
            <img src={MadooraGarden} alt="" className="h-full w-full object-cover object-top" />
          </div>
          <div className="bg-red-400 h-[350px]">
            <img src={AlamoConcrete} alt="" className="h-full w-full object-cover object-top" />
          </div>
          <div className="bg-red-400 h-[350px]">
            <img src={AlamoLandscaping} alt="" className="h-full w-full object-cover object-top" />
          </div>
        </div>
        {/* content */}
      </div>
      {/* portfolio */}
      {/* form */}
      <div className="grid lg:grid-cols-2 md:shadow-lg mt-20 md:mt-32 mx-10 md:mx-20">
        <div className="hidden md:block bg-[#1c1a1b] h-72 lg:h-full">
          <img src={Boljem} className="object-contain lg:object-cover w-full h-full" alt="" />
        </div>
        <div className="md:bg-white md:p-20 lg:px-10 grid gap-10">
          {/* heading */}
          <div className="relative">
            <h3 className="text-center text-3xl font-georgia">Reach Us</h3>
            <div className="h-3 w-3 bg-black absolute top-3 right-5 rotate-45"></div>
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
      {/* footer */}
      <footer className="mt-20 md:mt-28 flex gap-5 xs:gap-10 pr-10 md:pr-20">
        <div className="bg-madooraYellow w-[90px] relative">
          <div className="h-6 w-6 bg-black absolute top-8 -right-3 rotate-45"></div>
        </div>
        <div className="w-full pt-3 pb-5">
          <div className="flex justify-between items-end">
            <div className="flex gap-3 mb-4">
              <div className="w-2.5 h-2.5 bg-black"></div>
              <div className="w-2.5 h-2.5 bg-black"></div>
              <div className="w-2.5 h-2.5 bg-black"></div>
              <div className="w-2.5 h-2.5 bg-black"></div>
            </div>
            <div className="text-right font-georgia">
              <p>Contact Us:</p>
              <p className="-mt-1">+62 858 7960 6878</p>
              <p className="-mt-1">studio@madoora.com</p>
              <h3 className="font-indigo text-5xl xs:text-6xl">Madoora</h3>
            </div>
          </div>
          <div className="mt-5 md:mt-10">
            <p className="font-georgia text-sm md:text-center">
              © 2023 All Right Reserved | Madoora
            </p>
          </div>
        </div>
      </footer>
      {/* footer */}
    </div>
  );
}

export default App;
