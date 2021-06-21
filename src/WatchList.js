import "./modal.css";
import db from "./firebase";
import { useState, useEffect } from "react";
import useMovies from "./useMovies";

const WatchList = ({ show, hide }) => {
  //to switch the modal class
  const showHideClassName = show ? "modal" : "no-modal";

  //to rerender watchlist component on delete
  const [del,setDel]=useState(false)

  //on watch list comp mount, get watchlisted movies poster links
  const posterArray = useMovies();

  //incomplete
  const deleteFromWatchList = (pid) => {
    

    //why isnt it deleting
    db.collection("movies")
      .doc(pid)
      .delete()
      .then(() => {
        setDel(!del)
        console.log('delete',pid)
      });
  };
  //console.log('poster array aftet useeffect is', posterArray) -- https://

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <section>
          <button className="delete" onClick={hide}>
            X
          </button>
        </section>
        <h3 align="center">Your Watchlist</h3>

        <div className="watchlist-movies">
          {posterArray.map((i) => {
            const poster_id=i.split('w400/')[1]
            return (
              <div key={i}>
                <button onClick={()=>deleteFromWatchList(poster_id)} className="delete-movie">
                  X  {}
                </button>
                <img className="watchlist-img" src={i} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WatchList;
