// components/CharacterCounter.tsx
import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import type { CharacterCounterProps, TextStats } from '../../types';

const CharacterCounter: React.FC<CharacterCounterProps> = ({
   maxWords = 1000,
  
}) => {
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  const calculateStats = (text: string): TextStats => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const characterCount = text.length;
    const readingTime = wordCount / 200; // average 200 words/minute

    return { wordCount, characterCount, readingTime };
  };

  const handleTextChange = (text: string) => {
    const newStats = calculateStats(text);
    setStats(newStats);
  };

  const wordProgress = Math.min((stats.wordCount / maxWords) * 100, 100);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <TextInput onTextChange={handleTextChange} placeholder="Start typing..." />
      <StatsDisplay stats={stats} />
      <div>
        <p>
          Word Goal: {stats.wordCount}/{maxWords}
        </p>
        <div style={{ background: '#eee', height: 10 }}>
          <div
            style={{
              height: '100%',
              width: `${wordProgress}%`,
              backgroundColor: wordProgress >= 100 ? 'green' : 'blue',
              transition: 'width 0.3s',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter;