import React from "react";
import { AboutText, Container, H2 } from "../../globalStyles";
import { AboutParagraph } from "../AboutHeader/styles";
import {
  TeamSection,
  TeamContainer,
  CardContainer,
  TeamTextContainer,
} from "./styles";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import TeamCard from "../TeamCard/TeamCard";

const Team = () => {
  return (
    <TeamSection>
      <Container>
        <TeamContainer>
          <TeamTextContainer>
            <AboutText color="#777">Our team</AboutText>
            <H2>The leadership team</H2>
            <AboutParagraph color="#777">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </AboutParagraph>
          </TeamTextContainer>
          <CardContainer>
            <TeamCard
              image={team1}
              name="Michael Scott"
              title="General Manager"
            />
            <TeamCard
              image={team2}
              name="Dwight Schrute"
              title="General Manager"
            />
            <TeamCard
              image={team3}
              name="Pam Beetsley"
              title="General Manager"
            />
          </CardContainer>
        </TeamContainer>
      </Container>
    </TeamSection>
  );
};

export default Team;
