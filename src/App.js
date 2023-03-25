import React, {Component} from "react"
import './App.css';
import Form from "./components/Form";
import List from "./components/List";

class App extends Component {

    state = {
        courses: [{name: "Manchester City Football Club Limited", id:9, edit: false}]
    }

    handleAdd = (name) => {
        var newEl = {name: name, id: Math.floor(Math.random() * 1000000), edit:false}
        var coursess = this.state.courses
        coursess.push(newEl)
        this.setState({courses: coursess})
    }

    handleDelete = (id) => { // eslint-disable-next-line
        var courss = this.state.courses.filter(e => e.id != id)
        this.setState({courses: courss})
    }

    handleEdit = (id) => {
        var cou = this.state.courses // eslint-disable-next-line
        cou = cou.map(e => e.id == id ? {name: e.name, id: e.id, edit: true} : e)
        this.setState({courses: cou})
    }

    handleSave = (id, value) => {
        var coucou = this.state.courses // eslint-disable-next-line
        coucou = coucou.map(e => e.id == id ? {name: value ? value : e.name, id: e.id, edit: false} : e)
        this.setState({courses: coucou})
    }

    render() {
        return (
            <div className="App">
                <h2 className="title">Crud App</h2>
                <Form handleAdd={this.handleAdd} />
                <List courses={this.state.courses} handleSave={this.handleSave} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
            </div>
            );
        }
}

export default App;
