import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMetupsPage from "./Pages/AllMetups";
import FavouritesPage from "./Pages/Favourites";
import NewMetupsPage from "./Pages/NewMeetup";
import {FavouritesContextProvider} from "./store/favourite-context";

function App() {
  return (
    <FavouritesContextProvider>
    <Layout>
      <Routes>
        <Route path="/" element={<AllMetupsPage/>}/>
        <Route path="/favourites" element={<FavouritesPage/>}/>
        <Route path="/new-meetup" element={<NewMetupsPage/>}/>
      </Routes>
    </Layout>
    </FavouritesContextProvider>
  );
}

export default App;
