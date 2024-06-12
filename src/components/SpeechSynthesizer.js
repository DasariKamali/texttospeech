// SpeechSynthesizer.js
import React, { useState, useEffect } from 'react';
import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk'; 

const SpeechSynthesizer = () => {
  const [synthesizer, setSynthesizer] = useState(null);
  const text = "Hi Kamali. Welcome to my worlld!"; 

  useEffect(() => {
    initializeSynthesizer();
  }, []);

  const initializeSynthesizer = () => {
    const speechConfig = SpeechSDK.SpeechConfig.fromSubscription('speech_key', 'speech_region');
    const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
    const synth = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);
    setSynthesizer(synth);
  };

  const synthesizeSpeech = () => {
    if (synthesizer) {
      synthesizer.speakTextAsync(
        text,
        result => {
          console.log(result);
        },
        error => {
          console.error('Error synthesizing speech: ', error);
        }
      );
    }
  };

  return (
    <div>
      <button onClick={synthesizeSpeech}>Synthesize Speech</button>
    </div>
  );
};

export default SpeechSynthesizer;
