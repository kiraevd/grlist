import { Component } from 'react';
import check from "./img/check.png";
import swal from 'sweetalert';

export class GroceryList extends Component {
    state = {             // здесь характ которые будут меняться
        userInput: "",
        groceryList: []

    }
    render() {
        return (
            <div className="mainContainer">
            <form onSubmit={this.onFormSubmit}>
                <div className="containerInput">
                    <input
                    placeholder="something"
                    type="text"
                    onChange={(e) => this.onChangeEvent(e.target.value)}
                    value={this.state.userInput}
                    className="input"
                    />
                </div>
                <div className="containerButton">
                    <button onClick={() => this.addItem(this.state.userInput)} className="btn">Add</button>
                    <button onClick={() => this.deleteItem()} className="btn">Delete</button>
                </div>
                <ul className="containerList">
                    {this.state.groceryList.map((item) => (
                        <li onClick={this.crossedWord}>
                        {/* <img src={check} width="15px" alt="Check"/> */}
                        {item}</li>
                    ))}
                </ul>
            </form>
            </div>
        )
    }
    onChangeEvent(e) {
        this.setState({userInput: e})
    }
    addItem(input) {
        if(input === "") {
            swal("Please enter something");
        }
        else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ""})
        }
    }
    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }
    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray});
    }
    onFormSubmit(e){
        e.preventDefault();
    }
}