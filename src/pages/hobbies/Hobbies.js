import React, { useState } from "react";

export default function Hobbies() {
  const [hobbiesIndex, setHobbiesIndex] = useState(0);

  // const setTitle = direction => {
  //   if (hobbiesIndex === hobbies.length - 1) {
  //     setHobbiesIndex(0);
  //   } else {
  //     let newIndex = hobbiesIndex;
  //     direction = "forward" ? ++newIndex
  //     ++newIndex;
  //     setHobbiesIndex(newIndex);
  //   }
  // };

  const hobbies = [
    <iframe
      title='Denver Zoo'
      className='h-full
    w-full'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.5317551323237!2d-104.95114168447742!3d39.7501678038308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c794e20258f71%3A0x53fd0ed23d876c29!2sDenver%20Zoo!5e0!3m2!1sen!2sus!4v1625373661323!5m2!1sen!2sus'
      loading='lazy'
    ></iframe>,
    <iframe
      title='3D Printing'
      className='h-full
    w-full'
      src='https://en.wikipedia.org/wiki/3D_printing'
      loading='lazy'
    ></iframe>,
    <iframe
      title='Poker'
      className='h-full
    w-full'
      src='https://en.wikipedia.org/wiki/World_Series_of_Poker'
      loading='lazy'
    ></iframe>,
    <iframe
      title='Video Games'
      className='h-full
    w-full'
      src='https://magic.wizards.com/en/mtgarena'
      loading='lazy'
    ></iframe>,
  ];

  return (
    <>
      <button
        className='absolute text-2xl w-4 h-1/2 left-2 bg-secondary-dark opacity-95'
        value={hobbiesIndex}
        onClick={e =>
          setHobbiesIndex(
            hobbiesIndex === 0 ? hobbies.length - 1 : --e.target.value
          )
        }
      >
        {"<"}
      </button>
      <button
        className='absolute text-2xl w-4 h-1/2 right-2 bg-secondary-dark opacity-95'
        value={hobbiesIndex}
        onClick={e =>
          setHobbiesIndex(
            hobbiesIndex === hobbies.length - 1 ? 0 : ++e.target.value
          )
        }
      >
        {">"}
      </button>
      {hobbies[hobbiesIndex]}
    </>
  );
}
