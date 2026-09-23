import React, { useState, useEffect } from "react";
import { useNavigate } from "react";

function CreateAlbumBox() {
    const [err, setErr] = useState();
    const [albumName, setAlbumName] = useState("");
    const [artist, setArtist] = useState("");
    const [listeningStatus, setListeningStatus] = useState(false);
    const API_URL = "http://localhost:5245/api/album/addAlbum";

    async function CreateAlbum(e) {
        e.preventDefault()
        const album = { id: -1, albumName: albumName, artist: artist, listeningStatus: listeningStatus, imageURL: null }
        
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(album)
                })

                window.location.reload();
            } catch (error) {
            setErr(error.message)
        }
    }

    return (
        <div className="CreateAlbumBox">
            <form onSubmit={CreateAlbum}>
            <input type="text" id="albumName" placeholder="Album namn" value={albumName} onChange={(e) => setAlbumName(e.target.value)} />
            <br />
            <input type="text" id="artist" placeholder="Artist namn" value={artist} onChange={(e) => setArtist(e.target.value)}/>
            <br />
            <label> Har du lyssnat igenom detta band? </label>
            <input type="checkbox" id="listeningStatus" placeholder="Artist namn" checked={listeningStatus} onChange={(e) => setListeningStatus(e.target.checked)}/> 
            <br />
            <input type="submit" value="Spara album" />
            </form> 
        </div>
    )
}

export default CreateAlbumBox