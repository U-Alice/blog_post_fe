import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import ViewBook from "./pages/viewBooks";
import Blank from "./pages/blank";
import { AuthProvider } from "./context/authContext";
import NotFound from "./utils/notfound";
import SignUp from "./pages/signup";

function App() {
  return (
    <MantineProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/viewBooks" element={<ViewBook />}></Route>
            <Route path="/blank" element={<Blank />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </MantineProvider>
  );
}

export default App;
