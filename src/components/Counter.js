import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Counter extends Component {
    render() {
        const {counter, inc, dec, rnd} = this.props;

        return (
            <div className="jumbotron">
                <h1>{counter}</h1>
                <button className="btn btn-primary" onClick={inc}>INC</button>
                <button className="btn btn-primary" onClick={dec}>DEC</button>
                <button className="btn btn-primary" onClick={rnd}>RND</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

export default connect(mapStateToProps, actions)(Counter);