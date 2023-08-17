import React from "react";
import s from "./HeroStats.module.scss";

const STATS = [
  {
    amount: "32,000 +",
    caption: "Experienced tutors",
  },
  {
    amount: "300,000 +",
    caption: "5-star tutor reviews",
  },
  {
    amount: "120 +",
    caption: "Subjects taught",
  },
  {
    amount: "200 +",
    caption: "Tutor nationalities",
  },
];

const HeroStats = () => {
  return (
    <div className={s.heroStats}>
      <ul className={s.flexWrapper}>
        {STATS.map((stat, index) => (
          <li key={index}>
            <span className={s.number}>{stat.amount}</span>
            <span className={s.description}>{stat.caption}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroStats;
