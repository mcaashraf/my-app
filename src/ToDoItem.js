import React, {Component} from "react";
export default class ToDoItem extends Component{

render(){
return <div>
<span>{this.props.title}</span>
<span><button>x</button></span>
</div>
}
}