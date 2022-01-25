import {useState} from "react";
import { Row, Col, Form, Button} from "react-bootstrap";
import { XCircle } from 'react-feather';
import { IMarkList } from "../types/MarkListTypes";
import NumberFormat from 'react-number-format';
//import { ToastProvider, useToasts } from 'react-toast-notifications';

type AuthorFormProps = {
    onCloseClick : () => void
    addTeam : (team:IMarkList) => void
}

const TeamForm:React.FC<AuthorFormProps> = (props) => {

    /*const { addToast } = useToasts();*/

    const handleOnTeamNameChanged = (name: string) => {
        setTeamName(name);
    }
    const handleOnTeamImageChanged = (image: string) => {
        setTeamImage(image);
    }
    const handleOnTeamMarkChanged = (mark: number|null) => {
        setTeamMark(mark);
    }
    const [teamName, setTeamName] = useState<string>("");
    const [teamImage, setTeamImage] = useState<string>("");
    const [teamMark, setTeamMark] = useState<number|null>();

    const handleOnSubmit = (ev:any) => {
        ev.preventDefault();
        const newTeam: IMarkList = {name: teamName,image:teamImage,marks:teamMark!};
        props.addTeam(newTeam)
        //addToast("New Book Created", {appearance: 'success', autoDismiss: true});
    }

    return (
        <Row>
            <Col sm={9} className="team-form mb-5 ms-5">
            <Row>
                <Col sm={11}>
                    <h5>Create Team</h5>
                </Col>
                <Col sm={1}>
                    <XCircle className="form-close my-2 d-flex" onClick={props.onCloseClick}/>
                </Col>
            </Row>
            <Row>
            <Form className="pe-0" onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label className="mt-2">Image Name</Form.Label>
                    <Form.Control type="text" placeholder="" value={teamImage}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>,) =>
                                handleOnTeamImageChanged(ev.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="mt-2">Name of Team</Form.Label>
                    <Form.Control type="text" placeholder="" value={teamName}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>,) =>
                                handleOnTeamNameChanged(ev.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="mt-2">Current Marks</Form.Label>
                    <NumberFormat placeholder="" value={teamMark}
                            onValueChange={(values:any) => {
                                handleOnTeamMarkChanged(values.value)
                            }}/>
                </Form.Group>
                <Button className="submit-btn p-0" type="submit">
                    Create
                </Button>
                </Form>
            </Row>
        </Col>
        </Row>
    )
}
export default TeamForm;