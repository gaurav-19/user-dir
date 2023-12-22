import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (<div className='bg-light'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}/>
        <Route path="/profile/:id" element={<ProfilePage />}/>
      </Routes>
    </BrowserRouter>
    </div>);
}

export default App;
