import logo from './logo.svg';
import './App.css';
import Gallery from './Feed';
import paint from './paint';
import More from './more';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Page() {
  return (
    <div>
      
      <More/>
    </div> 
  );
}

export default Page;
