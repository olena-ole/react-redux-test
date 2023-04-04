import { inc, dec, rnd } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={() => dispatch(inc())}>INC</button>
            <button className="btn btn-primary" onClick={() => dispatch(dec())}>DEC</button>
            <button className="btn btn-primary" onClick={() => dispatch(rnd())}>RND</button>
        </div>
    );
}

export default Counter;