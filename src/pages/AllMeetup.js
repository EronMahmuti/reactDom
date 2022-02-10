import { useEffect, useState } from "react/cjs/react.development";
import MeetupList from "../components/meetups/MeetupList";
import Card from "../components/ui/Card";

const DUMMY_DATA = [
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

function AllMeetupPage(){
  
    return (
        <section>
            <h1>All meetups</h1>
            {/* <MeetupList meetups={loadedMeetups}  /> */}
            <Card >
            <ul>
              {DUMMY_DATA.map((meetup) => {
                return <li key={meetup.id}> <h2> {meetup.title} </h2>
                 <img src={meetup.image} alt={meetup.title} />  </li>
              })}
            </ul>
            </Card>
        </section>
    );
}

export default AllMeetupPage;