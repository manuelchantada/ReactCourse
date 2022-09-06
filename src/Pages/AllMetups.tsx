import { useState, useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupList";
import Meetup from "../models/metup";
import React from "react";

const AllMetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [laodedMeetups, setLoadedMeetups] = React.useState<Meetup[]>([])

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://reactcourse-d432c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let meetups: Meetup[] = [];
        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        };
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        <MeetupList meetups={laodedMeetups} setLoadedMeetups={setLoadedMeetups} enableDelete={true}/>
      </ul>
    </section>
  );
}

export default AllMetupsPage;