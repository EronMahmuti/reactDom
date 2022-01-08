import { useState } from "react/cjs/react.development";
import MeetupList from "../components/meetups/MeetupList";


const Dummy_data = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm2',
        title: 'This is a second meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
];


function AllMeetupsPage(){
  const [isLoading, setIsLoading ] = useState(true);
  fetch('https://react-getting-started-533aa-default-rtdb.firebaseio.com/meetups.json').then((response) => {
    return response.json();
  })

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