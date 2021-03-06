import React, { useState } from "react";

export default function Hobbies() {
  const [hobbiesIndex, setHobbiesIndex] = useState(0);

  const hobbies = [
    <iframe
      title='Destination: Denver Zoo'
      className='h-full
    w-full'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.5317551323237!2d-104.95114168447742!3d39.7501678038308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c794e20258f71%3A0x53fd0ed23d876c29!2sDenver%20Zoo!5e0!3m2!1sen!2sus!4v1625373661323!5m2!1sen!2sus'
      loading='lazy'
    ></iframe>,
    <iframe
      title='Technology: 3D Printing'
      className='h-full
    w-full'
      src='https://en.wikipedia.org/wiki/3D_printing'
      loading='lazy'
    ></iframe>,
    <iframe
      title='Game: Poker'
      className='h-full
    w-full'
      src='https://en.wikipedia.org/wiki/World_Series_of_Poker'
      loading='lazy'
    ></iframe>,
    <iframe
      title='Game: Magic The Gathering'
      className='h-full
    w-full'
      src='https://magic.wizards.com/en/mtgarena'
      loading='lazy'
    ></iframe>,
    <iframe
      title='TV Show: Big Brother'
      className='h-full
    w-full'
      src='https://en.wikipedia.org/wiki/Big_Brother_(American_TV_series)'
    ></iframe>,
    <iframe
    title='TV Show: Survivor'
    className='h-full
  w-full'
    src='https://en.wikipedia.org/wiki/Survivor_(American_TV_series)'
  ></iframe>,
    <iframe
    title='TV Show: The Amazing Race'
    className='h-full
  w-full'
    src='https://en.wikipedia.org/wiki/The_Amazing_Race'
  ></iframe>,
    <iframe
    title='Destination: Mazatlan'
    className='h-full
  w-full'
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117308.79773474668!2d-106.49231753223347!3d23.246728325066588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f5341681837c1%3A0x62a4c4aaf13c72b2!2sMazatl%C3%A1n%2C%20Sinaloa%2C%20Mexico!5e0!3m2!1sen!2sus!4v1626228748531!5m2!1sen!2sus'
  ></iframe>,
  ];

  return (
    <content>
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
    </content>
  );
}
