import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'

class InstructerProfile extends Component {
    constructor() {
        super()
        this.state = {
            stuNumber: '',
            name: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            stuNumber: decoded.stuNumber,
            name: decoded.name
        })
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <h2 className="text-left">MY PROFILE</h2>
                <table className="table ">
                    <tbody>
                        <tr>
                            <td>Instructer No </td>
                            <td>{this.state.stuNumber}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.name}</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <br></br>

                <div className="list-group">
                    <Link to="/instructorprofile" className="btn btn-primary">
                        View Course
                    </Link>
                    <Link to="/instructorprofile" className="btn btn-success">
                        View Student Info
                    </Link>
                    <Link to="/instructorprofile" className="btn btn-primary">
                        Instructer Info
                    </Link>
                    <Link to="/instructorprofile" className="btn btn-success">
                        Assignments
                    </Link>
                </div>

            </div>
        )
    }
}

export default InstructerProfile