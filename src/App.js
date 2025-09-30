import Home from './core/modules/home/Home';
import Login from './core/authentication/login/Login';
import New from './core/modules/users/add-new-user/Add-New-User';
import Single from './core/modules/users/view-user/View-User';
import UserList from './core/modules/users/users-list/Users-List';
import Register from './core/authentication/register/register';
import ForgotPassword from './core/authentication/forgot-password/forgot';
import './core/shared/style/dark.scss';
import Error404 from './core/error/error404/Error404';
import Error500 from './core/error/error500/Error500';
import ChangePassword from './core/authentication/change-password/ChangePassword';
import Lockscreen from './core/authentication/lock-screen/Lockscreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { userInputs } from './formSource';
import { useContext } from 'react';
import { DarkModeContext } from './core/shared/context/darkModeContext';


function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard/admin-dashboard' element={<Home />} />

          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/lock-screen" element={<Lockscreen />} />

          {/* Nested routes under /users */}
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New inputs={userInputs} />} />
          </Route>
          <Route path="products">
            <Route index element={<UserList />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

          <Route path="*" element={<Error404 />} />
          <Route path="/server-error" element={<Error500 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 2:37:00