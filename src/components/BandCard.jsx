import { useState } from "react";

const AlbumsFetched = [
    { id: 1, AlbumName: "III" , Artist: "Portrait decay" , ListeningStatus: true },
    { id: 2, AlbumName: "WhirlWind", Artist: "Demonic Science", ListeningStatus: false },
    { id: 3, AlbumName: "WhirlWind", Artist: "Demonic Science", ListeningStatus: false }

]

function BandCard(){
    const [album, setAlbum] = useState(AlbumsFetched);
    //const [status, setStatus] = useState();

    function handleClick(name) {
        console.log(name)
        setAlbum(
            album.map((a) => 
                a.AlbumName == name ? {...a, ListeningStatus: !a.ListeningStatus}  : a 
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
                    <button onClick={() => handleClick(a.AlbumName)}> change </button>
                    </article>
                </div> 
            ))}    
        </div>
    )
}

export default BandCard;