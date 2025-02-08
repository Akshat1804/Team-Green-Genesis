import React, { useState } from "react";
import { motion } from "framer-motion";
import Button2 from "../Ui/Button2"; // ✅ Correct import
import  Progress  from "../Ui/Progress";

export default function Game() {
  const [happiness, setHappiness] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [ecoActions, setEcoActions] = useState(0);
  const [story, setStory] = useState(
    "Your tiny turtle, Terra, has just hatched in a world struggling with pollution. Help Terra grow by making sustainable choices!"
  );
  const [goals, setGoals] = useState([
    "Reduce plastic waste",
    "Use public transport",
    "Save electricity",
    "Plant a tree",
    "Use a reusable water bottle",
    "Compost food waste",
    "Participate in a cleanup drive",
    "Switch to energy-efficient bulbs",
    "Reduce water usage while brushing",
    "Support sustainable brands",
  ]);
  const [completedGoals, setCompletedGoals] = useState([]);

  const logEcoAction = (goal) => {
    setEcoActions((prev) => prev + 1);
    setHappiness((prev) => Math.min(prev + 10, 100));
    setEnergy((prev) => Math.min(prev + 5, 100));
    setCompletedGoals([...completedGoals, goal]);
    updateStory();
  };

  const updateStory = () => {
    if (ecoActions > 10) {
      setStory(
        "Terra has grown strong and wise! Thanks to your eco-friendly efforts, the world around Terra is now greener and thriving."
      );
    } else if (ecoActions > 5) {
      setStory(
        "Terra is getting bigger! The air is cleaner, and the plants are flourishing as you continue your sustainable journey."
      );
    }
  };

  return (
    <div className="flex w-full flex-col items-center p-6 bg-slate-100 rounded-2xl shadow-lg ">
      <motion.div
        animate={{ scale: 1 + ecoActions * 0.05, rotate: ecoActions > 5 ? 10 : 0 }}
        className="text-6xl"
      >
        {ecoActions > 10 ? "🌿🐢" : ecoActions > 5 ? "🌱🐢" : "🐢"}
      </motion.div>

      <p className="mt-4 text-center text-sm italic">{story}</p>

      <div className="mt-4 w-full">
        <p className="text-sm">Happiness</p>
        <Progress value={happiness} />
      </div>
      <div className="mt-2 w-full">
        <p className="text-sm">Energy</p>
        <Progress value={energy} />
      </div>
      <div className="mt-2 w-full">
        <p className="text-sm">Eco Actions Logged: {ecoActions}</p>
      </div>

      <div className="mt-4 w-full">
        <p className="text-sm">Set Your Eco Goals:</p>
        <ul>
          {goals.map((goal, index) => (
            <li key={index} className="flex justify-between items-center mt-2">
              <span>{goal}</span>
              <button
                onClick={() => logEcoAction(goal)}
                className="bg-green-500 hover:bg-green-600 text-white text-xs p-1 rounded"
              >
                Complete ✅
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Button2 /> {/* ✅ Correct usage */}
      </div>
    </div>
  );
}
