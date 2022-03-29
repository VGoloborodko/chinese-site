import React from 'react';
// import {Routes, Route, Link} from 'react-router-dom';
// import Header from '../Header/Header';
// import ScrollableAnchor from 'react-scrollable-anchor';
import style from '../Nav/Nav.module.scss';

export default class Nav extends React.Component {
    render() {
        return (
            <>
                <nav className={style.nav}>
                    <a href='#header_nav'>家</a>
                    <a href='#about_nav'>關於公司</a>
                    <a href='#goods_nav'>商品</a>
                    <a href='#advantage_nav'>優點</a>
                    <a href='#form_nav'>聯繫人</a>
                </nav>
                {/* <Routes>
                    <Route path='/' element={<Header />} />
                </Routes> */}
            </>
        );
    }
}