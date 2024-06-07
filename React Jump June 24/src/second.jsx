import "./second.css";
import cat from "./data/cat.json";

const Second = () => {
  const traits = cat.personalityTraits.map((trait, i) => (
    <li key={`trait-${i}`}>{trait}</li>
  ));

  return (
    <div className="second">
      <div>
        <img src="src/assets/react.svg" className="logo" />
      </div>
      <h1>{cat.name}</h1>
      <ul>
        <li key="breed">{cat.breed}</li>
        <li key="age">{cat.age}</li>
        <li key="color">{cat.color}</li>
        <li key="gender">{cat.gender}</li>
      </ul>
      <ul>{traits}</ul>
    </div>
  );
}

export default Second;
