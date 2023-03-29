import React from "react";
import "../styles/accordion.css";

const Accordion = ({ children }) => {
  return <div className="accordion">{children}</div>;
};

Accordion.Item = ({ accordion: { title, content, id }, active, setActive }) => {
  const current = active.includes(id);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setActive([id])}>
        {id}. {title}
      </div>
      <div className={`accordion-content${current ? " active" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
