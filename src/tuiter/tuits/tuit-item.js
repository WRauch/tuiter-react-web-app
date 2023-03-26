import React from "react";
import {useDispatch} from "react-redux";
import { likeTuit } from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

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
      dispatch(deleteTuitThunk(id));
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
                <TuitStats tuit={tuit}/>
     </div>
   </div>
  </li>
 );
};
export default TuitItem;