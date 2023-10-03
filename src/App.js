// react-router-dom
import { Routes, Route } from 'react-router-dom';
import DemoReactRouter from './Components/DemoReactRouter/DemoReactRouter';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import HomePage from './Components/DemoReactRouter/HomePage';
import DetailItem from './Components/DemoReactRouter/DetailItem';
import Page404 from './Components/404/Page404';
import Login from './Components/Login/Login';
import About from './Components/DemoReactRouter/About';
import DemoFormik from './Components/DemoFormik/DemoFormik';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserTemplate />}>
        <Route index element={<HomePage />}></Route>
        <Route path=":id" element={<DetailItem />}></Route>
        <Route path="about" element={<About />} />
        <Route path="form" element={<DemoFormik />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
