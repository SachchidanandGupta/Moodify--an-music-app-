import React from 'react'
import Player from '../components/Player'
import FaceExpression from '../../Expressions/components/FaceExpression'
import { useSong } from '../hooks/useSong'

const Home = () => {

    const { handleGetSong, song, loading } = useSong()

    return (
        <>
            <FaceExpression
                onClick={(expression) => { handleGetSong({ mood: expression }) }}
            />

            {/* show player only when a track URL is available */}
            {song?.url ? (
                <Player />
            ) : (
                <div style={{ textAlign: 'center', marginTop: 12 }}>
                    {loading ? 'Loading track…' : 'No track loaded yet. Detect an expression to load music.'}
                </div>
            )}
        </>
    )
}

export default Home