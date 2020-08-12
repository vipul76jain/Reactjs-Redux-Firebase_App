import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProject } from '../store/actions/projectActions'
import StudentDetailCard from './StudentDetailCard'


class StudentDetails extends Component {
    state = {
        age: '',
        first_name: "",
        last_name: ""

    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" style={{ background: "darkcyan", display: "flex", flexDirection: "column", alignItems: "center", padding: 20 }}>
                    <h5 className="grey-text text-darken-3">Student Details</h5>
                    <div className="input-field" style={{ margin: 10 }}>
                        <label htmlFor="age">Age - </label>
                        <input type="text" id="age" onChange={this.handleChange} style={{ marginLeft: 10 }} />
                    </div>
                    <div className="input-field" style={{ margin: 10 }}>
                        <label htmlFor="first-name">First Name - </label>
                        <input type="text" id="first_name" onChange={this.handleChange} style={{ marginLeft: 10 }} />
                    </div>
                    <div className="input-field" style={{ margin: 10 }}>
                        <label htmlFor="last-name">Last Name - </label>
                        <input type="text" id="last_name" onChange={this.handleChange} style={{ marginLeft: 10 }} />
                    </div>
                    <div className="button">
                        <button>Submit</button>
                    </div>
                </form>
                <div>
                    <StudentDetailCard />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(StudentDetails)