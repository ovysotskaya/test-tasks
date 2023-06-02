import List from "./components/First/List/List";
import ItemProvider from "./components/First/ItemProvider/ItemProvider";
import { ItemContext } from "./components/First/ItemContext/ItemContext";
import DateInput from "./components/Second/DateInput/DateInput";
import Timer from "./components/Third/Timer/Timer";
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
