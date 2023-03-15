import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
   <div className="list-group">
     <a className="list-group-item">Tuiter</a>
     <Link to="/tuiter" className={`list-group-item
                     ${active === 'home'?'active':''}`}> <i class="bi bi-house-door-fill"></i> Home </Link>
     <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href='/tuiter/xyz'>
       <i class="bi bi-hash"></i> Explore
     </a>
     <a className={`list-group-item
                    ${active === 'labs'?'active':''}`} href='/'> 
       <i class="bi bi-asterisk"></i> Labs
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
       <i class="bi bi-bell"></i> Notifications
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
       <i class="bi bi-envelope"></i> Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
       <i class="bi bi-bookmark"></i> Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
      <i class="bi bi-card-list"></i> Lists
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
       <i class="bi bi-person"></i> Profile
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
       <i class="bi bi-three-dots"></i> More
     </a>
   </div>
 );
};
export default NavigationSidebar;