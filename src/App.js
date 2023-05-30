import List from "./components/List/List";
import ItemProvider from "./components/ItemProvider/ItemProvider";
import { ItemContext } from "./components/ItemContext/ItemContext";
import DateInput from "./components/DateInput/DateInput";
import Timer from "./components/Timer/Timer";
import './App.css';

const App = () => (
    <div className="App">
        <ItemProvider>
            <ItemContext.Consumer>
                {({items}) => <List items={items}/>}
            </ItemContext.Consumer>
        </ItemProvider>
        <DateInput />
        <Timer offTime={5}/>
    </div>
);

export default App;
