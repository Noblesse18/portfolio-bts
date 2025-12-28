import React from "react";
import { skill } from "../constants";

const Skill = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="text-4xl">Mes Compétences</p>
      </div>
      <br />

      <p className="text-xl">
        Toutes ces connaissances ont été acquises de différentes façons. Elles
        ont été acquises durant mes études en BTS SIO et d'autres par ma propre
        initiative en essayant de mettre en place des solutions. J’ai également
        relevé les défis organisés, ce qui permet d’effectuer des recherches et
        aller encore plus loin.
      </p>
      <br />
      <div className="flex justify-around gap-1 mt-4 ">
        {skill.map((items) => (
          <div
            key={items.name}
            className="skill-item flex flex-col items-center p-4 rounded-xl
                 transition-transform duration-300
                 hover:scale-110 hover:-translate-y-1
                 border border-white/10 bg-white/5"
          >
            <img src={items.icon} alt={items.name} className="w-12 h-12" />
            <p className="mt-2">{items.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
