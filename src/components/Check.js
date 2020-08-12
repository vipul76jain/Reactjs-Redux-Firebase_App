import React from 'react';
import Detail from "./Detail";
import axios from 'axios';
import Error from "./Error";
import Loader from 'react-loader-spinner';

class Check extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.match.params,
            isLoading: true
        }

    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/1dlper')
            .then(res => {
                const data = Object.values(res.data);

                const list = data.find(student => student.rollNo == this.state.data.roll_no);

                this.setState({ list, isLoading: false });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        if (this.state.isLoading == true && this.state.list == undefined) {
            return <Loader type="Bars" color="#00BFFF" height={70} width={70} timeout={3000} style={{ textAlign: 'center', marginTop: 150, }} />
        } else if (this.state.isLoading == false && this.state.list !== undefined) {
            return <Detail data={this.state.data} list={this.state.list} Data={this.state.Data} />
        } else {
            return <Error />
        }
    }
}
export default Check;