import { useState } from "react";

import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { DataExamplesLogin } from "./components/DataExamplesLogin";
import { UserPage } from "./components/UserPage";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = () => setIsLoggedIn(true);
  console.log(isLoggedIn);

  const onError = () => setIsLoggedIn(false);

  return (
    <div className="app">
      {!isLoggedIn ? (
        <div>
          <Header />
          <Login onSuccess={onSuccess} onError={onError} />
          <DataExamplesLogin />
        </div>
      ) : (
        <UserPage />
      )}
    </div>
  );
};
