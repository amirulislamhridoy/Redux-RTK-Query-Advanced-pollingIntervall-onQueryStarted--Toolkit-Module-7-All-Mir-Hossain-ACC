import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { isLoged } from "./features/userSlice";
import routes from "./routes/routes";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(isLoged())
  }, [])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
