import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Timer = () => {
     const [days, setDays] = useState(25);
     const [hours, setHours] = useState(0);
     const [minutes, setMinutes] = useState(0);
     const [seconds, setSeconds] = useState(0);

     useEffect(() => {
       const deadline = new Date("2025-05-28");  // Set the date and time when the offer will end

       const interval = setInterval(() => {
         const now = new Date().getTime();
         const distance = deadline - now;

         if (distance < 0) {
           clearInterval(interval);
           setDays(0);
           setHours(0);
           setMinutes(0);
           setSeconds(0);
         } else {
           const days = Math.floor(distance / (1000 * 60 * 60 * 24));
           const hours = Math.floor(
             (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
           );
           const minutes = Math.floor(
             (distance % (1000 * 60 * 60)) / (1000 * 60)
           );
           const seconds = Math.floor((distance % (1000 * 60)) / 1000);

           setDays(days);
           setHours(hours);
           setMinutes(minutes);
           setSeconds(seconds);
         }
       }, 1000);

       return () => clearInterval(interval);
     }, []);
    return (
      <div className="my-10">
        <div className="mt-36">
          <hr className="w-1/3 mx-auto" />
          <div className="mt-16">
            <p className="text-center text-3xl font-bold">
              Click Here to claim Your special free event
            </p>
            <section className="text-center mt-5">
              <Link className=" text-center text-3xl font-bold border px-2 py-1 rounded-xl ml-5 text-green-500 hover:border-green-500">
                Claim
              </Link>
            </section>
            <p className="text-center font-extrabold text-2xl mt-20">
              The Event  Will over in :
            </p>
            <div className="text-center ">
              <div className=" justify-center mt-10 grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span
                      className="text-green-500"
                      style={{ "--value": days }}
                    >
                      {days}
                    </span>
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span
                      className="text-green-500"
                      style={{ "--value": hours }}
                    >
                      {hours}
                    </span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span
                      className="text-green-500"
                      style={{ "--value": minutes }}
                    >
                      {minutes}
                    </span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span
                      className="text-green-500"
                      style={{ "--value": seconds }}
                    >
                      {seconds}
                    </span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Timer;