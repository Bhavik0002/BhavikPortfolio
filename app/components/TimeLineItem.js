import React from 'react';

const TimeLineItem = ({ time, title, link, description }) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-lime-50"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-600">{time}</time>
      <h3 className="text-lg font-semibold sm:text-xs md:text-sm text-gray-900">{title}
      {link && (
          <>
            &nbsp;
            <a href={link.url} target="_blank" className="text-blue-600 sm:text-xs">
              {link.text}
            </a>
          </>
        )}</h3>
      <p className="text-base font-normal sm:text-xs md:text-base text-gray-500">{description}</p>
    </li>
  );
};

export default TimeLineItem;