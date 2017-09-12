import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Clock from './Timer';

const node= document.getElementById('root');

ReactDOM.render(<div>
                <Clock />,
                <Counter />,
                <Counter />
                </div>
                ,node)