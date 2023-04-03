import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={inc}>INC</button>
            <button className="btn btn-primary" onClick={dec}>DEC</button>
            <button className="btn btn-primary" onClick={rnd}>RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

    return { 
        inc, 
        dec, 
        rnd: () => {
            const value = Math.floor(Math.random() * 10 + 1);
            rnd(value);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);