import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import '../../../assets/styles/InfoToggle.scss';

function InfoToggle() {
  return (
    <div className='info-toggle' >
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                  <h4 className=' mt-5'>product description</h4>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p className=''>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                  <h4 className=' mt-5'>shipping returns</h4>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p className=''>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                  <h4 className=' mt-5'>fabric composition</h4>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p className=''>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea in ut nostrud velit in irure cillum tempor laboris
                    sed adipisicing eu esse duis nulla non.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default InfoToggle;
