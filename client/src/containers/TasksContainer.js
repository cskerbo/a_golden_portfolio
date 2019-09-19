import React, { Component } from 'react'
import { addTask, deleteTask, fetchGoalTasks } from '../actions/tasksActions'
import { connect } from 'react-redux'
import { fetchGoal } from '../actions/goalsActions'
import Tasks from '../components/Tasks/Tasks';
import TaskInput from '../components/Tasks/TaskInput';

class TasksContainer extends Component {
  componentDidMount() {
    this.props.fetchGoalTasks(this.props.goal.id)
    this.props.fetchGoal(this.props.goal.id)
  }

  render(){
    const goalId = this.props.goal.id
    return(
      <div>
        <Tasks
          key={this.props.goal.id}
          goalId={this.props.goal.id}
          tasks={this.props.tasks}
          deleteTask={this.props.deleteTask}
        />
      <TaskInput addTask={this.props.addTask} goalId={this.props.goal.id}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks.taskData,
  goal: state.goals.goalData
})

const mapDispatchToProps = dispatch => ({
  fetchGoalTasks: goalId => dispatch(fetchGoalTasks(goalId)),
  fetchGoal: goalId => dispatch(fetchGoal(goalId)),
  addTask: (taskInput, goalId) => dispatch(addTask(taskInput, goalId)),
  deleteTask: taskId => dispatch(deleteTask(taskId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
