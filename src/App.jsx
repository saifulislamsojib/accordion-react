import { useState } from "react";
import Accordion from "./components/Accordion";
import accordionData from "./data/accordionData";

function App() {
  const [currentActive, setActive] = useState([1]);

  return (
    <div>
      <h1>Accordion</h1>
      <button
        className="expand-button"
        onClick={() =>
          setActive(
            currentActive.length === accordionData.length
              ? []
              : accordionData.map(({ id }) => id)
          )
        }
      >
        Expand All
      </button>
      <Accordion>
        {accordionData.map((accordion) => (
          <Accordion.Item
            key={accordion.id}
            accordion={accordion}
            active={currentActive}
            setActive={setActive}
          />
        ))}
      </Accordion>
    </div>
  );
}

export default App;
