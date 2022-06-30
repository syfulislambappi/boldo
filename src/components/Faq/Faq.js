import React, { useState } from "react";
import { FaqContent, FaqHeader, Text, FaqText } from "./styles";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const Faq = ({ title, body }) => {
  const [show, setShow] = useState(false);
  return (
    <FaqContent>
      <FaqHeader onClick={() => setShow(!show)}>
        <Text>{title}</Text>
        {show ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
      </FaqHeader>
      <FaqText show={show}>{body}</FaqText>
    </FaqContent>
  );
};

export default Faq;
