import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    const favoritesCtx = useContext(FavoritesContext);
    return (<div>
        <h1 color="green" >All Meetups Favorites Page</h1>
        <MeetupList meetups={favoritesCtx.favorites} />
    </div>);
}

export default FavoritesPage;