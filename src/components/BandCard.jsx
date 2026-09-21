import { useState } from "react";

const AlbumsFetched = [
    { id: 1, AlbumName: "III" , Artist: "Portrait decay" , ListeningStatus: true },
    { id: 2, AlbumName: "WhirlWind", Artist: "Demonic Science", ListeningStatus: false },
    { id: 3, AlbumName: "Hivemind Narcosis", Artist: "Solar Witch", ListeningStatus: false }

]

function BandCard(){
    const [album, setAlbum] = useState(AlbumsFetched);

    function handleClick(id) {
        setAlbum(
            album.map((a) => 
                a.id == id ? {...a, ListeningStatus: !a.ListeningStatus}  : a 
            )
        );
    }

    return (
        <div className="CardHolder">
            {album.map((a) => (
                <div className="Card" key={a.AlbumName}>
                    <article>
                    <h3> {a.AlbumName} </h3>
                    <p> {a.Artist} </p>
                    <p>{(a.ListeningStatus).toString()} </p>
                    <button onClick={() => handleClick(a.id)}> change </button>
                    </article>
                </div> 
            ))}    
        </div>
    )
}

export default BandCard;