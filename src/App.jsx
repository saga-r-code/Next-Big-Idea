import { useState } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import HomeScreen from "./Screens/Home/HomeScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNewScreen from "./Screens/NewIdea/AddNewScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/new-idea",
    element: <AddNewScreen />,
  },
]);


function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        <div className="h-auto xl:w-[80%] mx-auto py-10">
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

