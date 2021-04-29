import React, { Component } from 'react';

import Button from './Components/Button'
import ImgCookie from './Components/ImgCookie'
import './App.css'



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fraseSorteada: ''
        };
        this.frases = [
            'Frase 1',
            'Frase 2',
            'Frase 3',
            'Frase 4',
            'Frase 5',
            'Frase 6'
        ];

        this.quebrar = this.quebrar.bind(this);
    }

    quebrar() {
        let state = this.state;
        let randomNumber = Math.floor(Math.random() * this.frases.length);
        state.fraseSorteada ='"' + this.frases[randomNumber] + '"';
        this.setState(state)
    }

    render() {

        return (
            <div className="container">
                <h1>Biscoito da Sorte</h1>
                <ImgCookie />
                <Button nome="Quebrar Biscoito" acaoBtn={this.quebrar} />
                <h3 className="frase">{this.state.fraseSorteada}</h3>
            </div>
        );
    }
}
export default App;
