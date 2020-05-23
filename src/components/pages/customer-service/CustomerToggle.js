import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const CustomerToggle = ({ items, title }) => {
  return (
    <>
      <div className="toggle__title">{title}</div>
      <Accordion>
        {items.map((item) => {
          return (
            <AccordionItem key={item.id}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.title}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item.desc}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default CustomerToggle;
