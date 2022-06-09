import Face from "../assets/trollface.png";

export default function Header() {
  return (
    <nav className="relative ">
      <div className="flex items-center justify-center md:justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 md:px-12 lg:px-32 py-2">
        <div className=" flex justify-center items-center ">
          <img src={Face} alt="memegenerator" className="w-12" />
          <p className="font-semibold text-2xl p-3 text-white">
            Meme Generator
          </p>
        </div>
        <div className="mt-3 text-white flex hidden md:block justify-center items-center">
          <p className="font-semibold"> React Course - Project 3 </p>
        </div>
      </div>
    </nav>
  );
}
