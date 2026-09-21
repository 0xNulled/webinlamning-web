import { useEffect, useState } from "react";


/*const AlbumsFetched = [
    { id: 1, AlbumName: "III" , Artist: "Portrait decay" , ListeningStatus: true },
    { id: 2, AlbumName: "Wretched Lives", Artist: "Demonic Science", ListeningStatus: false },
    { id: 3, AlbumName: "Hivemind Narcosis", Artist: "Thantifaxath", ListeningStatus: false }
]*/

function BandCard(){
    const [album, setAlbum] = useState([]);
    const [err, setErr] = useState(true);
    const [loading, setLoading] = useState(true)
    const API_URL = "http://localhost:5245/api/Album"

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setAlbum(data))
        .catch(() => setErr(`Could not load ${API_URL}`))
        .finally(() => setLoading(false))
    },[]);

    function handleClick(id) {
        setAlbum(
            album.map((a) => 
                a.id == id ? {...a, listeningStatus: !a.listeningStatus}  : a 
            )
        );
    }

    return (
        <div className="CardHolder">
            {album.map((a) => (
                <div className="Card" key={a.id}>
                    <article>
                    <h3> {a.albumName} </h3>
                    <p> {a.artist} </p>
                    <p>{(a.listeningStatus).toString()} </p>
                    <button onClick={() => handleClick(a.id)}> change </button>
                    </article>
                </div> 
            ))}    
        </div>
    )
}

export default BandCard;