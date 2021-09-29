import { join } from "path"
import { CSSProperties, useEffect, useState } from "react"


export function CSSCenterFlex(flexDirection: 'column' | 'row' = 'column'): CSSProperties {
    return {
        display: 'flex',
        flexDirection,
        alignItems: 'center',
        justifyContent: 'center',
    }
}


function sample<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length)

    return array[index]
}

function generateNote(): string {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

    return sample(notes)
}

function generateKey(): string {
    return Math.random().toString(36).substr(2, 5)
}

function bpmToInterval(bpm: number): number {
    return Math.floor(60 * 1000 / bpm)
}

const ANIMATTION_ENTER = `animate__animated animate__fadeIn`


const PlayerBox: React.FC = ({ children }) => {
    return (
        <div style={{
            width: '40vw',
            height: '40vh',
            backgroundColor: 'skyblue',
            ...CSSCenterFlex(),
            fontSize: '120px',
        }}>
            {children}
        </div>
    )
}


const Note: React.FC<{ note: string }> = ({ note }) => {
    const audioPath = join(process.env.PUBLIC_URL, `assets/${note}.mp3`)

    return (
        <PlayerBox>
            <span className={ANIMATTION_ENTER} style={{
                fontSize: '120px',
            }}>{note}</span>
            <audio src={audioPath} autoPlay />
        </PlayerBox>
    )
}

const Playing: React.FC<{ bpm: number }> = ({ bpm }) => {
    const [note, setNote] = useState<string>(generateNote())
    const [key, setKey] = useState<string>(generateKey())
    const interval = bpmToInterval(bpm)

    function refreshNote() {
        setNote(generateNote())
        setKey(generateKey())
    }

    useEffect(() => {
        const timerId = setInterval(refreshNote, interval)
        return function cleanup() {
            clearInterval(timerId)
        }
    })

    return (
        <Note key={key} note={note} />
    )
}

const Paused: React.FC = () => {
    const msg = `PAUSED`

    return (
        <PlayerBox>
            <span>{msg}</span>
        </PlayerBox>
    )
}

export const Player: React.FC<{ bpm: number, playing: Boolean }> = ({ bpm, playing }) => {

    if (playing) {
        return (
            <>
                <Playing bpm={bpm} />
            </>
        )
    }
    return (
        <Paused />
    )
}