import { useState } from "react/cjs/react.development";
import MeetupList from "../components/meetups/MeetupList";



function AllMeetupsPage(){
  const [isLoading, setIsLoading ] = useState(true);
  const [ loadedMeetups, setLoadedMeetups] =  useState();

  fetch('https://react-getting-started-533aa-default-rtdb.firebaseio.com/meetups.json').then((response) => {
    return response.json();
  }).then((data) => {
    setIsLoading(false);
  });

  if(isLoading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

    return (
        <section>
            <h1>All meetups</h1>
            { Dummy_data.map((meetup) => {
                return <li key={meetup.id} >{meetup.title}</li>
            })}
            <MeetupList meetups={Dummy_data}  />
        </section>
    );
}

export default AllMeetupsPage;