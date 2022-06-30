import React from "react";
import { Container, Img, H3 } from "../../globalStyles";
import {
  CustomerSection,
  CustomerWrapper,
  ImageWrapper,
  ContentWrapper,
} from "../Customers/styles";
import { List, Item, Span } from "./styles";
import customerImage from "../../assets/images/section2.png";
import { TbLeaf } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { BsSun } from "react-icons/bs";

const Connects = () => {
  return (
    <CustomerSection>
      <Container>
        <CustomerWrapper>
          <ContentWrapper>
            <H3>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </H3>
            <List>
              <Item>
                <TbLeaf />
                <Span>We connect our customers with the best.</Span>
              </Item>
              <Item>
                <AiOutlineEye />
                <Span>Advisor success customer launch party.</Span>
              </Item>
              <Item>
                <BsSun />
                <Span>Business-to-consumer long tail.</Span>
              </Item>
            </List>
          </ContentWrapper>
          <ImageWrapper>
            <Img src={customerImage} alt="Customer Image" />
          </ImageWrapper>
        </CustomerWrapper>
      </Container>
    </CustomerSection>
  );
};

export default Connects;
