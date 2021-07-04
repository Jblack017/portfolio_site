import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyContent from "./components/BodyContent";

export default function Home() {
  const [bodyContent, setBodyContent] = useState("home");

  return (
    <div className='flex-row h-screen bg-retro-digital bg-center bg-cover pt-1 px-2'>
      <Header setBodyContent={setBodyContent} />
      <BodyContent bodyContent={bodyContent} />
      <Footer />
    </div>
  );
}
