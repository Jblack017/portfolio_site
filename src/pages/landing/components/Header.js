import React, { useState } from "react";

export default function Header({ setBodyContent }) {
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = [
    "Full Stack Software Engineer",
    "Loving Husband",
    "If you Git it, you Git it!",
    "Stores jokes in Dada-Base",
    "Undeniably Dad",
    "Jovial Josh",
    "Plays with Python",
    "Rides the Ruby Train",
    "Goal Setting / Go Getter",
    "JavaScript Junky",
    "CX Enthusiast",
    "Ad Tech Knowledgeable",
    "Site Built In Tailwind",
    "Go Love Yourself!",
  ];

  const setTitle = () => {
    if (titleIndex === titles.length - 1) {
      setTitleIndex(0);
    } else {
      let newIndex = titleIndex;
      ++newIndex;
      setTitleIndex(newIndex);
    }
  };

  const handleNavClick = e => {
    setBodyContent(e.target.value);
  };

  return (
    <header onClick={setTitle} className='flex-row order-first h-auto'>
      <h1 className='text-primary h-1/4 text-5xl text-opacity-95 font-ShadowsIntoLight font-bold tracking-tight drop-shadow-2xl xs:tracking-widest   rounded-full border-2 border-secondary-light'>
        Joshua Blackham
      </h1>
      <h4 className='flex justify-center'>
        <p className='text-primary font-bold font-ShadowsIntoLight text-4xl animate-wiggle-reverse mr-2'>
          ~
        </p>
        <p className='text-secondary text-xl font-IndieFlower mt-2'>
          {titles[titleIndex]}
        </p>
        <p className='text-primary font-bold font-ShadowsIntoLight text-4xl animate-wiggle ml-2'>
          ~
        </p>
      </h4>
      <nav className='flex justify-center text-secondary xs:text-primary-dark font-ShadowsIntoLight space-x-7 underline'>
        <button
          className='font-extrabold tracking-widest'
          onClick={handleNavClick}
          value='home'
        >
          Home
        </button>
        <button
          className='font-extrabold tracking-widest'
          onClick={handleNavClick}
          value='projects'
        >
          Projects
        </button>
        <button
          className='font-extrabold tracking-widest'
          onClick={handleNavClick}
          value='blogs'
        >
          Blogs
        </button>
        <button
          className='font-extrabold tracking-widest'
          onClick={handleNavClick}
          value='hobbies'
        >
          Hobbies
        </button>
      </nav>
    </header>
  );
}
