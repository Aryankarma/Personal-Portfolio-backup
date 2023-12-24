import React, { useState, useEffect } from "react";
import '../src/App.css'

const words = ['A Web Developer', 'A Web Designer', 'A Tech Enthusiast'];


function TextAnimation() {
  const [part, setPart] = useState('');
  let i = 0;
  let offset = 0;
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 25;
  const speed = 200;

  const wordFlick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skipCount;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= words.length) {
            i = 0;
          }
        }
      }
      const currentPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setPart(currentPart);
    }, speed);
  };

  useEffect(() => {
    wordFlick();
    
  }, []); // Run once when the component mounts

  return (
      <div id="subhead">{part}</div>
  );
}

export default TextAnimation