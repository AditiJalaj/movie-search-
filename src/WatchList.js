import "./modal.css";
import db from "./firebase";
import { useState, useEffect } from "react";
import useMovies from "./useMovies";

const WatchList = ({ show, hide }) => {
  //to switch the modal class
  const showHideClassName = show ? "modal" : "no-modal";

  //on watch list comp mount, get watchlisted movies poster links
  const posterArray = useMovies();


  const deleteFromWatchList = (pid) => {


    //delete a document once you have a DocumentReference to it. 
    //To get that you must first execute the query, 
    //then loop over the QuerySnapshot and 
    //finally delete each DocumentSnapshot based on its ref;

    var posterpath_query = db
      .collection("movies")
      .where("poster_path", "==", pid);
      posterpath_query.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
    });
  };


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
            const poster_id = i.split("w400/")[1];
            return (
              <div key={i}>
                <button
                  onClick={() => deleteFromWatchList(poster_id)}
                  className="delete-movie"
                >
                  X {}
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
