import MeetupList from "../components/Meetups/MeetupList";
import React from "react";
import { FavouriteContext } from "../store/favourite-context";

const FavouritesPage = () => {
  const favouriteContext = React.useContext(FavouriteContext);
  
  let content;

    console.log(favouriteContext);

  if (favouriteContext.totalFavourites === 0){
    content = <p>You got no favourites yet.</p>
  } else{
    content = <MeetupList meetups={favouriteContext.favourites} enableDelete={false} />
  }
  
  return (
    <section>
      <h1>Favourites Page</h1>
      <ul>
        {content}
      </ul>
    </section>
  );
}

export default FavouritesPage;