import footerBg from "../assets/footer-bg.jpg";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

import { mainList, movieList, seriesList } from "../data/footerLists.js";

const Footer = () => {
  const listItemClasses = "transition duration-300 hover:text-indigo-500";

  return (
    <div
      className="page-container py-6 md:py-12 relative"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="relative z-50 grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-8">
        <div className="flex flex-col items-center lg:items-start gap-3 md:gap-6">
          <Link to="/">
            <div className="flex flex-row items-center gap-3 text-white text-3xl md:text-4xl font-medium">
              <FaPlay className="text-indigo-500 scale-105" />
              <p>Movie Maze</p>
            </div>
          </Link>
          <ul className="flex flex-col items-center lg:items-start gap-1.5 md:gap-3 text-xl md:text-2xl text-gray-300 font-medium">
            {mainList.map((item) => (
              <li key={item.id} className={listItemClasses}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
          <div className="flex flex-col items-center lg:items-start gap-1.5 md:gap-3">
            <h2 className="text-2xl md:text-3xl text-white">Movies</h2>
            <ul className="w-full flex flex-col items-center lg:items-start gap-1 md:gap-2 text-lg md:text-xl text-gray-300">
              {movieList.map((item) => (
                <li key={item.id} className={listItemClasses}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1.5 md:gap-3">
            <h2 className="text-2xl md:text-3xl text-white">TV Series</h2>
            <ul className="w-full flex flex-col items-center lg:items-start gap-1 md:gap-2 text-lg md:text-xl text-gray-300">
              {seriesList.map((item) => (
                <li key={item.id} className={listItemClasses}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-30 w-full h-full bg-black bg-opacity-50"></div>
    </div>
  );
};

export default Footer;
