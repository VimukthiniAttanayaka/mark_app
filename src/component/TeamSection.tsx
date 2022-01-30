import {useState} from "react";
import { Container } from "react-bootstrap";
import AddTeam from "./AddTeam";
import TeamForm from "./TeamForm";
import TeamList from "./TeamList";
import Title from "./Title";
import { IMarkList } from "../types/MarkListTypes";
import { ToastProvider } from "react-toast-notifications";

const TeamSection:React.FC = () => {

    const Teams:IMarkList[] = [
        {image:'image1',name:'Team 1',marks:2000},
        {image:'image1',name:'Team 2',marks:2000},
        {image:'image1',name:'Team 3',marks:2000},
    ]

    const [isFormVisible,setIsFormVisible] = useState(false);
    const[teams,setTeams]= useState(Teams);

    const handleOnAddAuthorClick = () => {
        setIsFormVisible(true)
    }
    const handleOnCloseFormClick = () => {
        setIsFormVisible(false)
    }

    const handleTeamAdded = (team:IMarkList) => {
        const userConfirmation = window.confirm("Add Team Name?");
        const index=teams.length
        if (userConfirmation === true) {
            const allTeams: IMarkList[] = teams.slice();
            allTeams.splice(index,1,team);
            setTeams(allTeams);
            setIsFormVisible(false)
        }
    };
    const handleBookDeleted = (index: number) => {
        const userConfirmation = window.confirm("Delete Author Name?");
        if (userConfirmation === true) {
            const allTeams: IMarkList[] = teams.slice();
            allTeams.splice(index,1);
            setTeams(allTeams);
        }
    };
    const handleOnTeamMarkChange = (newmark: number|null,index:number) => {
        //console.log(newmark,index)
        const userConfirmation = window.confirm("Delete Author Name?");
        if (userConfirmation === true) {
            const changeTeam:IMarkList = teams[index]
            const oldnumber=Number(changeTeam.marks)
            const newnumber=Number(newmark)
            changeTeam.marks=oldnumber+newnumber
            const allTeams: IMarkList[] = teams.slice();
            allTeams.splice(index,1,changeTeam);
            setTeams(allTeams);
        }
    }
    return (
        <Container fluid={true} className="marklist">
            <ToastProvider>
            <Title/>
            <TeamList teams={teams}
                      deleteIndex={handleBookDeleted}
                      teamMarkChange={handleOnTeamMarkChange}/>
            <AddTeam onAddClick = {handleOnAddAuthorClick}/>
            {isFormVisible && <TeamForm onCloseClick = {handleOnCloseFormClick}
                                        addTeam = {handleTeamAdded}/>}
            </ToastProvider>
        </Container>
    )
};
export default TeamSection;