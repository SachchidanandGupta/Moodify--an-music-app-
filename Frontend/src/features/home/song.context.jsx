import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [ song, setSong ] = useState({
  "_id": {
    "$oid": "6a0426bc4928e539d457f19f"
  },
  "username": "sn",
  "email": "sn@sn.com",
  "password": "$2b$10$/DzZCAOLcug1NQYJk1XYH.LViJS4OjjO45gQg9NAG1WlNwA.55hl2",
  "__v": 0

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