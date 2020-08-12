import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './Home.css';

const StudentDetailCard = (props) => {

    const { Student } = props;
    console.log('data', Student)
    if (Student) {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {Student.map((person) =>
                    <div style={{ background: "aqua", margin: 20, padding: 20 }}>
                        <div className="age" style={{ paddingBottom: 10, display: "flex", justifyContent: "space-between" }}>
                            <text style={{ fontSize: 20, fontWeight: "bold" }}>Age - {person.age}</text>
                        </div>
                        <div className="first_name" style={{ paddingBottom: 10, display: "flex", justifyContent: "space-between" }}>
                            <text style={{ fontSize: 20, fontWeight: "bold" }}>First Name - {person.first_name}</text>
                        </div>
                        <div className="last_name" style={{ paddingBottom: 10, display: "flex", justifyContent: "space-between" }}>
                            <text style={{ fontSize: 20, fontWeight: "bold" }}>Last Name - {person.last_name}</text>
                        </div>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div>
                <p>Loading.....</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        Student: state.firestore.ordered.Students
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'Students' }]))(StudentDetailCard)