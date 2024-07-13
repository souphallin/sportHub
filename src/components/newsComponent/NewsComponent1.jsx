import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { formatDate, formatViews } from "../../components/common/newsUtils";

export default function NewsComponent1({
  image,
  title,
  released_date,
  className,
  handleNewsDetail,
}) {
  const formattedDate = formatDate(released_date);

  return (
    <>
      <div
        onClick={handleNewsDetail}
        className={`w-full h-auto cursor-pointer ${className}`}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden group">
          <img
            src={image}
            alt="sport news image"
            className={`w-full object-cover rounded-xl transform transition-transform duration-500 ${
              className.includes("row-span-2")
                ? "h-[270px] xl:h-[564px]"
                : "h-[270px]"
            }`}
          />
          <div className="absolute text-white left-0 bottom-0 w-full h-0 bg-gradient-to-b from-transparent to-gray-800 rounded-xl overflow-hidden flex flex-col pl-4 text-left transition-[height,opacity] duration-500 group-hover:h-full group-hover:opacity-100 opacity-0 pb-2">
            <h3 className="text-xl font-bold mb-2 mt-auto tracking-wider line-clamp-1">
              {title}
            </h3>
            <p className="text-sm mb-2 font-light flex items-center">
              <FaCalendarAlt className="inline mr-2 w-[12px] h-[12px]" />
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
