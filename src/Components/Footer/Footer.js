import React from 'react';
import style from '../Footer/Footer.module.scss';

export default class Form extends React.Component {
    render() {
        return (
            <div className={style.footer} id='footer_nav'>
                <div className={style.block}>
                    <div className={style.info}>
                        <div className={style.bl_one}>
                            <p>商标</p>
                            <p>地址</p>
                            <button>获取路线</button>
                        </div>
                        <div className={style.menu}>
                            <p>家</p>
                            <p>關於公司</p>
                            <p>商品</p>
                            <p>優點</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}