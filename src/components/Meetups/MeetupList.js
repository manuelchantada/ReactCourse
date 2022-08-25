import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  function deleteMeetupHandler(meetupId){
      props.setLoadedMeetups((prevMeetups) => {
        return prevMeetups.filter(meetup => meetup.id !== meetupId);
    });
  }

  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          deleteMeetupHandler={deleteMeetupHandler}
          enableDelete={props.enableDelete}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
