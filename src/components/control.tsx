import { Button, InputNumber, message } from "antd"
import { CSSCenterFlex } from "./notes"

interface ControlPanelProps {
    setBpm: (bpm: number) => void,
    playing: Boolean,
    setPlaying: (playing: Boolean) => void,
}

const DEFAULT_BPM = 60

export const ControlPanel: React.FC<ControlPanelProps> = ({
    setBpm, playing, setPlaying,
}) => {

    const onChange = (value: string) => {
        const bpm = parseInt(value)
        if (Number.isNaN(bpm)) {
            setBpm(DEFAULT_BPM)
        }
        else {
            setBpm(bpm)
        }
    }

    const onClick = () => {
        setPlaying(!playing)
    }

    const label = playing ? `停止` : `开始`

    return (
        <div style={{
            ...CSSCenterFlex('row'),
        }}>
            <span style={{ margin: '8px' }}>
                <span style={{ marginRight: '4px', fontSize: '18px' }}>{`bpm`}</span>
                <InputNumber onChange={onChange} size='large' />
            </span>
            <Button onClick={onClick} size='large'>{label}</Button>
        </div>
    )
}