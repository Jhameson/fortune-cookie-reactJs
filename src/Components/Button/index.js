import React, { Component } from 'react';

import style from '../Button/style.module.css'

class Button extends Component{
    render(){
        return(
            <div>
                <button className={style.botao} onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}
export default Button;