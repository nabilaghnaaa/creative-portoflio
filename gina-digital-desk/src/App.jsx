import Home from "./pages/Home";
import { DeskProvider } from "./context/DeskContext";

function App() {
    return (
        <DeskProvider>
            <Home />
        </DeskProvider>
    );
}

export default App;