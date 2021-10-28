import React, { Component } from "react";
import AddChore from "./AddChore";
import ChoreItem from "./ChoreItem";
import Spinner from "./spinner";
import {wheel} from "../public/Spinner";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chores: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.delchores = this.delchores.bind(this);
    this.show = this.show.bind(this);
  }

  handleSubmit(description) {
    let listItem = {
      description: description,
      id: 1 + Math.random(),
      complete: false,
      edit: false,
      checked: true
    };

    this.state.chores.push(listItem);
    this.setState({ chores: this.state.chores});
  }

  handleEdit(id) {
    this.setState(prevState => ({
      chores: prevState.chores.map(listItem => {
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
    chores: prevState.chores.map(listItem => {
      if(listItem.id == id){
        listItem.description = editDescription;
        listItem.edit = false;
      }
      return listItem;
    })
  })
 )
 this.show(this.state.chores);
}

delchores(id){
  let deltempo = this.state.chores.filter((listItem) => {
    if(listItem.id !== id){
      return listItem;
    } 
  });
  this.setState({
      chores: deltempo
      })
  this.show(deltempo);
};

show(chores) {

  var segments = new Array();

  for(let i =0; i < chores.length; i++){
    console.log("The string values of the chores item", chores[i].description);
    segments.push(chores[i].description);
    console.log(segments);
  }

  wheel.segments = segments;
  wheel.update();
};

  render() {
    const { chores } = this.state;
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
          <AddChore handleSubmit={this.handleSubmit} show = {this.show} chores= {this.state.chores}/>
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">Chores</div>
              <div className="panel-body">
                {chores.map(chores => (
                  <ChoreItem
                    handleCheck={this.handleCheck}
                    handleEdit = {this.handleEdit}
                    handleSave = {this.handleSave}
                    delchores = {this.delchores}
                    chores={chores}
                    key={chores.id}
                    description={chores.description}
                    complete={chores.complete}
                    edit={chores.edit}
                    id={chores.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Spinner
          chores={this.state.chores}
          />
      </div>
    );
  }
}
export default App;
