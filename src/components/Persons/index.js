import React, { Component } from 'react'
import Person from './Person'

class Persons extends Component {
    render() {
        return this.props.persons.map((person) => {
            return (
                <Person 
                    name={person.name} 
                    age={person.age}
                    clicked={() => this.props.clicked(person.id)}
                    changed={ (event) => this.props.changed(event, person.id)}
                    key={person.id} />
            )
        })
    }
}

export default Persons