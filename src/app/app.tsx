import {Display} from "../common/components/display/Display";
import s from "./app.module.scss"

export function App() {
    return (
        <div className={s.app}>
            <Display/>
        </div>
    );
}

export default App;
