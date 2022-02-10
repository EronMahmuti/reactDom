import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no favs yet. Would you adding some?</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }
    return (<div>
        <h1 color="green" >All Meetups Favorites Page</h1>
        {content}
    </div>);
}

export default FavoritesPage;