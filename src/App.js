import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { DataExamplesLogin } from "./components/DataExamplesLogin";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Login />
      <DataExamplesLogin />
    </div>
  );
};
