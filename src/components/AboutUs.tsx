import { useState } from "react";
import Video from "./Video";
import { Play, Pause, Repeat } from "@phosphor-icons/react";

function AboutUs() {
  const [playing, setPlaying] = useState(false);
  const [replay, setReplay] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const handlePlay = () => {
    setPlaying(true);
    setShowLogo(false);
  };
  const handlePause = () => {
    setPlaying(false);
    setShowLogo(false);
  };
  const handleReplay = () => {
    setReplay(true);
    setShowLogo(false);
  };

  return (
    <>
      <div className="md:grid grid-cols-2 p-10">
        <div className="aspect-w-5 aspect-h-3">
          <Video
            playing={playing}
            replay={replay}
            setReplay={setReplay}
            showLogo={showLogo}
            setShowLogo={setShowLogo}
            setPlaying={setPlaying}
          />
        </div>
        <div className="w-3/4 ml-10 mt-7 cursor-default">
          <div className="text-header font-bold">ABOUT US</div>
          <div className="text-theme font-bold text-3xl my-6">
            Welcome to Palhade's B2C Services, your top choice for personal
            ground transportation in Pune.
          </div>
          <div className="my-4 border-l-4 border-fuchsia-600 pl-5 text-gray-600 text-lg">
            We prioritize safety, comfort, and customer satisfaction, offering a
            variety of travel services tailored to your needs. From daily
            commutes to special events, our professional drivers and
            well-maintained vehicles deliver a seamless travel experience.
          </div>
          <div className="font-semibold text-slate-600 text-xl">
            Choose us for reliable, convenient, and high-quality travel
            services.
          </div>
          <div className="flex items-center gap-4 justify-between">
            <div className="flex gap-4">
              <Repeat
                size={32}
                className="text-purple-500 cursor-pointer hover:opacity-80 active:scale-110"
                onClick={handleReplay}
              />
              <Play
                size={32}
                className="text-header cursor-pointer hover:opacity-80 active:scale-110"
                onClick={handlePlay}
              />
              <Pause
                size={32}
                className="text-theme cursor-pointer hover:opacity-80 active:scale-110"
                onClick={handlePause}
              />
            </div>

            <div className="my-6">
              <div className="flex py-3 px-6 cursor-pointer bg-theme text-white hover:bg-header rounded-full shadow hover:shadow-xl transition duration-400">
                <span className="hidden md:block">Discover </span>
                <span className="ml-1"> more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
