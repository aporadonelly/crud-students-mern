import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export class StudentTableRow extends Component {
    state = {
        students: []
    }
    
    delStudent = () => {
        axios.delete('http://localhost:4000/students/delete-student/'+ this.props.student._id)
        .then(res => 
            this.setState({
                students: [...this.state.students.filter(student => student._id !== this.props.student._id)]
            })
        ).catch()
        
        window.location.reload();
    }

    render() {
        return (
            <tr>
                <td>{this.props.student.name}</td>
                <td>{this.props.student.email}</td>
                <td>{this.props.student.rollno}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.student._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger" onClick={this.delStudent}>Delete</Button>
                </td>
            </tr>
        );
    }
}

export default StudentTableRow
