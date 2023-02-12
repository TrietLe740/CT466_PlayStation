import React from "react";

export default function BestGameAds() {
  return (
    <div className="best-game-now-container">
      <div className="best-game-now-header">
        <h1>BEST GAME THIS MONTH</h1>
      </div>
      <div className="best-game-now row">
        <div className="best-game-now-left col-5">
          <h2>God of War™ Ragnarök</h2>
          <p>
            From Santa Monica Studio comes the sequel to the critically
            acclaimed God of War (2018). Fimbulwinter is well underway. Kratos
            and Atreus must journey to each of the Nine Realms in search of
            answers as Asgardian forces prepare for a prophesied battle that
            will end the world.
          </p>
          <button className="btn">Find out more</button>
        </div>
        <div className="best-game-now-right col-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EE-4GvjKcfs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div>
        <img
          src="https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg"
          alt=""
        />
      </div>
      <div className="best-game-now row">
        <div className="best-game-now-right col-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HhZmybfPEvk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="best-game-now-left col-5">
          <h2>Horizon Zero Dawn: Complete Edition</h2>
          <p>
            Take on the role of skilled hunter Aloy as you explore a lush world
            inhabited by mysterious mechanized creatures in an exhilarating new
            Open World Action/ RPG exclusively
          </p>
          <button className="btn">Find out more</button>
        </div>
      </div>
    </div>
  );
}
