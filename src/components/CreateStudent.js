import React, { Component } from 'react'
import axios from 'axios'

export class CreateStudent extends Component {
    state = {
        name: '',
        email: '',
        rollno: ''
      }

      onChange = e =>{
          this.setState({
              [e.target.name]: e.target.value
          })
      }

      onSubmit = e => {
          e.preventDefault();
          const newObj = {
              name: this.state.name,
              email: this.state.email,
              rollno: this.state.rollno
          }

          axios.post('http://localhost:4000/students/create-student', newObj).then(res => {
              console.log(res.data)
          })
          this.setState({
              name: '',
              email: '',
              rollno: ''
          })
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

export default CreateStudent
