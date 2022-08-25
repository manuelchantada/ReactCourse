import { useContext } from "react";
import FavouriteContext from "../store/favourite-context";
import MeetupList from "../components/Meetups/MeetupList";

function FavouritesPage() {
  const favouriteContext = useContext(FavouriteContext);
  
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
        {content}
    </section>
  );
}

export default FavouritesPage;
