import React, {Component} from "react";
import ToDos from "./ToDos";
import AddToDo from "./AddToDo";
export default class ToDoApp extends Component
{

constructor()
{
super();
this.state = {todos:['Learn React','Complete Project']};
this.addToDoItem=this.addToDoItem.bind(this);
}

addToDoItem(item){
this.setState({todos: this.state.todos.concat(item)});
}
render()
{
 return <div>
 <h1> TO DO </h1>
 <AddToDo callback={this.addToDoItem}/>
 <ToDos todos={this.state.todos} />
 </div>
}
}