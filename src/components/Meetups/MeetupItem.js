import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import FavouriteContext from "../../store/favourite-context";

function MeetupItem(props) {
  const navigate = useNavigate();
  const favouriteContext = useContext(FavouriteContext);

  const itemIsFavourite = favouriteContext.itemIsFavourite(props.id)

      function deleteMeetupHandler(){
          fetch(
              'https://reactcourse-d432c-default-rtdb.europe-west1.firebasedatabase.app/meetups/'+ props.id+'.json',
              {
                  method: 'DELETE',
              }
          ).then(() => {            
          props.deleteMeetupHandler(props.id);
            navigate('/');
          });
      }

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite){
      favouriteContext.removeFavourite(props.id);
    } else{
      favouriteContext.addFavourite({
        ...props
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
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
