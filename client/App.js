import React from 'react';

import Header from './header';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            uname: "default",
        }
    }
    render(){
    return(
        <div>
            <Header websiteName={this.state.uname} />
            <input placeholder="dynamic heading" ref="username" />
            <button onClick={()=> {
                console.log(this.refs.username.value)
                this.setState({uname: this.refs.username.value})
                this.refs.username.value=""
            }}>Change Heading</button>
            <h1>My App</h1>
         
            <p>dklhasfffff ladkhf adlfhladlfhadhfladhfladlhf</p>
        </div>
    )
}
}

export default App;