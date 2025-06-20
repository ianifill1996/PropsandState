// components/TextInput.tsx
import React, { useState, useEffect } from 'react';
import  type { TextInputProps } from '../../types';

const TextInput: React.FC<TextInputProps> = ({ onTextChange, placeholder, initialValue = '' }) => {
  const [text, setText] = useState(initialValue);

  useEffect(() => {
    onTextChange(text);
  }, [text]);

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      rows={6}
      style={{ width: '100%', padding: '10px', fontSize: '16px' }}
    />
  );
};

export default TextInput;