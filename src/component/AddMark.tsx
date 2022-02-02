import { useState } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import { XCircle } from 'react-feather';
import NumberFormat from 'react-number-format';
import { useToasts } from 'react-toast-notifications'

type AddMarkProps = {
    num: number
    onCloseClick: () => void
    teamMarkChange: (Mark: number | null, index: number) => void
}

const AddMark: React.FC<AddMarkProps> = (props) => {
    const [validated, setValidated] = useState(false);

    const { addToast } = useToasts()
    const { num } = props

    const handleOnMarkChanged = (mark: number) => {
        setMark(mark);
    }
    const [mark, setMark] = useState<number | null>();

    const handleOnSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        event.preventDefault();
        if (!mark) {
            return;
        }
        props.teamMarkChange(mark, num)
        setMark(null)
        addToast("Team Mark Updated", {appearance: 'success', autoDismiss: true});
        props.onCloseClick()
    }

    return (
        <Row className='add-mark-form'>
            <Col sm={12} className="mark-form px-5">

                <Row>
                    <Form className="pe-0 my-3" noValidate validated={validated} onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3">
                            <Col sm={12}>
                                <Form.Label className="mt-2 mx-0">Add Marks</Form.Label>
                                <XCircle className='form-close' onClick={props.onCloseClick} />
                            </Col>
                            <NumberFormat className='form-control' placeholder="" required prefix={'$ '} thousandSeparator={true} value={mark}
                                onValueChange={(values: any) => {
                                    handleOnMarkChanged(values.value)
                                }} />
                        </Form.Group>
                        <Button className="submit-btn px-3 py-1" type="submit">
                            Add
                        </Button>
                    </Form>
                </Row>
            </Col>
        </Row>
    )
}
export default AddMark;

//https://stackoverflow.com/questions/55556221/how-do-you-format-a-number-to-currency-when-using-react-native-expo