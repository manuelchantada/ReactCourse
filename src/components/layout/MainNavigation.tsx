import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {useContext} from 'react'
import { FavouriteContext } from "../../store/favourite-context";

const MainNavigation = () => {
  const favouriteContext = useContext(FavouriteContext);

  let badgetContent = favouriteContext.totalFavourites !== 0 ? 
  <span className={classes.badge}>{favouriteContext.totalFavourites}</span>
  : '';

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add new Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites  {badgetContent}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
