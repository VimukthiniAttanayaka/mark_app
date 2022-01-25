import React from "react";
import { Col, Row } from "react-bootstrap";

const Title:React.FC = () => {
    return (
        <Row>
            <Col sm={12} className="mt-3 mb-3">
                <h1 className="text-center">ReactBase Training - 2022</h1>
                <h4 className="text-center">Teams MarkList</h4>
            </Col>
        </Row>
    )
}
export default Title;