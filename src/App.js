import './App.css';
import shopping from './img/shopping.jpg';
import man from './img/man.jpg';
import { GroceryList } from './Grocerylist';

function App() {
    return (
        <div className="app">
            <img src={shopping} width="250px" alt="Shopping"/>
            <h1>Grocery list</h1>
            <GroceryList/>
            <img src={man} width="250px" alt="Man"/>
        </div>
    );
}

export default App;
