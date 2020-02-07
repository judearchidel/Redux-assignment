import React ,{ Component}from 'react';

import './AddPerson.css';
import { render } from 'react-dom';

class addPerson extends Component{

state= {
    name: '',
    age: ''
}
nameChangeHandler = (event) => {
    this.setState({
        name: event.target.value
    })
}
ageChangeHandler = (event) => {
    this.setState({
        age: event.target.value
    })
}

    render()
    {
    return(
    <div className="AddPerson">
        <input type='text' placeholder="name" value={this.state.name} onChange={this.nameChangeHandler}/>
        <input type='text' placeholder='age' value={this.state.age} onChange={this.ageChangeHandler}/>
        <button onClick={()=>this.props.personAdded(this.state.name,this.state.age)}>Add Person</button>
    </div>
    )}
}

export default addPerson;