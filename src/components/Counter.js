import { connect } from "react-redux";
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

export default connect(mapStateToProps)(Counter);

// const update = () => {
//   root.render(
//     <Counter 
//       counter={getState().value} 
//       inc={inc} 
//       dec={dec} 
//       rnd={() => {
//         const value = Math.floor(Math.random() * 10);
//         rnd(value);
//       }}
//     />
//   );
// }