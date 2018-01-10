import React from 'react';

export const TodoButton = props => (
	<button onClick={props.action}>
          { props.name }
     </button>
)