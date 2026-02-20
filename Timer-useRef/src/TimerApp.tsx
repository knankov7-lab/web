import React, { useState, useRef } from 'react';

function TimerApp() {
  const [time, setTime] = useState(0); // Държи текущото време
  const intervalRef = useRef<number | null>(null); // Референтен достъп до интервала

  // Упътване 1: Функцията startTimer
  // - Проверете дали вече има активен интервал (intervalRef.current !== null)
  // - Ако няма активен интервал, създайте нов с помощта на setInterval
  // - Вътре в setInterval използвайте setTime((prevTime) => prevTime + 1), за да увеличавате времето
  // - Интервалът трябва да се изпълнява на всяка секунда (1000 ms)
  const startTimer = () => {
    if (intervalRef.current === null) {
      intervalRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Упътване 2: Функцията pauseTimer
  // - Спрете активния интервал с clearInterval(intervalRef.current)
  // - Не забравяйте да нулирате intervalRef.current на null, за да отбележите, че няма активен интервал
  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Упътване 3: Функцията resetTimer
  // - Спрете активния интервал по същия начин като във функцията pauseTimer
  // - Нулирайте времето като извикате setTime(0)
  const resetTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Таймер: {time} сек</h1>
      <button onClick={startTimer}>Старт</button>
      <button onClick={pauseTimer}>Пауза</button>
      <button onClick={resetTimer}>Нулиране</button>
    </div>
  );
}

export default TimerApp;
