import React from 'react';
import './App.css';
import Todo from './Todo'; // Todo 컴포넌트 가져오기

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 0, title: 'Hello world 1', done: true },
                { id: 1, title: 'Hello world 2', done: false },
            ],
        };
    }

    render()
            {
        const todoItems = this.state.items.map(
            (item) => (
            <Todo item={item} key={item.id} />
            )
        );
        return <div className="App">{todoItems}</div>;
    }
}

export default App;
