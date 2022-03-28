import React from 'react';
import style from '../App/App.module.scss';
import Header from '../Header/Header.js';
import Company from '../Company/Company.js';
import Provide from '../Provide/Provide.js';
import Goods from '../Goods/Goods.js';
import Form from '../Form/Form.js';
import Footer from '../Footer/Footer.js';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <Header />
        <Company />
        <Provide />
        <Goods />
        <Form />
        <Footer />
      </div>
    );
  }
}