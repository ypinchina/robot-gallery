import React from "react";
interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const Robots: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}?size=100x100`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
};

export default Robots;
