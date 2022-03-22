import React from 'react';
import style from '../App/App.module.scss';
import Header from '../Header/Header.js';
import Company from '../Company/Company.js';
import Provide from '../Provide/Provide.js';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <Header />
        <Company />
        <Provide />
      </div>
    );
  }
}