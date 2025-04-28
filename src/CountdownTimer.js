import {useState, useEffect} from "react";

const CountdownTimer = () => {
   const currentYear = new Date().getFullYear();
   const currentDate = new Date().getDate();
   const currentMonth = new Date().getMonth();
   const eventDate = currentDate + 1;

   const [seconds, setSeconds] = useState("");
   const [minutes, setMinutes] = useState("");
   const [hours, setHours] = useState("");

   

   const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date(`May ${eventDate}, ${currentYear} 23:59:59`).getTime();
      
      const timeLeft = targetDate - now;
      
      const seconds = Math.floor((timeLeft / 1000) % 60);
      const minutes = Math.floor((timeLeft / (1000 * 60) % 60));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);

      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
   }, 1000)


  return (

   

   <section className="timer">
         <div className="timer__time"><p><span>{hours.toString().padStart(2, "0")}</span><br /> годин</p></div>
         <div className="timer__time"><p><span>{minutes.toString().padStart(2, "0")}</span><br /> хвилин</p></div>
         <div className="timer__time"><p><span>{seconds.toString().padStart(2, "0")}</span><br /> секунд</p></div>
   </section>

  )
}

export default CountdownTimer
