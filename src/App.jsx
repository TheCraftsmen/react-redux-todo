import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInputChange,
         handleButtonClick,
         handleRemoveListItemElement } from './actions';
import {Title} from './Title';
import {TodoInput} from './TodoInput';
import {TodoButton} from './TodoButton';
import ListItem from './ListItem';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Title name={"Todo List"} />
        <TodoInput todo={this.props.todo} handleInputChange={this.props.handleInputChange} />
        <TodoButton action={ this.props.handleButtonClick } name={"Agregar!!"} />
        <ul>
          { this.props.todo.listitem.map((item, i) => 
            <ListItem  
                key={item.id}
                position={i}
                item={item.value}
                edit={item.edit}
                completed={item.completed}
                handleRemoveListItemElement={this.props.handleRemoveListItemElement}/>) 
          }
        </ul>
        <h2>Completados</h2>
        
      </div>
    );
  }
}

export default connect( state => state, {handleInputChange, handleButtonClick, handleRemoveListItemElement})(App);
