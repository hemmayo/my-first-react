import React from 'react'
import classes from './Cockpit.css'

const Cockpit = ( props ) => {
    let btnClass = ''
    if (props.showPersons) {
        btnClass = classes.Red
    }
    return (
    <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <h2>Hello world. This is really working</h2>
        <button className={btnClass} onClick={props.click}>Toggle Persons</button>
    </div>
)}

export default Cockpit