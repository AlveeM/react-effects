import React, { useState, useEffect } from 'react'
import "./Counter.css"

export default function Counter() {
  console.log("%cApp: render start", "color: LightGreen");

  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(5);
  
  const increase = () => setCount(count + 1);
  
  const decrease = () => setCount(prevCount => {
    if (prevCount <= 0) return 0;
    return prevCount - 1;
  })
  
  const reset = () => setCount(0);

  useEffect(() => {
    console.log(`%cCounter: Run Effects`, "color: Yellow");
    
    let timerId = setTimeout(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    return function cleanUp() {
      console.log(`%cCounter: Cleanup Effects`, "color: HotPink");
      clearTimeout(timerId);
    }
  }, [count, setCount]);
  
  console.log("%cApp: browser paints screen", "color: LightGreen");
  return (
    <div className="counter-container">
      <p className="counter-count">{count}</p>
      <div className="counter-controls">
        <button className="counter-btn" onClick={increase}>Increase</button>
        <button className="counter-btn" onClick={decrease}>Decrease</button>
        <button className="counter-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
