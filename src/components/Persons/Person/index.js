import React, { Component } from 'react'
import WithClass from '../../../hoc/WithClass'
// import Radium from 'radium'
import classes from './Person.css'

class Person extends Component {
    render() { 
        return (
           
            <WithClass classes={classes.Person}>
                <p onClick={this.props.clicked}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <div>{this.props.children}</div>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
            </WithClass> 
        )
    }
}

export default Person