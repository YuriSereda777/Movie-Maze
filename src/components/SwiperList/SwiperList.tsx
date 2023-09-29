import { Link } from "react-router-dom";
import SwiperListItems from "./SwiperListItems.js";

const SwiperList = ({ title, link, category, type }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl text-white font-medium">{title}</h2>
        <Link to={link}>
          <button className="text-gray-300 font-medium rounded-3xl transition duration-500 hover:text-indigo-500">
            View more
          </button>
        </Link>
      </div>
      <SwiperListItems category={category} type={type} />
    </div>
  );
};

export default SwiperList;