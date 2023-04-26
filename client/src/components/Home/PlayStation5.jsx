import React from "react";
import ADS from "../../assets/Home/Dualsense.webp";
import EXPAND from "../../assets/Home/Expand.png";
import DSENSE from "../../assets/Home/DualSenses3.jpg";
import DSENSE2 from "../../assets/Home/DualSenses2.jpg";

export default function PlayStation5() {
  return (
    <div className="playstation5">
      <section className="ads-playstation5">
        <div className="ads-playstation5-content">
          <h1>PlayStation 5</h1>
          <span>
            Take a closer look at the PS5 console UI and discover some of the
            new ways to play.
          </span>
        </div>
        <div className="ads-playstation5-btn">
          <a
            href="http://localhost:3000/product/hardware/6446bfecfab100f5be2b531f"
            alt=""
          >
            Learn more
          </a>
        </div>
        <img className="ads-playstation5-img" src={ADS} alt="ads" />
      </section>
      <section>
        <div className="expand-your-senses">
          <h1 className="text-center">Expand your senses</h1>
          <p>
            Expand your senses An ultra-fast SSD provides lightning-fast data
            loading, while tactile feedback, adaptive triggers, and 3D audio*
            add to the immersion in incredible next-gen PlayStation games.
          </p>
          <img src={EXPAND} alt="" />
        </div>
      </section>
      <section>
        <div className="play-no-limit">
          <h1 className="text-center">PLAY HAS NO LIMIT</h1>
          <div className="play-no-limit-container">
            <div className="play-no-limit-first">
              <span className="play-no-limit-left">
                <h2>Haptic feedback</h2>
                <p>
                  Feel the physical impact of your gaming action with dual
                  drives replacing traditional vibration motors. In your hands,
                  these dynamic vibrations can mimic the feel of everything from
                  the environment to the recoil of a variety of weapons.
                </p>
              </span>
              <div className="play-no-limit-right">
                <img src={DSENSE2} alt="" />
              </div>
            </div>
            <div className="adaptive-activation">
              <div className="adaptive-activation-left">
                <img src={DSENSE} alt="" />
              </div>
              <span className="adaptive-activation-right">
                <h2>Adaptive activation</h2>
                <p>
                  Experience different levels of strength and tension as you
                  interact with your device and in-game environment. From
                  pulling an increasingly tight rope to slamming the brakes when
                  a car is speeding, feel the physical connection to your
                  on-screen actions.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
