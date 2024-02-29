import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeContextProvider from "./theme/ThemeContextProvider";

render(
    <BrowserRouter>
        <ThemeContextProvider>
            <App/>
        </ThemeContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
)