import styled from "styled-components";

export const GallerySection = styled.section`
  padding-top: 6rem;
  padding-bottom: 4rem;
  position: relative;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr;
  grid-column-gap: 5rem;
  position: relative;
  top: -18rem;

  @media screen and (max-width: 992px) {
    grid-column-gap: 4rem;
    top: -15rem;
  }

  @media screen and (max-width: 768px) {
    grid-column-gap: 3rem;
    top: -12rem;
  }

  @media screen and (max-width: 576px) {
    top: 0;
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`;

export const PartOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    gap: 3rem;
  }

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const PartTwo = styled.div`
  text-align: center;
`;
export const PartThree = styled(PartOne)``;
