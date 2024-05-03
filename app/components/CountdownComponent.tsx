"use client"
// components/Countdown.js
import React, { useState, useEffect } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import { TypeAnimation } from 'react-type-animation';

const Countdown = () => {
  return (
    <div className="text-center py-10">
      <div className="flex justify-center items-center mb-5">
        <img className='h-40 border-4 border-black rounded-xl' src='owen.jpg' alt="Owen's Birthday"></img>
      </div>
      <TypeAnimation
        sequence={[
          'Whos? Birthday is in',
          1000,
          'OWENS! 🥳🥳 Birthday is in',
          1000,
        ]}
        speed={20}
        className='text-white font-extrabold'
        style={{ fontSize: '2em' }}
        repeat={Infinity}
      />
      <div className="flex justify-center items-center">
        <FlipClockCountdown to={"2025-04-25"} showSeparators={false}
        > 
        HAPPY BIRTHDAY!!! 🥳🥳
        </FlipClockCountdown>
      </div>
    </div>
  );
};

export default Countdown;
