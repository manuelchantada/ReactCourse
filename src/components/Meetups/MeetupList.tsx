import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
import React, { SetStateAction } from "react";
import Meetup from "../../models/metup";

const MeetupList = (props:{meetups: Meetup[], setLoadedMeetups?: React.Dispatch<SetStateAction<Meetup[]>>, enableDelete: boolean}) => {
  function deleteMeetupHandler(meetupId: string){
    props.setLoadedMeetups && props.setLoadedMeetups((prevMeetups) => {
        return prevMeetups.filter(meetup => meetup.id !== meetupId);
    });
  }

  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          meetup={meetup}
          deleteMeetupHandler={deleteMeetupHandler}
          enableDelete={true}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
