import { useEffect, useRef, useState } from 'react';

const album: string[] = [
  'https://cms-public-artifacts.artlist.io/content/music/aac/735727_710450_Gil_Lewis_-_Lofi_Pop_-_AO-000767-1_-_Master_V1_-_88_Bpm_-_120622_-__BOV_-_ORG_-_2444.aac',
  'https://cms-public-artifacts.artlist.io/content/music/aac/746097_741967_Cedric_Simon_-_JazzifiBeats_-_AO-000827_-_Master_V2_-_96_Bpm_-_210822_-_BOV_-_ORG_-_2444.aac',
];

const BackgroundAudio: React.FC = () => {
  const timer: NodeJS.Timeout | null = null;
  const [volume, setVolume] = useState(0.5);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [userHasInteracted, setUserHasInteracted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    try {
      if (userHasInteracted) {
        const audio = new Audio(album[currentSongIndex]);
        console.log(audio);
        audio.volume = volume;
        audioRef.current = audio;
        audio.addEventListener('ended', () => {
          if (isMounted) {
            setCurrentSongIndex((currentSongIndex + 1) % album.length);
            const newAudio = new Audio(album[currentSongIndex]);
            newAudio.volume = volume;
            audioRef.current = newAudio;
            newAudio.play().catch((e) => {
              throw e;
            });
          }
        });
        audio.play();
      }
    } catch (e) {
      console.log('this is error', e);
    }

    return () => {
      isMounted = false;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [currentSongIndex, userHasInteracted, volume, album]);

  // useEffect(() => {
  //   const timer = setInterval(getAudioPlaybackTime, 1000);
  //   return () => clearInterval(timer);
  // }, []);

  // function getAudioPlaybackTime(): void {
  //   console.log(audioRef?.current?.currentTime);
  // }

  const handleUserInteraction = (): void => {
    setUserHasInteracted(true);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handlePlayNext = (): void => {
    setCurrentSongIndex((currentSongIndex + 1) % album.length);
  };

  const handlePlay = (): void => {
    const audio = audioRef.current;
    if (audio && audio.paused) {
      audio.play();
    }
  };

  const handlePause = (): void => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      audio.pause();
    }
  };

  const handleStop = (): void => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
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
            value={volume}
            onChange={handleVolumeChange}
          />

          <button onClick={handlePlayNext}>Play Next</button>
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleStop}>Stop</button>
        </>
      )}
    </div>
  );
};

export default BackgroundAudio;
