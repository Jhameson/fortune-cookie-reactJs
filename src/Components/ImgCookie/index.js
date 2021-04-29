import React, { Component } from 'react';
import img from '../../Assets/biscoito.png';

import style from '../ImgCookie/img.module.css'

class ImgCookie extends Component{
    render(){
        return(
            <div>
               <img
                    src={img}
                    alt="biscoito" 
                    className={style.imagem}/>
            </div>
        );
    }
}
export default ImgCookie;