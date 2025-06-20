// components/StatsDisplay.tsx
import React from 'react';
import type { StatsDisplayProps } from '../../types';

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {
  return (
    <div>
      <p>Characters: {stats.characterCount}</p>
      <p>Words: {stats.wordCount}</p>
      {showReadingTime && <p>Reading Time: ~{stats.readingTime.toFixed(1)} min</p>}
    </div>
  );
};

export default StatsDisplay;
