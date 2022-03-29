import React from 'react';
import style from '../Provide/Provide.module.scss';
import Divprovide from '../Divprovide/Divprovide.js';
import Like from '../Provide/images/Like.svg';

export default class Provide extends React.Component {
    render() {
        return (
            <div className={style.provide} id='advantage_nav'>
                <div className={style.block}>
                    <p>我們提供</p>
                    <p>我們的服務包括協助<br/> 在購買的所有階段</p>
                    <div className={style.list_div}>
                        <Divprovide
                            className={style.hui} 
                            style={{background: `url(${Like}) no-repeat`}}
                            name='与最好的制造商合作'
                            text='我们只与久经考验的制造商和供应商合作'
                        />
                        <Divprovide 
                            style={{background: `url(${Like}) no-repeat`}}
                            name='品种丰富'
                            text='我们准备以实惠的价格为各种建筑项目提供大量的装饰和建筑材料'
                        />
                        <Divprovide 
                            style={{background: `url(${Like}) no-repeat`}}
                            name='优质的服务'
                            text='在您方便的时候随时接受订单，订单将尽快执行，货物有保障'
                        />
                        <Divprovide 
                            style={{background: `url(${Like}) no-repeat`}}
                            name='木材隔板'
                            text='由合格的经理为您的项目进行专业的材料计算，他们将根据您的项目的具体情况选择最佳选项'
                        />
                    </div>
                </div>
            </div>
        );
    }
}