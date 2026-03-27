import React from "react";

export function TimeLine() {
  return (
    <ul className="p-4 lg:p-8 bg-white text-gray-800">
      <li>
        <article>
          <a className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-100 border border-gray-300">
            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
              Earum at ipsa aliquid quis, exercitationem est.
            </h3>
            <time className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-800">
              Oct 13, 2020
            </time>
            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique saepe exercitationem numquam, labore necessitatibus
              deleniti quasi. Illo porro nihil necessitatibus debitis delectus
              aperiam, fuga impedit assumenda odit, velit eveniet est.
            </p>
          </a>
        </article>
      </li>
    </ul>
  );
}
