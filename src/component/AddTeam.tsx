import React from "react";
import { Row, Col } from "react-bootstrap";
import { Plus } from 'react-feather';

type AddAuthorProps = {
    onAddClick : () => void
}

const AddTeam:React.FC<AddAuthorProps> = (props) => {
    return (
        <Row className="mx-4 mb-3 pb-4" onClick={props.onAddClick}>
            <Col sm={1} className="add">
                <Plus/>
            </Col>
            <Col sm={11}>
                Add New Team
            </Col>
        </Row>
    )
}
export default AddTeam;