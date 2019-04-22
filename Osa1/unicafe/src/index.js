import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({ good, neutral, bad, all }) => {

    const average = () => (good - bad) / all
    const numberOfPos = () => good / all * 100

    if (all === 0) {
        return (
            <p>Ei yhtään palautetta annettu</p>
        )
    }
    return (
        <table>
            <tbody>
                <Statistic text='hyvä' value={good} />
                <Statistic text='neutraali' value={neutral} />
                <Statistic text='huono' value={bad} />
                <Statistic text='yhteensä' value={all} />
                <Statistic text='keskiarvo' value={average()} />
                <Statistic text='positiivisia' value={numberOfPos()} />
            </tbody>
        </table>
    )
}

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const handleGoodClick = () => {
        setAll(all + 1)
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setAll(all + 1)
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setAll(all + 1)
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>Anna palautetta</h1>
            <Button handleClick={handleGoodClick} text='Hyvä' />
            <Button handleClick={handleNeutralClick} text='Neutraali' />
            <Button handleClick={handleBadClick} text='Huono' />
            <h2>Statistiikkaa</h2>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
