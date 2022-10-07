import { useEffect, useState } from "react";

function Menu() {
  const calculateTimeLeft = () => {
    //   const year = new Date("2022, 6, 20").getMonth()
    //   console.log(year)
    const difference = +new Date("2022, 10, 30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="menu-section">
        <div className="container">
            <div>
            {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds < 0? (
                <div className="sec-padding">
                    <div class="section-title">
                        <h2 data-title="our menu">Official launching</h2>
                    </div>
                    <div className="row timer">
                        <div className="duration">
                            {timeLeft.days + " "}
                            <div className="menu-t">
                                days
                            </div>
                        </div>
                        <div className="duration">
                            {timeLeft.hours + " "}
                            <div className="menu-t">
                                hours
                            </div>
                        </div>
                        <div className="duration">
                            {timeLeft.minutes + " "}
                            <div className="menu-t">
                                minutes
                            </div>
                        </div>
                        <div className="duration">
                            {timeLeft.seconds + " "}
                            <div className="menu-t">
                                seconds
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="timeup">Time is up 🔥</p>
            )}
            </div>
            <div>
                    
            </div>
        </div>
    </div>
  );
}

export default Menu;