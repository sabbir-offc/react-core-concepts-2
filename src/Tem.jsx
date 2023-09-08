import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    if (team === 11) {
      alert("You cannot remove more than 11.");
      return;
    } else {
      const newTeam = team - 1;
      setTeam(newTeam);
    }
  };
  const teamStyle = {
    border: "2px solid red",
    borderRadius: "10px",
    padding: "10px",
    margin: "5px",
    boxShadow: "2px 2px 2px gray",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={handleAdd}>Add Player</button>
      <button onClick={handleRemove}>Remove Player</button>
    </div>
  );
}
