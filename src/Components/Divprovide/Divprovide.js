import React from 'react';
import style from '../Divprovide/Divprovide.module.scss';

export default class Divprovide extends React.Component {
    render() {
        return (
            <div className={style.divprovide}>
                <div className={style.icon} style={this.props.style}></div>
                <p className={style.header}>{this.props.name}</p>
                <p className={style.main}>{this.props.text}</p>
            </div>
        );
    }
}