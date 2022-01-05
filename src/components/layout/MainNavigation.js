import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'

function MainNavigation(){
    return (
    <header className={ classes.header } >
        <div className={ classes.logo } > React Meetups </div>
       <nav  >
           <ul>
               <li>
                   <NavLink to='/' >All meetUps</NavLink>
               </li>
               <li>
                   <NavLink to='/new-meetup' >New meetUps are </NavLink>
               </li>
               <li>
                   <NavLink to='/favorites' >Favorites meetUps</NavLink>
               </li>
           </ul>
       </nav>
    </header>);
}

export default MainNavigation;