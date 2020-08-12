import React from 'react';
import BarChart from 'react-bar-chart';

class Detail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list,
            data: this.props.data,
            Data: this.props.Data
        }

    }

    render() {

        const Data = Object.entries(this.state.list.marks).map((college) => ({ text: college[0], value: college[1] }))

        const margin = { top: 20, right: 20, bottom: 30, left: 40 };

        return (
            <div>
                <div className="header" style={{ justifyContent: "center", alignItems: "center", color: "#fff" }}>
                    <h2>Student Detail</h2>
                </div>
                <div style={{ display: 'flex', justifyContent: "center", marginTop: 61 }}>
                    <div style={{ backgroundColor: "cyan", margin: 50 }}>
                        <div className="name" style={{ padding: 10, display: "flex", justifyContent: "space-between", backgroundColor: "darkcyan", color: "#fff" }}>
                            <text style={{ fontSize: 20, fontWeight: "bold" }}>{this.state.list.name}</text>
                            <text style={{ fontSize: 16, fontWeight: "500", paddingTop: 4 }}>Roll No. - {this.state.list.rollNo}</text>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 10, padding: 10 }}>
                            <text style={{ fontSize: 15 }}>GRAPH</text>
                        </div>
                        <div>
                            <div style={{ width: '50%' }}>
                                <BarChart ylabel='Marks'
                                    width={500}
                                    height={500}
                                    margin={margin}
                                    data={Data}
                                />
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 10, padding: 10 }}>
                            <text style={{ fontSize: 18 }}>Total = <span>{Object.entries(this.state.list.marks).map(marks => marks[1]).reduce((prev, next) => prev + next)}</span></text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Detail;