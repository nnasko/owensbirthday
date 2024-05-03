"use client"
// components/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date('2025-04-25') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center py-10">
      <div className="flex justify-center items-center mb-5">
        <img className='h-40' src='owen.jpg' alt="Owen's Birthday"></img>
      </div>
      <h1 className="text-3xl font-bold mb-5">🎉🎉🎉Countdown to Owens 27th Birthday🎉🎉🎉</h1>
      <div className="flex justify-center items-center">
        <div className="bg-gray-800 text-white px-4 py-2 mr-2 rounded">{timeLeft.days} Days</div>
        <div className="bg-gray-800 text-white px-4 py-2 mr-2 rounded">{timeLeft.hours} Hours</div>
        <div className="bg-gray-800 text-white px-4 py-2 mr-2 rounded">{timeLeft.minutes} Minutes</div>
        <div className="bg-gray-800 text-white px-4 py-2 mr-2 rounded">{timeLeft.seconds} Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
