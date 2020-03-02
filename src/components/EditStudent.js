import React, { Component } from "react";
import axios from 'axios';

export class EditStudent extends Component {
    state = {
        name: '',
        email: '',
        rollno: ''
    }

    componentDidMount() {
        axios.get('http://localhost:4000/students/edit-student/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                name: res.data.name,
                email: res.data.email,
                rollno: res.data.rollno
            })
        }).catch(err => {throw err})
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const studentObj = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        }
        axios.put('http://localhost:4000/students/update-student/'+this.props.match.params.id, studentObj)
        .then(res => {
            return console.log(res.data, "Student successfully updated")
        }).catch(err => console.log(err))

         // Redirect to Student List 
        this.props.history.push('/')
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} />
                    <input type="text" name="rollno" value={this.state.rollno} onChange={this.onChange} />
                    <input type="submit" className="btn btn-primary" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default EditStudent
