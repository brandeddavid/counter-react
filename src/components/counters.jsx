import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value:0 },
            {id: 2, value:0 },
            {id: 3, value:0 },
            {id: 4, value:0 },
            {id: 5, value:0 }
        ]
     }
    render() { 
        return (
            <div>
                <button className="btn btn-success btn-sm" onClick={this.handleAdd}>New</button>
                <button className="btn btn-danger btn-sm m-2" onClick={this.handleReset} >Reset</button>
                {this.state.counters.map(
                    counter => <Counter 
                        key={counter.id} 
                        counter = {counter}
                        selected={true} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.handleIncrement} 
                        onDecrement={this.handleDecrement}
                    />
                )}
            </div>
        );
    }

    handleAdd = () => {
        const counters = [...this.state.counters]
        counters.push({id: 6, value:0})
        this.setState({counters})
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId)
        this.setState({counters})
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter =>
            {
                counter.value = 0;
                return counter
            }
        );
        this.setState({counters})
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        this.setState({counters})
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value--
        this.setState({counters})
    }
}
 
export default Counters;