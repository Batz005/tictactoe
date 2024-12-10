import { useState } from "react"

export default function Player({ name, symbol, isActive }) {
    let [ isEditing, setIsEditing ] = useState(false);
    let [ playerName, setPlayerName ] = useState(name);

    let editableplayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    const handleNameChange = (event) => {
        setPlayerName(event.target.value)
    }

    if(isEditing){
        playerName = <span className="player"><input value={playerName} onChange={handleNameChange} required/></span>
        btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active': undefined}>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={()=>{setIsEditing(wasEditing => !wasEditing)}}>{btnCaption}</button> 
        </li>
    )
}