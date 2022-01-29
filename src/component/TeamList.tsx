import React from "react";
import {Row} from "react-bootstrap";
import { IMarkList } from "../types/MarkListTypes";
import Team from "./Team";

type TeamListProps = {
    teams:IMarkList[]
    deleteIndex: (Index:number) => void
    teamMarkChange: (Mark:number|null,index:number) => void
}
const TeamList:React.FC<TeamListProps> = (props) => {
    
    const {teams} = props

    const renderTeamList = () => {
        if(teams.length===0){
            return (
                <Row className="empty-label my-5">
                    <p>Enter New Team List</p>
                </Row>
            )
        }
        else{
            return ( 
                <ol className="list-unstyled">
                    {
                        teams.map((team:IMarkList,index:number) =>
                        <Team num={index + 1} team={team} key={index}
                        deleteIndex={props.deleteIndex}
                        teamMarkChange={props.teamMarkChange}/>)
                    }
                </ol>
            );
        }
    }

    return (
        <Row className="mx-2">
            {renderTeamList()}
        </Row>
    )
}
export default TeamList;