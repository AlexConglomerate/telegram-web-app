import './App.css';
import MyTestComponent from "./components/myTestComponent";
import ColorsUsing from "./components/colorsUsing";
import {useTelegram} from "./hooks/useTelegram";


function App() {
    // const {onToggleButton, tg} = useTelegramFunc();
    const {tg} = useTelegram();

    // useEffect(() => {
    //     tg.ready();
    // }, [])

    return (
        <div className="flex flex-col m-4">
            <MyTestComponent/>
            <ColorsUsing/>
            {/*<Header/>*/}
            {/*<Routes>*/}
            {/*    <Route index element={<ProductList/>}/>*/}
            {/*    <Route path={'form'} element={<Form/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;
