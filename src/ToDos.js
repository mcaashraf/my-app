import React,{Component} from "react";
import ToDoItem from './ToDoItem';

export default class ToDos extends Component{

createToDoItems()
{

return this.props.todos.map((todo) => {return <ToDoItem title={todo}/>});
}
render()
{
return <div>
{this.createToDoItems()}
</div>
}

}