// import PropTypes from 'prop-types';
// export default function Counter({ count, size, color }) {
//     const modifedCount = count + 1;
//     const styles = {
//         fontSize: `${size}px`,
//     };
//     const propColor = color === 'red' ? 'tomato' : 'green';
//     return (
//         <div className={`counter ${propColor}`} style={styles}>
//             {modifedCount}
//         </div>
//     );
// };

// Counter.propTypes = {
//     count: PropTypes.number,
//     size: PropTypes.number,
//     color: PropTypes.string,
// };


import { Component } from 'react'; 
export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: ''
        };
    }

    setCountToOne = () => {
        this.setState({ count: 1 })
    }

    changeName = () => {
        this.setState({ name: 'Alex' });
    };

    // componentDidMount() {
    //     this.setCountToOne();
    // }

    render() {
        const { count } = this.props;
        return (
            <div className="wrapper">
                <h3>Class Counter</h3>
                <h5>State count</h5>
                <div className='counter'>{this.state.count}</div>
                <button type="button" onClick={this.setCountToOne}>Plus one</button>
                <h5>Prop count</h5>
                <div className="counter">{count}</div>

                <h2>My name is {this.state.name || 'Unknown'}</h2>
                <button type="button" onClick={this.changeName}>Change name</button>
            </div>
        );
    }
};


// const Counter = ({ count }) => (
//     <div className="wrapper">
//         <h3>Functional Counter</h3>
//         <div className="counter">{count}</div>
//     </div>
// );

// export default Counter;
