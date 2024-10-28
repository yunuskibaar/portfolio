import React, { useState, useEffect } from 'react';
import '../styles/TypeWriter.css';

const Typewriter = ({ texts, speed = 250, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && forward) {
      setIndex((index + 1) % texts.length); // Dönen döngü için index'i güncelle
      setSubIndex(0); // Subindex'i sıfırla
    } else if (subIndex === 0 && !forward) {
      setForward(true); // Yazma yönünü tekrar düz yap
      setSubIndex(0); // Subindex'i sıfırla
    }

    const timeout = setTimeout(() => {
      setSubIndex(subIndex + (forward ? 1 : -1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, texts, speed, delay]);

  return <span className="typewriter">{texts[index].substring(0, subIndex)}</span>;
};

export default Typewriter;
