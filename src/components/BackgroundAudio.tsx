import { useEffect, useRef, useState } from 'react';

const album: string[] = [
  'https://cms-public-artifacts.artlist.io/content/music/aac/735727_710450_Gil_Lewis_-_Lofi_Pop_-_AO-000767-1_-_Master_V1_-_88_Bpm_-_120622_-__BOV_-_ORG_-_2444.aac',
  'https://cms-public-artifacts.artlist.io/content/music/aac/746097_741967_Cedric_Simon_-_JazzifiBeats_-_AO-000827_-_Master_V2_-_96_Bpm_-_210822_-_BOV_-_ORG_-_2444.aac',
];

const BackgroundAudio = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (userHasInteracted) {
      const audio = new Audio(album[currentSongIndex]);
      audio.volume = 0.5;
      audioRef.current = audio;
      audio.addEventListener('ended', () => {
        setCurrentSongIndex((currentSongIndex + 1) % album.length);
        const newAudio = new Audio(album[currentSongIndex]);
        newAudio.volume = 0.5;
        audioRef.current = newAudio;
        newAudio.play();
      });
      audio.play();
      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      };
    }
  }, [currentSongIndex, userHasInteracted, album]);

  const handleUserInteraction = () => {
    setUserHasInteracted(true);
  };

  const handleVolumeChange = (event) => {
    const newVolume = Number(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handlePlayNext = () => {
    setCurrentSongIndex((currentSongIndex + 1) % album.length);
    const audio = audioRef.current;
    audio.src = album[currentSongIndex];
    audio.play();
  };

  return (
    <div>
      <button onClick={handleUserInteraction}>Click to start background music</button>
      {userHasInteracted && (
        <>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0.5"
            onChange={handleVolumeChange}
          />
          <button onClick={handlePlayNext}>Play Next</button>
        </>
      )}
    </div>
  );
};

export default BackgroundAudio;
