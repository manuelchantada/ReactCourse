import React from "react";
import Meetup from "../models/metup";

type FavouriteContextObj= {
  favourites: Meetup[],
  totalFavourites: number,
  addFavourite: (favouriteMeetup: Meetup) => void,
  removeFavourite: (meetupId: string) => void,
  itemIsFavourite: (meetupId: string) => boolean
}

export const FavouriteContext = React.createContext<FavouriteContextObj>({
  favourites: Array<Meetup>(),
  totalFavourites: 0,
  addFavourite: () => {},
  removeFavourite: () => {},
  itemIsFavourite: () => true
});

export const FavouritesContextProvider = (props: {children: React.ReactNode}) => {  
  let [userFavourites, setUserFavourites] = React.useState<Meetup[]>([])
  
  function addFavouriteHandler(favouriteMeetup: Meetup){
    console.log(favouriteMeetup);
    setUserFavourites((prevUserFavourites) => {
        return prevUserFavourites.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId: string){
    setUserFavourites((prevUserFavourites) => {
        return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavouriteHandler(meetupId: string){
    return userFavourites.some(meetup => meetup.id === meetupId)
  }  
  const context : FavouriteContextObj ={
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler
  };

    return (
      <FavouriteContext.Provider value={context}>
        {props.children}
      </FavouriteContext.Provider>
    );
  }

  export default FavouritesContextProvider;