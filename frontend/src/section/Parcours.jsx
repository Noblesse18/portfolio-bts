import React from "react";

import { jobs } from "../constants";

const Parcours = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <p className="text-3xl mb-4">Mon Parcours Professionnel</p>

      <div className="flex flex-col items-center justify-around gap-4 mt-3">
        {jobs.map((job) => (
          <div
            key={job.poste}
            className="flex flex-col items-center p-4 rounded-xl
              transition-transform duration-300
              hover:scale-110 hover:-translate-y-1
              border border-white/10 bg-white/5"
          >
            <p className="mt-2 text-xl font-bold">{job.poste}</p>
            <p className="mt-2 text-lg">{job.entreprise}</p>
            <p className="mt-2 text-sm text-gray-300">{job.duree}</p>
            <p className="mt-2 text-base text-center">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parcours;
