// Module Imports
import React, { useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  // Switch
} from "react-router-dom";

// Context, Service, Config imports
import { GlobalProvider } from "./context/GlobalContext";
import { utilService } from "./services/util-service";
import { loaderService } from "./services/loader-service";

// Component imports
import FullPageLoader from "./components/loader/FullPageLoader";
import Layout from "./routes/Layout";
import ErrorPage from "./routes/ErrorPage";

// css, scss imports
import "./App.css";

// logo imports
import logo from "./logo.svg";

const router = createBrowserRouter([
  {
    path: "/equities",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "equity/:symbol",
        element: <Layout />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  const [isLoaderLoading, setIsLoaderLoading] = useState(false);

  useEffect(() => {
    const isLoadingServiceSubscription =
      loaderService.currentLoadingStatus.subscribe((value: any) => {
        setIsLoaderLoading(value);
      });
    return () => isLoadingServiceSubscription.unsubscribe();
  }, []);

  return (
    <GlobalProvider>
      {isLoaderLoading && <FullPageLoader />}
      {/* <RootNavigation /> */}
      <RouterProvider router={router} />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </GlobalProvider>
  );
}

// function RootNavigation() {
//   return (
//     <Switch>
//       <Route
//         path="/"
//         render={(props: any) => {
//           return <Layout pageContext={{}} {...props} />;
//         }}
//       />
//     </Switch>
//   );
// }

export default App;
