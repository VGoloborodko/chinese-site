import React from 'react';
import style from '../Form/Form.module.scss';
import Rectangle from '../Form/Rectangle.png';

export default class Form extends React.Component {
    render() {
        return (
            <div className={style.form}>
                <div className={style.form_block}>
                    <div className={style.image} style={{background: `url(${Rectangle})`}}></div>
                    <div className={style.form_value}>
                        <p>让我们谈谈你需要的任何东西</p>
                        <div className={style.block_form}>
                            <form>
                                <div>
                                    <input placeholder='您的姓名/公司名称'/>
                                    <input placeholder='电话/电子邮件'/>
                                </div>
                                <textarea type='text' className={style.input_message} placeholder='信息'/>
                                <button>发送</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}