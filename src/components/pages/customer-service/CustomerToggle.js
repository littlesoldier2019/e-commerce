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
                <AccordionItemButton className="toggle__button">
                  <i className="fas fa-plus"></i>
                  {item.title}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="toggle__desc">{item.desc}</div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default CustomerToggle;
