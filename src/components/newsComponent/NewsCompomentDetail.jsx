import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SportHubLogo.png";
import { FaCalendarAlt } from "react-icons/fa";
import { formatDate, formatViews } from "../../components/common/newsUtils";


export default function NewsCompomentDetail({
  image,
  title,
  released_date,
  view,
  body,
}) {
  const formattedDate = formatDate(released_date);
  const formattedViews = formatViews(view);

  // Split the body text into paragraphs
  const paragraphs = body
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "");

  return (
    <>
      <div className=" w-full h-auto mt-28 mb-32">
        <div className="flex flex-row justify-start items-center">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-7"
            />
          </Link>
          <Link to="/news">
            <h3 className="text-xl text-[#222162] font-semibold my-5">
              <span className=" text-2xl text-red-800 px-2">|</span>
              ព័ត៌មាន
            </h3>
          </Link>
        </div>
        <h1 className="text-xl md:text-3xl text-[#222162] font-bold leading-normal">
          {title}
        </h1>
        <p className="flex items-center text-gray-500 text-sm py-5">
          <FaCalendarAlt className="mr-2 w-[12px]" />
          {formattedDate} | {formattedViews} views
        </p>
        <div className="flex items-center mb-5">
          <img
            src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
            alt="publisher image"
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <p className="ml-4 text-md text-gray-800 font-semibold group-hover:text-[#222162]">
            publisher
          </p>
        </div>

        {/* news image */}
        <div className="pb-5 flex justify-center ">
          <img
            src={
              image ||
              "https://i.pinimg.com/564x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg"
            }
            alt="news image"
            className="w-auto h-auto object-cover forced-color-adjust-auto rounded-lg "
          />
        </div>

        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-md text-gray-900 leading-relaxed">
            {paragraph}
          </p>
        ))}

        <p className="text-md text-blue-700 hover:text-blue-800 font-normal pt-5">
          ប្រភព​ ៖​ Sabay News
        </p>
      </div>
    </>
  );
}
