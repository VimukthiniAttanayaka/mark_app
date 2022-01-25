import { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { IMarkList } from '../types/MarkListTypes';
import { PlusCircle,Trash2 } from 'react-feather';
import AddMark from './AddMark';

type TeamProps = {
    team:IMarkList
    num:number
    deleteIndex: (Index:number) => void
    teamMarkChange: (Mark:number|null,index:number) => void
}
const Team:React.FC<TeamProps> = (props) => {
    const {team,num} = props

    const [isFormVisible,setIsFormVisible] = useState(false);

    const AddMarkClick = () => {
        setIsFormVisible(true)
    }
    const handleOnCloseFormClick = () => {
        setIsFormVisible(false)
    }

    return (
        <Row className='teamlist mb-2'>
            <Col sm={2}>
                <h4 className='text-center'>{num}</h4>
            </Col>
            <Col sm={5}>
                <h4>{team.name}</h4>
            </Col>
            <Col sm={2}>
                <h4>{team.marks}</h4>
            </Col>
            <Col xs={3} className="text-end my-1 d-flex justify-content-end align-items-center">
                <PlusCircle className="add me-3" onClick={AddMarkClick}/> 
                <Trash2 className="text-danger delete me-3" onClick={()=>props.deleteIndex(num-1)}/>
            </Col>
            <Col sm={12}>
            {isFormVisible && <AddMark onCloseClick = {handleOnCloseFormClick}
                                        teamMarkChange={props.teamMarkChange}
                                        num={num-1}/>}
            </Col>
        </Row>
    )
}
export default Team;