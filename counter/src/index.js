import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {
    createStore
} from 'redux';
import {Provider, connect} from 'react-redux';

// import App from './App';

const increaseAction = {
    type: 'increase'
}

const reducer = (state = {count : 1}, action) => {
    switch (action.type) {
        case 'increase':
            return {count: state.count + 1}
        default:
            return state
    }
}

const store = createStore(reducer);

function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCreaseClick: () => dispatch(increaseAction)
    }
}


/* class App extends Component {
    render() {
        return (<div><Counter value={1231} /></div>)
    }
} */
class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onCreaseClick: PropTypes.func.isRequired
    }
    render() {
        const {value, onCreaseClick} = this.props;
        console.log(this.props);
        return (
            <div>
                counter: {value}
                <div>{console.log('props', this.props)}</div>
                <div><button onClick={onCreaseClick}>increase</button></div>
            </div>
        )
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


