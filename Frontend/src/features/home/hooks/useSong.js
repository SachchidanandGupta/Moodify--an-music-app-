import { getSong } from "../service/song.api";
import { useContext } from "react";
import { SongContext } from "../song.context";


export const useSong = () => {
    const context = useContext(SongContext)

    const { loading, setLoading, song, setSong } = context

    async function handleGetSong({ mood }) {
        if (!mood) return

        setLoading(true)
        try {
            const moodQuery = typeof mood === 'string' ? mood.toLowerCase() : mood
            const data = await getSong({ mood: moodQuery })
            console.debug('getSong response:', data)

            // backend returns the found document under `songs` (see controller)
            const found = data?.songs || data?.song || null

            if (found) {
                // keep backend shape but ensure common aliases exist for Player
                const normalized = {
                    ...found,
                    url: found.songUrl || found.url || '',
                    posterUrl: found.posterUrl || found.image || ''
                }

                setSong(normalized)
            } else {
                console.warn('No song found for mood:', mood)
                setSong({ title: '', artist: '', src: '' })
            }
        } catch (err) {
            console.error('Failed to fetch song:', err)
        } finally {
            setLoading(false)
        }
    }

    return ({ loading, song, handleGetSong })

}