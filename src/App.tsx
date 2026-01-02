import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "privacy-policy",
      element: <PrivacyPolicy />,
    },
  ]);

  return (
    <div className="font-poppins">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
