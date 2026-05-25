import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    // default song is an empty track so UI can show/hide player correctly
    const [ song, setSong ] = useState({
        title: "",
        artist: "",
        src: "",
    })

    const [ loading, setLoading ] = useState(false)

    return (
        <SongContext.Provider
            value={{ loading, setLoading, song, setSong }}
        >
            {children}
        </SongContext.Provider>
    )

}