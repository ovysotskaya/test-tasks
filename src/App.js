import List from "./components/List/List";
import ItemProvider from "./components/ItemProvider/ItemProvider";
import { ItemContext } from "./components/ItemContext/ItemContext";
import DateInput from "./components/DateInput/DateInput";
import './App.css';

const App = () => (
    <div className="App">
        <ItemProvider>
            <ItemContext.Consumer>
                {({items}) => <List items={items}/>}
            </ItemContext.Consumer>
        </ItemProvider>
        <DateInput />
    </div>
);

export default App;
