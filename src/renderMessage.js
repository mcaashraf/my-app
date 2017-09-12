import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function Message(props)
{
return <h2> Message is {props.message} </h2>;
}


function Greet(props)
{
return (<div>
       <h1> Hello {props.name}</h1>
       <Message message={props.message}/>
       </div>)
 }

 const component = <Greet name="Ashraf" message="Well Done :)"/>
 const node=document.getElementById('root');
 ReactDOM.render(component,node);
