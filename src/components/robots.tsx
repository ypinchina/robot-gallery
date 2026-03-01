import React from "react";
import style from "./Robots.module.css";
interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const Robots: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
      <div className={style.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt={name} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
  );
};

export default Robots;
