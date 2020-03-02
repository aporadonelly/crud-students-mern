import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';

export class StudentList extends Component {
    state = {
        students: []
    }

    componentDidMount(){
        axios.get('http://localhost:4000/students/')
        .then(res => {
            this.setState({students: res.data})
        }).catch(err => {return err}) 
    }

    DataTable= () =>{
        return this.state.students.map((student) => <StudentTableRow key={student._id} student={student}/>)
    }

    render() {
        console.log(this.state.students)
        return (
            <div className="table-wrapper">
                 <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                 </Table>
            </div>
        )
    }
}

export default StudentList
