import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import Router from "./router/Router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <Toaster richColors theme="light" position="bottom-right" />
    </BrowserRouter>
  );
};

export default App;
