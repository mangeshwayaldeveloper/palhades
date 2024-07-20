import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const Video = ({
  playing,
  replay,
  setReplay,
  showLogo,
  setShowLogo,
  setPlaying,
}: {
  playing: boolean;
  replay: boolean;
  setReplay: (value: boolean) => void;
  showLogo: boolean;
  setShowLogo: (value: boolean) => void;
  setPlaying: (value: boolean) => void;
}) => {
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (replay) {
      if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
      setPlaying(true);
      setReplay(false);
      setShowLogo(false);
    }
  }, [replay, setReplay, setShowLogo]);

  return (
    <div className="player-wrapper">
      {showLogo ? (
        <div
          className="absolute
          inset-0 flex items-center justify-center"
        >
          <img
            src="src/assets/logo.jpg"
            alt="Video Player"
            className="rounded-full"
          />
        </div>
      ) : (
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url="src/assets/palhades-demo.mp4"
          width="100%"
          height="100%"
          controls={false}
          playing={playing}
        />
      )}
    </div>
  );
};

export default Video;
