# Character Counter App

This is a simple React application built with TypeScript that allows users to input text and view live statistics such as character count, word count, and estimated reading time. It demonstrates component communication, state management, and prop typing in a modular design.

## Features

- Real-time character and word count
- Estimated reading time calculation
- Word goal progress bar
- Component-based architecture using TypeScript interfaces

## Project Structure
src/
├── components/
│ ├── CharacterCounter/
│ │ └── CharacterCounter.tsx
│ ├── StatsDisplay/
│ │ └── StatsDisplay.tsx
│ └── TextInput/
│ └── TextInput.tsx
└── types/
└── index.ts


## Component Overview

### TextInput

Handles user input using a `<textarea>`. Accepts a placeholder, an optional initial value, and a callback function (`onTextChange`) to send the updated text back to the parent.

### StatsDisplay

Receives calculated statistics from the parent and displays character count, word count, and optionally reading time. Controlled entirely through props.

### CharacterCounter

Manages overall state of the app, including the current text and its calculated statistics. It combines the TextInput and StatsDisplay components and also displays word goal progress. Optional props allow for configuring minimum words, maximum words, and target reading time.

## How to Run

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser at `http://localhost:3000`

## Technologies Used

- React
- TypeScript
- CSS (inline styling for simplicity)

## License

This project is open-source and available under the MIT license.

# Character Counter App

This is a modular React + TypeScript application that tracks user input and displays live text statistics including character count, word count, and estimated reading time.

## Example Usage

In `App.tsx`:

```tsx
import React from 'react';
import CharacterCounter from './components/CharacterCounter/CharacterCounter';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Character Counter</h1>
      <CharacterCounter 
        minWords={50} 
        maxWords={300} 
        targetReadingTime={2} 
      />
    </div>
  );
};

export default App;
This initializes the full app with configurable props:

minWords: Minimum word goal (optional)

maxWords: Maximum word goal (optional, default: 1000)

targetReadingTime: Reading time limit in minutes (optional)

Component Documentation
TextInput Component
Props:

onTextChange: (text: string) => void – Callback triggered on input change

placeholder?: string – Optional placeholder text

initialValue?: string – Optional initial input value

Example:

tsx
Copy
Edit
<TextInput 
  onTextChange={(text) => console.log(text)} 
  placeholder="Type something..." 
/>
StatsDisplay Component
Props:

stats: { characterCount: number, wordCount: number, readingTime: number } – Statistics object

showReadingTime?: boolean – Optional, whether to show reading time (default: true)

Example:

tsx
Copy
Edit
<StatsDisplay 
  stats={{ characterCount: 150, wordCount: 30, readingTime: 0.15 }} 
/>
CharacterCounter Component
Props:

minWords?: number – Optional minimum word goal

maxWords?: number – Optional maximum word goal (default: 1000)

targetReadingTime?: number – Optional reading time limit in minutes

Example:

tsx
Copy
Edit
<CharacterCounter 
  minWords={50} 
  maxWords={300} 
  targetReadingTime={2} 
/>
Running the App
bash
Copy
Edit
npm install
npm start
