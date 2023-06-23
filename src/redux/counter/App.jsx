import Counter from "./pages/Counter";
// Provider cua react-redux cho phep cac component lay dc state nam trong store
import { Provider } from 'react-redux';
import store from "./store";
import CounterApp from "./pages/Counter";


export default function App() {
    return (
        <Provider store={store}>
            <CounterApp />
        </Provider>
    )
}