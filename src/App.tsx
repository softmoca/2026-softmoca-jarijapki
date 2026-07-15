import { useEffect } from "react";
import { SERVICE_NAME } from "./config/service";
import { AppRouter } from "./routes/AppRouter";

function App() {
  useEffect(() => {
    document.title = SERVICE_NAME;
  }, []);

  return <AppRouter />;
}

export default App;
