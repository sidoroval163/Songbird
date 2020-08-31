import React from 'react';


import './App.css';
import Logo from './components/logo';
import Congratulation from './components/congratulation';
import Menu from './components/menu/menu';
import QuestionEngine from './components/questionEngine/questionEngine';
import NextButton from './components/nextButton';

const App = () => {
  return (
    <div className="container">
      <Logo />
      <Menu />
      <Congratulation />
      <QuestionEngine />
      <NextButton />
    </div>)
}

export default App;
