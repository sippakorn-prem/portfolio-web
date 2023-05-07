import styles from './Background.module.scss';
import { ReactElement, useEffect } from 'react';
import { brown } from '@mui/material/colors';
import BackgroundAudio from './BackgroundAudio';
import Logo from './Logo';
import Layout from './Layout';

async function testAudio(): Promise<void> {
  const res = await fetch(
    'https://cms-public-artifacts.artlist.io/content/music/aac/735727_710450_Gil_Lewis_-_Lofi_Pop_-_AO-000767-1_-_Master_V1_-_88_Bpm_-_120622_-__BOV_-_ORG_-_2444.aac'
  );
  const audioContext = new AudioContext();
  const arrayBuffer = await res.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  filterData(audioBuffer);
}

const filterData = (audioBuffer: AudioBuffer): number[] => {
  const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
  const samples = Math.floor(audioBuffer.duration); // Number of samples we want to have in our final data set
  const blockSize = Math.floor(rawData.length / samples); // Number of samples in each subdivision
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    filteredData.push(rawData[i * blockSize]);
  }
  console.log({ samples, rawData, blockSize });
  return filteredData;
};

export default function Background(): ReactElement {
  return (
    <Layout>
      <div className={styles.topLeftLogo}>
        <Logo fill={brown[300]} />
      </div>
    </Layout>
  );
}
