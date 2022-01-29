import React from "react";
import { Row, Col } from "react-bootstrap";
import { Plus } from 'react-feather';

type AddAuthorProps = {
    onAddClick : () => void
}

const AddTeam:React.FC<AddAuthorProps> = (props) => {
    return (
        <Row className="mx-4 mb-3 pb-4">
            <Col sm={12} className="add-btn px-4 py-2" onClick={props.onAddClick}>
                <Plus/>Add New Team
            </Col>
        </Row>
    )
}
export default AddTeam;