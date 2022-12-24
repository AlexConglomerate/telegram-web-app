import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import MyTestComponent from "./components/myTestComponent";


function App() {
    // const {onToggleButton, tg} = useTelegram();
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <MyTestComponent/>
            {/*<Header/>*/}
            {/*<Routes>*/}
            {/*    <Route index element={<ProductList/>}/>*/}
            {/*    <Route path={'form'} element={<Form/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;
