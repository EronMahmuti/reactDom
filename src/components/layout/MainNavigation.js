import { NavLink } from 'react-router-dom';


function MainNavigation(){
    return (
    <header>
       <nav>
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