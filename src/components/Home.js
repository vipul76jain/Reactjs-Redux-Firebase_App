import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom'
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            sortedList: [],
            checked: false
        }
    }

    componentDidMount() {
        console.log("Home")
        axios.get('https://api.myjson.com/bins/1dlper')
            .then(res => {
                const data = Object.values(res.data);

                this.setState({ data, sortedList: data });
                console.log(data);
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange = (e) => {
        const list = this.state.data
        if (e.target.value.length !== 0) {
            const sortedList = list.filter((item) => item.name.includes(e.target.value))
            this.setState({ sortedList })
        } else {
            this.setState({ sortedList: this.state.data })
        }
    }

    sortAlpha = () => {
        this.setState({ checked: !this.state.checked }, () => {
            const array = [...this.state.sortedList]
            if (this.state.checked === true) {
                const sortArray = array.sort(function (a, b) {
                    if (a.name < b.name) { return -1; }
                    if (a.name > b.name) { return 1; }
                    return 0;
                });
                this.setState({ sortedList: sortArray })
            } else {
                const sortArray = array.sort(function (b, a) {
                    if (a.name < b.name) { return -1; }
                    if (a.name > b.name) { return 1; }
                    return 0;
                });
                this.setState({ sortedList: sortArray })
            }
        })
    }

    // onLogout() {
    //     cookie.remove('vipul@gmail.com', { path: '/' })
    // }

    render() {
        return (
            <div>
                <header>
                    <div className="header">
                        <div className="right">
                            <input type="text" className="input" style={{ width: "50%", height: 30, margin: 10, fontSize: 15, paddingLeft: 5 }} onChange={this.handleChange} placeholder="Search..." />
                        </div>
                        <div className="left">
                            <div className="buttons">
                                {/* <Button onClick={this.onLogout}>button 2</Button> */}
                                <Switch checked={this.state.checked} onChange={this.sortAlpha} value="A-Z" color="primary">sort</Switch>
                            </div>
                        </div>
                    </div>
                </header>
                <Grid container item xs={12} spacing={20} style={{ marginTop: 61 }}>
                    {this.state.sortedList.map((person) =>
                        <Grid item xs={4} style={{ display: 'flex', justifyContent: "center" }}>
                            <div onClick={() => this.props.history.push(`${person.rollNo}`, { data: this.state.sortedList.find(student => student.rollNo === person.rollNo) })} className="card" style={{ padding: 10 }}>
                                <div className="name" style={{ paddingBottom: 10, display: "flex", justifyContent: "space-between" }}>
                                    <text style={{ fontSize: 20, fontWeight: "bold" }}>{person.name}</text>
                                    <text style={{ fontSize: 16, fontWeight: "500", paddingTop: 4 }}>Roll No. - {person.rollNo}</text>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 10 }}>
                                    <text style={{ fontSize: 15 }}>Marks</text>
                                </div>
                                <div>
                                    <ul style={{ listStyleType: "none", textAlignLast: "justify", paddingRight: 45 }}>
                                        {Object.entries(person.marks).map(mark => <li>{mark[0]} - {mark[1]}</li>)}
                                    </ul>
                                </div>
                                <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 10 }}>
                                    <text style={{ fontSize: 18 }}>Total = <span>{Object.entries(person.marks).map(marks => marks[1]).reduce((prev, next) => prev + next)}</span></text>
                                </div>
                            </div>
                        </Grid>)
                    }
                </Grid>
            </div>
        );
    }
}

export default withRouter(Home);