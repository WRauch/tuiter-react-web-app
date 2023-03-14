import React from "react";
import {useDispatch} from "react-redux";
import { deleteTuit, likeTuit } from "./tuits-reducer";

const TuitItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla.png"
   }
 }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
    }
    const likeTuitHandler = (tuit) => {
        dispatch(likeTuit(tuit))
    }
     
    return(
        <li className="list-group-item">
          <div className="row">
            <div className="col-auto">
              <img width={50}
                   className="float-end rounded-circle"
                   src={`/images/${tuit.image}`}/>
            </div>
            <div className="col-10">
              <div>
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
       <div>{tuit.userName} <i className="bi bi-patch-check-fill text-primary"></i> {tuit.handle} . {tuit.time}</div>
       <div>{tuit.tuit}</div>
       <br/>
       <div className="row">
        <div className="col-3">
        <i class="bi bi-chat"></i> {tuit.replies}
        </div>
        <div className="col-3">
        <i class="bi bi-arrow-repeat"></i> {tuit.retuits}  

        </div>
        <div className="col-3">
        <i className={`bi ${tuit.liked ?'bi-heart-fill text-danger':'bi-heart'}`} onClick={() => likeTuitHandler(tuit)}></i> {tuit.likes} 
        </div>
        <div className="col-3">
        <i class="bi bi-share"></i>
        </div>
       </div>
     </div>
   </div>
  </li>
 );
};
export default TuitItem;