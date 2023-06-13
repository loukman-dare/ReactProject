import './App.css';
import About from './Component/Pages/About/About';
import Home from './Component/Pages/Home/Home';
import {Routes,Route, useLocation} from "react-router-dom"
import OurDepartments from './Component/Pages/Our_Departments/OurDepartments';
import ContactUs from './Component/Pages/Contactus/CountactUs';
import Login from './Component/Pages/Login/Login';
import SignUp from './Component/Pages/SignUp/SignUp';
import Loukman from './Component/Pages/Profiles/Loukman';
import Sofia from './Component/Pages/Profiles/Sofia';
import Ahmed from './Component/Pages/Profiles/Ahmed';
import Plans from './Component/Pages/Plans/Plans';
import  {AuthProvider} from './Component/Authentication/Auth';
import RequiermentAuth from './Component/Authentication/Requierment';
import BudyBuilding from './Component/Pages/Our_Departments/BudyBuilding';
import Boxing from './Component/Pages/Our_Departments/Boxing';
import Fitness from './Component/Pages/Our_Departments/Fitness';
import Football from './Component/Pages/Our_Departments/Football';
import Roboto from './Component/Pages/Our_Departments/Roboto';
import Header from './Component/Pages/Home/components/Header/Header';
import Landing from './Component/Pages/Home/components/Landing/landing';
import OurHero from './Component/Pages/Home/components/OurHero/OurHero';
import OurCoahes from './Component/Pages/Home/components/OurCoaches/OurCoahes';
import Footer from './Component/Pages/Home/components/Footer/Footer';

function App() {
  const location = useLocation()
  return (
    <AuthProvider >
        <div className="App">
          <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About />}/>
            <Route path='departments' element={<OurDepartments />} />
            <Route path='departments/body-buliding' element={<RequiermentAuth><BudyBuilding /></RequiermentAuth>} />
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/loukman' element={<Loukman/>} />
            <Route path='/sofia' element={<Sofia />} />
            <Route path='/n' element={<Roboto/>} />
            <Route path='/nn' element={<Header />} />
            <Route path='/ahmed' element={<Ahmed />} />
            <Route path='departments/boxing' element={<RequiermentAuth><Boxing/></RequiermentAuth>} />
            <Route path='departments/fitness' element={<RequiermentAuth><Fitness/></RequiermentAuth>} />
            <Route path='departments/football' element={<RequiermentAuth><Football/></RequiermentAuth>} />
            <Route path='/plan' element={<RequiermentAuth><Plans/></RequiermentAuth>}/>
            <Route path='/l' element={<OurDepartments/>} />

          </Routes>
        </div>
    </AuthProvider>
  )    
}

export default App;
