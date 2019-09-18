export const  fetchGoals = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_GOALS'})
      return fetch('/api/goals')
        .then(response => response.json())
        .then(goals => dispatch({
          type: 'FETCH_GOALS',
          payload: goals}))
  }
}

export const fetchGoal = id => {
  return (dispatch) => {
    dispatch({type: 'LOADING_GOALS'})
      return fetch(`/api/goals/${id}`)
        .then(response => response.json())
        .then(goal => dispatch({
          type: 'FETCH_GOAL',
          payload: goal}))
  }
}

export const addGoal = goalInput => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(goalInput)
  }
  return dispatch => {
    fetch('/api/goals', data)
      .then(response => response.json())
      .then(goal => dispatch({
        type: 'CREATE_GOAL',
        payload: goal
      }))
      .catch(err => err)
  }
}

export const deleteGoal = goal_id =>{
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return dispatch => {
    fetch(`/api/goals/${goal_id}`, data)
      .then(response => response.json())
      .then(goal => dispatch({
        type: 'DELETE_GOAL',
        payload: goal
      }))
      .catch(err => err)
  }
}
