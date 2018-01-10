import React from 'react';

export const TodoInput = props => (
	<input type="text" value={props.todo.input_value} onChange={props.handleInputChange}/>
)