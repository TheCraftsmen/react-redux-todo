
const defaultTodo = {
	input_value: "", 
	listitem: []
}

const todo = (state = defaultTodo, action) => {
	var listitem = state.listitem;
	switch(action.type){
		case "CHANGE_INPUT":
			return Object.assign(
				{}, 
				state,
				{input_value: action.value})
		case "ADD_TODO_ITEM":
			listitem.push({
				value: state.input_value,
				id: Math.round(Math.random() * 100),
				edit: false,
				completed: false
			})
			return Object.assign(
				{}, 
				state, 
				{listitem: listitem, input_value: ""})
		case "REMOVE_TODO_ITEM":
			if (action.index > -1){
				listitem.splice(action.index, 1)
			}
			return Object.assign(
				{}, 
				state, 
				{listitem: listitem})
		case "ITEM_EDIT_MODE":
			listitem[action.index].edit = true;
			return Object.assign({}, state, {listitem: listitem})
		case "ITEM_READ_MODE":
			listitem[action.index].edit = false;
			return Object.assign({}, state, {listitem: listitem})
		case "UPDATE_ITEM_TEXT":
			listitem[action.index].value = action.value;
			return Object.assign({}, state, {listitem: listitem})
		case "ITEM_CHANGE_COMPLETED":
			listitem[action.index].completed = true;
			return Object.assign({}, state, {listitem: listitem})
		case "ITEM_CHANGE_PENDING":
			listitem[action.index].completed = false;
			return Object.assign({}, state, {listitem: listitem})
		default:
			return Object.assign({}, state);
	}
}

export default todo;