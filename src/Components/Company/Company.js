import React from 'react';
import style from '../Company/Company.module.scss';
import Img from '../Company/images/Img.png';

export default class Company extends React.Component {
    render() {
        return (
            <div className={style.company} id='about_nav'>
                <div className={style.common_block}>
                    <div className={style.image} style={{background: `url(${Img})`}}></div>
                    <div className={style.company_info}>
                        <p>我們公司</p>
                        <p>我們是一個由程序員、材料科學家、文員、採購員和後勤人員組成的團隊。每天，我們都會採訪供應商，了解數千種產品的價格和供貨情況。 這使我們能夠快速找到合適的材料並按時交付。<br/> <br/>我們已經處理了</p>
                        <div className={style.turnover}>
                            <p>500 家供應商</p>
                            <p>每月 2,000 份材料交付</p>
                        </div>
                        <button>查看更多</button>
                    </div>
                </div>
            </div>
        );
    }
}