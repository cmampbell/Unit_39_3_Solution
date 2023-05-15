import React, {useState} from "react"
import './EightBall.css'

const EightBall = ({answers}) => {
    const [msg, setMsg] = useState('Think of a question')
    const [color, setColor] = useState('black')

    const newAnswer = () => {
        const randomIdx = Math.floor(Math.random() * answers.length)
        const answer = answers[randomIdx]
        setMsg(answer.msg)
        setColor(answer.color)
    }
    
    return (
        <div className="EightBall" onClick={newAnswer} style={{backgroundColor: color}}>
            <p className="EightBall-msg">{msg}</p>
        </div>)
}

export default EightBall;