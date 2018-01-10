import React, {Component} from 'react';
import { connect } from 'react-redux';
import { handleChangeItemToEdit,
         handleChangeItemToRead,
         handleUpdateItemText,
         handleChangeItemToCompleted,
         handleChangeItemToPending } from './actions';

class ListItem extends Component{

	render(){
		let key = this.props.position
		return (
			<li>
          <div>
          { this.props.edit?
          	<input 
          		type="text" 
          		value={this.props.item} 
          		onChange={(e) => this.props.handleUpdateItemText(key, e)}
          		onBlur={() => this.props.handleChangeItemToRead(key)} /> :
            	<p>{this.props.item}</p>
          }
          </div>
          <div>
            {
              this.props.completed ?
              <button
                onClick={() => this.props.handleChangeItemToPending(key)}
              >
              Pendiente
              </button> :
              <button
                onClick={() => this.props.handleChangeItemToCompleted(key)}
              >
              Completado
              </button>
              
            }
            <button
            	onClick={() => this.props.handleRemoveListItemElement(key)}
            >
              Eliminar
            </button>
            <button onClick={() => this.props.handleChangeItemToEdit(key)}>
              Editar
            </button>
          </div>
        </li>
		);
	}
}

export default connect( state => state, 
  {
    handleChangeItemToEdit, 
    handleChangeItemToRead,
    handleUpdateItemText,
    handleChangeItemToCompleted,
    handleChangeItemToPending
  })(ListItem);
