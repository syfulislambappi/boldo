import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: #fff;
  max-width: 35rem;
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.12);
  border-radius: 1.2rem;
  padding: 4rem;
`;

export const CardContent = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.6rem;
  color: #000;
  padding: 0;
  margin: 0;
  padding-bottom: 4rem;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const AvatarInfo = styled.div``;

export const AvatarName = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 3.2rem;
  margin: 0;
  padding: 0;
  margin-bottom: 0.6rem;
  color: #0a2640;
`;

export const AvatarTitle = styled.span`
  display: block;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 3.2rem;
  color: #0a2640;
`;
