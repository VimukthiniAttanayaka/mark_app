import React from "react";
import { Container } from "react-bootstrap";
import TeamSection from "./component/TeamSection";

const MarkList:React.FC = () => {
    return (
        <Container fluid={true}>
            <TeamSection/>
        </Container>
    )
};
export default MarkList;