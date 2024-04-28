'use client'
import { useEffect, useState } from 'react';
import rainSound from 'public/sounds/rain-sounds-light.mp3';

export default function Home() {

  const [rainAudio]= useState(new Audio(rainSound));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Set loop to true to make it loop
    rainAudio.loop = true;
    if (isPlaying) {
      rainAudio.play();
    } else {
      rainAudio.pause();
    }

    return () => {
      // Cleanup function to stop the audio when component unmounts
      rainAudio.pause();
      rainAudio.currentTime = 0;
    };
  }, [isPlaying]); // Run this effect whenever isPlaying changes

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };


  return (
   <div className="h-full bg-slate-100 text-zinc-900">Hi there
    <div>
      <button onClick={togglePlay}>
        {isPlaying ? '||' : '>'}
      </button>
    </div>
   </div>
  )
}
