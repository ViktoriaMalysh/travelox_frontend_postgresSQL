import styles from "./Accordion.module.scss";
import { Accordion, Icon } from "semantic-ui-react";
import { useState } from "react";
import { accordionItems, itemsHeader } from "../../Backend/Data";

const AccordionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    // const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <>
      <Accordion styled className={styles.accordion} panels={accordionItems}>
        {accordionItems.map((item, index) => (
          <>
            <Accordion.Title
              className={styles.accordionTitle}
              active={activeIndex === 0}
              index={0}
              onClick={()=>handleClick(item.key)}
            >
              {item.title}
            </Accordion.Title>

            <Accordion.Content>{item.content}</Accordion.Content>
          </>
        ))}
      </Accordion>
    </>
  );
};

export default AccordionComponent;
