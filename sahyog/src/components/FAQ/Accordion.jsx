import React from "react";
import FAQdata from "./Data";
import "../../styles/Faq.css";
const Accordion = () => {
  return (
    <div class="accordion" id="accordionExample">
      {FAQdata.map((item) => {
        return (
          <div class="accordion-item border-0">
            <h2 class="accordion-headerborder-0" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {item.que}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Answer</strong>
                <p>{item.ans}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;