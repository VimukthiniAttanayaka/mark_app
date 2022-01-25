import {useState} from 'react';
import { Row, Col, Form, Button} from "react-bootstrap";
import { XCircle } from 'react-feather';
import NumberFormat from 'react-number-format';

type AddMarkProps = {
    num:number
    onCloseClick : () => void
    teamMarkChange: (Mark:number|null,index:number) => void
}

const AddMark:React.FC<AddMarkProps> = (props) => {
    const [validated, setValidated] = useState(false);

    const {num} = props

    const handleOnMarkChanged = (mark: number) => {
        setMark(mark);
    }
    const [mark, setMark] = useState<number|null>();

    const handleOnSubmit = (event:any) => {
        const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
        event.preventDefault();
        props.teamMarkChange(mark!,num)
        //addToast("New Book Created", {appearance: 'success', autoDismiss: true});
    }

    return (
        <Row>
            <Col sm={4} className="mark-form mb-5">
                <Row>
                    <Col sm={1} className='text-right'>
                        <XCircle className="form-close" onClick={props.onCloseClick}/>
                    </Col>
                </Row>
                <Row>
                    <Form className="pe-0 mb-3" noValidate validated={validated} onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="mt-2">Current Marks</Form.Label>
                            <NumberFormat placeholder="" required value={mark}
                                    onValueChange={(values:any) => {
                                        handleOnMarkChanged(values.value)
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
export default AddMark;