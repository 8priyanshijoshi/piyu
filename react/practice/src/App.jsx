import './App.css';
import Que6 from './practical_ques/Que6';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './practical_ques/Ques7/login';
import { useState } from 'react';
import Que2 from './practical_ques/Que2';
import Que3 from './practical_ques/Que3';
import Que4 from './practical_ques/Que4';
import Que5 from './practical_ques/Que5';
import Props_State from './Props_State';
import TodoApp from './TodoApp';
import CharacterCount from './CharacterCount';
import API from './API';
import Filter from './Filter';
import DarkLightThemeToggle from './DarkLightThemeToggle';
import Todoapp2 from './Todoapp2';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Home = () => <h2>Welcome to Home Page</h2>;
  const Features = () => <h2>Welcome to Features Page</h2>;
  const About = () => <h2>Welcome to About Page</h2>;
  const Contact = () => <h2>Welcome to Contact Page</h2>;

  return (
    

    <BrowserRouter>
  
    <Que2/>
    <Que3/>
    <Que4/>
    <Que5/>
    <Props_State />
    <TodoApp />
    <CharacterCount/>
    <API/>
    <Filter/>
    <DarkLightThemeToggle/>
    <Todoapp2/>
     {isLoggedIn && <Que6 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  
   
  );
}

export default App;
