import React from "react";
import Blogs from "../../blogs/Blogs";
import Hobbies from "../../hobbies/Hobbies";

export default function BodyContent({ bodyContent }) {
  let page;

  switch (bodyContent) {
    default:
      page = "home";
      break;
    case "projects":
      page = "projects";
      break;
    case "blogs":
      page = <Blogs />;
      break;
    case "hobbies":
      page = <Hobbies />;
      break;
  }

  return <div className='flex-2 w-auto h-1/2 my-2 '>{page}</div>;
}
