import styled from "styled-components";

export const FaqContent = styled.div`
  border-bottom: 0.1rem solid #c4c4c4;
  margin-bottom: 3.2rem;
  position: relative;
  overflow: hidden;
`;

export const FaqHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
  font-size: 2.8rem;
  color: #0a2640;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: #000;
  line-height: 3.2rem;
`;

export const FaqText = styled.p`
  font-size: 2rem;
  line-height: 2.2rem;
  color: gray;
  padding: 1rem;
  margin: 0;
  position: relative;
  transition: all 0.3s;
  height: ${({ show }) => (show ? "auto" : 0)};
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
