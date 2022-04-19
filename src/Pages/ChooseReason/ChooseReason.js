import React from "react";
import { Accordion } from "react-bootstrap";

const ChooseReason = () => {
  return (
    <div>
      <h1 className="text-primary text-center m-4">Why you choose me ?</h1>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Working Experience.</Accordion.Header>
          <Accordion.Body>
            I worked in this photography field almost 5 years . For this reason
            , I have gathered some new experience that can make your event
            captured beautifully.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Best Event Cover within the Budget Segment.
          </Accordion.Header>
          <Accordion.Body>
            You can hire me in your small budget segment in dhaka city that no
            one can give you this budget section.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ChooseReason;
