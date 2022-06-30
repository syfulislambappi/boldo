import React from "react";
import { Container, Img } from "../../globalStyles";
import {
  GallerySection,
  GalleryContainer,
  PartOne,
  PartTwo,
  PartThree,
} from "./styles";
import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import gallery5 from "../../assets/images/gallery5.png";

const AboutGallery = () => {
  return (
    <GallerySection>
      <Container>
        <GalleryContainer>
          <PartOne>
            <Img src={gallery1} alt="Gallery " />
            <Img src={gallery2} alt="Gallery2" />
          </PartOne>
          <PartTwo>
            <Img src={gallery3} alt="Gallery3" />
          </PartTwo>
          <PartThree>
            <Img src={gallery4} alt="Gallery4" />
            <Img src={gallery5} alt="Gallery5" />
          </PartThree>
        </GalleryContainer>
      </Container>
    </GallerySection>
  );
};

export default AboutGallery;
