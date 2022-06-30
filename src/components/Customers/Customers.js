import React from "react";
import { Container, Img, H3 } from "../../globalStyles";
import {
  CustomerSection,
  CustomerWrapper,
  ImageWrapper,
  ContentWrapper,
  List,
  Item,
  Span,
  Button,
} from "./styles";
import customerImage from "../../assets/images/section1.png";
import { AiFillCheckCircle } from "react-icons/ai";

const Customers = () => {
  return (
    <CustomerSection>
      <Container>
        <CustomerWrapper>
          <ImageWrapper>
            <Img src={customerImage} alt="Customer Image" />
          </ImageWrapper>
          <ContentWrapper>
            <H3>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </H3>
            <List>
              <Item>
                <AiFillCheckCircle />
                <Span>We connect our customers with the best.</Span>
              </Item>
              <Item>
                <AiFillCheckCircle />
                <Span>Advisor success customer launch party.</Span>
              </Item>
              <Item>
                <AiFillCheckCircle />
                <Span>Business-to-consumer long tail.</Span>
              </Item>
            </List>
            <Button>Start now</Button>
          </ContentWrapper>
        </CustomerWrapper>
      </Container>
    </CustomerSection>
  );
};

export default Customers;
