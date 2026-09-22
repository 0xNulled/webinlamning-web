import React, { useState, useEffect } from "react";
import { useNavigate } from "react";

function CreateAlbumBox() {
    return (
        <div className="CreateAlbumBox">
            <form>
            <input type="text" placeholder="Album namn" />
            <br />
            <input type="text" placeholder="Artist namn" />
            <br />
            <label> Har du lyssnat igenom detta band? </label>
            <input type="checkbox" placeholder="Artist namn" /> 
            <br />
            <input type="submit" value="Spara album" />
            </form> 
        </div>
    )
}

export default CreateAlbumBox