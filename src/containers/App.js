import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons'
import Cockpit from '../components/Cockpit';
// import Radium, { StyleRoot } from 'radium'
class App extends Component {
  state = {
    persons: [
      { id: 'jksbndjc' ,name: 'Emma', age: 19 },
      { id: 'ljdsacj', name: 'Emma', age: 19 },
      { id: 'ounsdv', name: 'Emma', age: 19 }
    ],
    showPersons: false,
    toggleCount: 0
  }

  switchNameHandler = () => {
    // alert('was clicked')
    // DON'T DO THIS this.state.persons[0].name = 'Yo'
    this.setState({
      persons: [
        { id: 'kjsndk', name: 'Emmanuel', age: 19 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons]
    const index = persons.findIndex((person) => person.id === id)
    persons[index].name = event.target.value
    this.setState({
      persons
    })
  }

  deletePersonHandler = (id) => {
    const persons = [...this.state.persons]
    const index = persons.findIndex((person) => person.id === id)
    persons.splice(index, 1)
    this.setState({
      persons
    })
  }

  togglePersonsHandler = () => {
    this.setState( (prevState, props) => {
      return {
        showPersons: !this.state.showPersons,
        toggleCount: prevState.toggleCount + 1
      }
    })
  }

  render() {
    let persons = null

    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons={this.state.persons}  
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      )
    }
    return (
      // <StyleRoot>
        <div className={classes.App}>
          <Cockpit appTitle={this.props.title} showPersons={this.state.showPersons} click={this.togglePersonsHandler} />
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

export default (App);
