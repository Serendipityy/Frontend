import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  // Thêm 1 vài điều kiện hợp lý, khi có user rồi thì 
  // không cần tới trang register
  const user = false;
  return (
    <Router>
      <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" 
            element={user ? <Home /> : <Register />} />
          <Route path="/login" 
            element={user ? <Home /> : <Login />} />
          <Route path="/write" 
            element={user ? <Write /> : <Register />} />
          <Route path="/settings" 
            element={user ? <Settings /> : <Register />} />
          {/* http://localhost:3000/post/123 */}
          <Route path="/post/:postId" element={<Single />} />

      </Routes>
    </Router>

  );
}

export default App;
