import React from 'react';
import style from '../Header/Header.module.scss';
import Rectangle from '../Header/images/Rectangle.png';
import House from '../Header/images/House.png';
// import Logo from '../Header/images/Logo.png';
import Nav from '../Nav/Nav.js';

export default class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <div className={style.cover} style={{ background: `url(${Rectangle})`}}>{/*Blue background*/}
                    <div className={style.info_text}>
                        <div className={style.logo}>{/*Logo*/}新疆农垦国际国运代理有限公司</div>
                        <p className={style.bold_text}>我們賣建築材料<br/> 為您的夢想家園或企業</p>
                        <p className={style.lite_text}>我們的團隊將根據您的意願幫助您選擇建築材料。<br/> 對於任何設計和概念。</p>
                        <button>聯繫我們</button>
                    </div>
                    <div className={style.house} style={{ background: `url(${House})`}}>{/*Picture of a house*/}
                        <Nav />
                    </div>
                </div>
            </header>
        );
    }
}