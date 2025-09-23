import Home from './modules/home/Home';
import Login from './modules/login/Login';
import New from './modules/new/New';
import Single from './modules/single/Single';
import List from './modules/list/List';

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

function UsersLayout() {
  return <Outlet />; // Placeholder for nested routes under /users
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Nested routes under /users */}
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
