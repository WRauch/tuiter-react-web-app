import {useDispatch} from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ( {
    tuit = {
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "image": "tesla.png"
    }
  }) => {
    const dispatch = useDispatch();

    return(
       <><div>{tuit.userName} <i className="bi bi-patch-check-fill text-primary"></i> {tuit.handle} . {tuit.time}</div><div>{tuit.tuit}</div><br /><div className="row">
            <div className="col-auto">
                <i class="bi bi-chat"></i> {tuit.replies}
            </div>
            <div className="col-auto">
                <i class="bi bi-arrow-repeat"></i> {tuit.retuits}

            </div>
            <div className="col-auto">
                <i className={`bi ${tuit.liked ? 'bi-heart-fill text-danger' : 'bi-heart'}`} 
                onClick={() => {
                if (!tuit.liked) {dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                        liked: true}))
                }
                else {
                    dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes - 1,
                        liked: false}))
                }
     }}></i> {tuit.likes}
            </div>
            <div className="col-auto">
                <i className={`bi ${tuit.disliked ? 'bi-hand-thumbs-down-fill' : 'bi-hand-thumbs-down'}`} 
                onClick={() => {
                if (!tuit.disliked) {dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1,
                        disliked: true}))
                }
                else {
                    dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes - 1,
                        disliked: false}))
                }
     }}></i> {tuit.dislikes}
            </div>
            <div className="col-auto">
                <i class="bi bi-share"></i>
            </div>
        </div></>
    )
}
export default TuitStats