import { useEffect, useState } from "react";
import { ChangeEvent} from 'react';


function BandCard({ onUpload }){
    const [album, setAlbum] = useState([]);
    const [err, setErr] = useState(true);
    const [loading, setLoading] = useState(true)
    const BAND_API_URL = "http://localhost:5245/api/Album"
    const IMAGE_API_URL = "http://localhost:5245"

    useEffect(() => {
        fetch(BAND_API_URL)
        .then((res) => res.json())
        .then((data) => setAlbum(data))
        .catch(() => setErr(`Could not load ${BAND_API_URL}`))
        .finally(() => setLoading(false))
    },[]);

    function handleImageUpload(e, id) {
        const file = e.target.files[0];
        if (!file) {
            return;
        }

        e.target.value = "";
        const formData = new FormData();

        formData.append("file", file);

        fetch((`${BAND_API_URL}/${id}/image`),{
            method: "POST",
            body: formData
        })
        //.then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }

    async function changeListeningStatus(id) {
        
        const fetchedAlbum = album.find((a) => a.id == id);
        if (!fetchedAlbum) return;

        try {
            const res = await fetch(`${BAND_API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...fetchedAlbum, listeningStatus: !fetchedAlbum.listeningStatus }),
        });
        if (!res.ok) {
            throw new Error("Kunde inte updatera Lystnadsstatus")
        }

        setAlbum(album.map((a) => 
            a.id == id ? {...a, listeningStatus: !a.listeningStatus}  : a )
        );

        setErr(null);
        } catch (error) {
            setErr(error.message);
        }
        
    }

    return (
        <div className="CardHolder">
            {album.map((a) => (
                <div className="Card" key={a.id}>
                    <article>
                        <img src={`${IMAGE_API_URL}${a.imageURL}`}></img>
                    <h3> {a.albumName} </h3>
                    <p> {a.artist} </p>
                    <p>{(a.listeningStatus).toString()} </p>
                    <button onClick={() => changeListeningStatus(a.id)}> change </button>
                    <label onClick={((e) => e.stopPropagation())}>
                        <input 
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, a.id)}/>
                    </label>
                    </article>
                </div> 
            ))}    
        </div>
    )
}

export default BandCard;