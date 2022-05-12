import { useState, useEffect } from "react";
import Player from "./components/Player/Player";

function App() {
  const [songs] = useState([
    {
      title: "Forget me too",
      artist: "Machine Gun Kelly ft Halsey",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Older",
      artist: "Solan",
      img_src: "./images/song-2.jpg",
      src: "./music/Older.mp3",
    },

    {
      title: "Unstoppable",
      artist: "Sia",
      img_src: "./images/song-3.jpg",
      src: "./music/Unstoppable.mp3",
    },
    {
      title: "Olo-Mi",
      artist: "Tosin Martins",
      img_src: "./images/song-4.jpg",
      src: "./music/Olo-Mi.mp3",
    },
    {
      title: "Hustle",
      artist: "Teni",
      img_src: "./images/song-5.jpg",
      src: "./music/Hustle.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div class="flex justify-center items-center mt-16">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
