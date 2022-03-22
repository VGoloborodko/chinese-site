import React from 'react';
import style from '../Nav/Nav.module.scss';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className={style.nav}>
                <div>家</div>
                <div>關於公司</div>
                <div>商品</div>
                <div>優點</div>
                <div>聯繫人</div>
            </nav>
        );
    }
}