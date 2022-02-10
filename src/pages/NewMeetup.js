
import { useNavigate  } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetups(){
    const history = useNavigate ();
    function addMeetupHandler(meetupData){
        fetch('https://reactacademind-455b4-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history('/');
        })
    }

    return <div>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
}

export default NewMeetups;