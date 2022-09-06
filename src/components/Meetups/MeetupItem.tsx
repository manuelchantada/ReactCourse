import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import {useNavigate} from 'react-router-dom'
import Meetup from "../../models/metup";
import React from "react";
import { FavouriteContext } from "../../store/favourite-context";

const MeetupItem = (props: {meetup: Meetup, deleteMeetupHandler: (id: string) => void, enableDelete: boolean}) => {
  const navigate = useNavigate();
  const favouriteContext = React.useContext(FavouriteContext);

  const itemIsFavourite = favouriteContext.itemIsFavourite(props.meetup.id!)

      function deleteMeetupHandler(){
          fetch(
              'https://reactcourse-d432c-default-rtdb.europe-west1.firebasedatabase.app/meetups/'+ props.meetup.id+'.json',
              {
                  method: 'DELETE',
              }
          ).then(() => {            
          props.deleteMeetupHandler(props.meetup.id!);
            navigate('/');
          });
      }

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite){
      favouriteContext.removeFavourite(props.meetup.id!);
    } else{
      favouriteContext.addFavourite({
        ...props.meetup
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from Favourites' : 'To Favourites' }</button>
          {props.enableDelete ? <button onClick={deleteMeetupHandler}>Delete</button> : null}
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
