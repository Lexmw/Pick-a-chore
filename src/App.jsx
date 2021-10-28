import React, { Component } from "react";
import AddTodo from "./AddTodoItem";
import TodoItem from "./TodoItem";
import Spinner from "./spinner";
import {wheel} from "../public/Spinner";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.setColor = this.setColor.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.delTodo = this.delTodo.bind(this);
    this.show = this.show.bind(this);
  }

  handleSubmit(description) {
    let listItem = {
      description: description,
      id: 1 + Math.random(),
      complete: false,
      edit: false
    };

    this.state.todo.push(listItem);
    this.setState({ todo: this.state.todo, description: ""});
  }

  handleEdit(id) {
    this.setState(prevState => ({
      todo: prevState.todo.map(listItem => {
        if(listItem.id == id){
          listItem.edit = !listItem.edit;
        }

        return listItem;

      })
    })
    )
  };

handleSave(editDescription, id) {
  this.setState(prevState => ({
    todo: prevState.todo.map(listItem => {
      if(listItem.id == id){
        listItem.description = editDescription;
        listItem.edit = false;
      }
      return listItem;
    })
  })
 )
}

delTodo(id){
  let deltempo = this.state.todo.filter((listItem) => {
    if(listItem.id !== id){
      return listItem;
    } 
  });
    this.setState({
      todo: deltempo
      })
};

show() {
  let ChoresList = [{"id":"1","chore":"Sweeping","area":"living room"},{"id":"2","chore":"Clean","area":"bathroom"},{"id":"3","chore":"Wash Walls","area":"Bedroom"},{"id":"4","chore":"Wash Walls","area":"LivingRoom"},{"id":"5","chore":"Wash Walls","area":"Kitchen"},{"id":"6","chore":"Wash Walls","area":"Hallway"},{"id":"7","chore":"Vacuum","area":"Bedroom"},{"id":"21","chore":"Vacuum","area":"living Room"},{"id":"74","chore":"Vacuum","area":"Hallway"},{"id":"8","chore":"Wash Clothes","area":""},{"id":"56","chore":"Wash Car","area":"Garage"}];
  console.log("inside the async request",ChoresList)
var venueContainer = $("#chore-list ul");
$.each(ChoresList, function (key, item) {
venueContainer.append(
  $(document.createElement("li"))
    .append(
      $(document.createElement("input"))
        .attr({
          id: key,
          name: item.chore,
          value: item.chore,
          type: "checkbox",
          checked: true,
        })
        .change(function () {
          var cbox = $(this)[0];
          var segments = wheel.segments;
          var i = segments.indexOf(cbox.value);

          if (cbox.checked && i == -1) {
            segments.push(cbox.value);
          } else if (!cbox.checked && i != -1) {
            segments.splice(i, 1);
          }

          segments.sort();
          wheel.update();
        })
    )
    .append(
      $(document.createElement("label"))
        .attr({
          for:key,
        })
        .text(item.chore)
    )
);
});

var segments = new Array();

  $.each($("#chore-list input:checked"), function (key, cbox) {
    console.log("These are all the checkboxes",cbox);
    segments.push(cbox.value);

    console.log(segments);
  });

  wheel.segments = segments;
  wheel.update();
};

  render() {
    const { todo } = this.state;
    return (
      <div className="container">
       <header>
        <h1>Pick-A-Chore</h1>
        <p>
          The app that makes picking a chore fun and effective. This is great
          for couples, families, and siblings that are just tired of playing
          rock paper scissors to find out who has the chores that day.
        </p>
      </header>
        <hr className="tagline" />

        <div className="row">
          <AddTodo handleSubmit={this.handleSubmit} show = {this.show}/>
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">View Todos</div>
              <div className="panel-body">
                {todo.map(todo => (
                  <TodoItem
                    handleCheck={this.handleCheck}
                    handleEdit = {this.handleEdit}
                    handleSave = {this.handleSave}
                    delTodo = {this.delTodo}
                    todo={todo}
                    key={todo.id}
                    description={todo.description}
                    complete={todo.complete}
                    edit={todo.edit}
                    id={todo.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Spinner
          todo={this.state.todo}
          />
      </div>
    );
  }
}
export default App;
