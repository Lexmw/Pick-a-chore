import React, {Component} from 'react';

class AddTodoItem extends Component{
constructor(props) {
  super(props);
  this.state = {
    id: 4,
    description: ''
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({[event.target.name]: event.target.value});
}

render() {
  return (
  <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Add New Todo</div>
              <div className="panel-body text-left">
                <form>
                <h4 className="card-text">I want to...</h4>
                <textarea cols={40} rows={3} className='create-todo-text' name='description' value={this.state.description} onChange={this.handleChange}/>
                </form>
              <div className="panel-footer">
              <button className="btn btn-success btn-block create-todo" type="button" onClick={ () => {this.props.handleSubmit(this.state.description), this.props.show()}}>
                  Add
                </button>
              </div>
              </div>
            </div>
          </div>
)};
}

export default AddTodoItem;