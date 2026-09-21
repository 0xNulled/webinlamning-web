import { useState } from "react";

function BandCard({ AlbumName, Artist, ListeningStatus }){
    return (
        <div className="Card">
            <article>
                <h3> {AlbumName} </h3>
                <p> {Artist} </p>
                <p> {ListeningStatus} </p>
            </article>
        </div>
    )
}

export default BandCard;