export const handleInputChange = (e, j) => {
  return dispatch => {
    dispatch({
      type: "CHANGE_INPUT",
      value: e.target.value 
    });
  }
}

export const handleButtonClick = () => {
  return dispatch => {
    dispatch({
      type: "ADD_TODO_ITEM",
      value: null
    });
  }
}

export const handleRemoveListItemElement = (index) => {
  return dispatch => {
    dispatch({
      type: "REMOVE_TODO_ITEM",
      index: index
    });
  }
}

export const handleChangeItemToEdit = (index) => {
  return dispatch => {
    dispatch({
      type: "ITEM_EDIT_MODE",
      index: index
    });
  }
}

export const handleChangeItemToRead = (index) => {
  return dispatch => {
    dispatch({
      type: "ITEM_READ_MODE",
      index: index
    });
  }
}

export const handleUpdateItemText = (index, e) => {
  return dispatch => {
    dispatch({
      type: "UPDATE_ITEM_TEXT",
      index: index,
      value: e.target.value
    });
  }
}

export const handleChangeItemToCompleted = (index) => {
  return dispatch => {
    dispatch({
      type: "ITEM_CHANGE_COMPLETED",
      index: index
    })
  }
}

export const handleChangeItemToPending = (index) => {
  return dispatch => {
    dispatch({
      type: "ITEM_CHANGE_PENDING",
      index: index
    })
  }
}
