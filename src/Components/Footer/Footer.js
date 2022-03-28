import React from 'react';
import style from '../Footer/Footer.module.scss';

export default class Form extends React.Component {
    render() {
        return (
            <div className={style.footer}>
                <div className={style.block}>
                    <div className={style.info}>
                        <div className={style.bl_one}>
                            <p>新疆农垦国际国运代理有限公司</p>
                            <p>地址：新疆乌鲁木齐市水磨沟区昆仑东街469号绿城·玉园13号商住楼3单元702室</p>
                            <button>获取路线</button>
                        </div>
                        <div className={style.menu}>
                            <p>Menu</p>
                            <p>Contact</p>
                            <p>Career</p>
                            <p>Business</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}