import { useState } from "react";
import { useGame } from "./GameContext";

export default function App() {
  const [showField, setShowField] = useState(false);
  if (showField) {
    return (
      <>
        <Field /> <Score /> <Restart setShowField={setShowField} />
      </>
    );
  } else {
    return (
      <div>
        <h2>Welcome</h2>
        <p>Welcome to Whack a Mole!</p>
        <p> Whack a mole to earn points.</p>
        <p>How many can you get? </p>
        <button onClick={() => setShowField(true)}> Play</button>
      </div>
    );
  }
}

function Field() {
  const { field } = useGame();
  console.log(field);
  return field.map((isMole, idx) =>
    isMole ? <Mole key={idx} /> : <Hole key={idx} />
  );
}

function Mole() {
  const { whack } = useGame();

  return <p onClick={() => whack()}>Mole</p>;
}
function Hole() {
  return <p> hole </p>;
}

function Score() {
  const { score } = useGame();
  return <p> {score} </p>;
}

function Restart({ setShowField }) {
  const { endGame } = useGame();
  return (
    <button
      onClick={() => {
        setShowField(false);
        endGame();
      }}
    >
      {" "}
      Restart
    </button>
  );
}
