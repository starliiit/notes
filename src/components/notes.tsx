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

function bpmToInterval(bpm: number): number {
    return Math.floor(60 * 1000 / bpm)
}

const ANIMATTION_ENTER = `animate__animated animate__fadeIn`
const ANIMATION_EXIT = `animate__animated animate__fadeOut`

export const Notes: React.FC<{ bpm: number, playing: Boolean }> = ({ bpm, playing }) => {
    const [note, setNote] = useState<string>(generateNote())
    const [className, setClassName] = useState<string>(``)
    const interval = bpmToInterval(bpm)

    function refreshNote() {
        setNote(generateNote())
        setClassName(ANIMATTION_ENTER)
        setTimeout(() => {
            setClassName(ANIMATION_EXIT)
        }, interval / 2)
    }

    useEffect(() => {
        if (playing) {
            const timerId = setInterval(refreshNote, interval)
            return function cleanup() {
                clearInterval(timerId)
            }
        }
    })

    return (
        <div style={{
            width: '40vw',
            height: '40vh',
            backgroundColor: 'skyblue',
            ...CSSCenterFlex(),
        }}>
            <span className={className} style={{
                fontSize: '60px',
            }}>{note}</span>
        </div>
    )
}