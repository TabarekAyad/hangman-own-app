import React, { Component } from 'react'
import axios from 'axios';
import step1 from './images/step1.png';
import step2 from './images/step2.png';
import step3 from './images/step3.png';
import step4 from './images/step4.png';
import step5 from './images/step5.png';
import step6 from './images/step6.png';
import step7 from './images/step7.png';

    

class Header extends Component {
    static defaultProps = {
        maxWrong: 7,
        images: [step1,step2,step3,step4,step5,step6,step7]
    }

    constructor(props) {
        super(props)
    
        this.state = {
            words : [],
            mistake: 0
        }
    }
    

    componentDidMount() {
        axios.get('https://random-word-api.herokuapp.com/word?number=1').then(res => {
            const words = res.data;
            this.setState({words});
        })
    }

    guessedRight() {
        return this.state.words.split("").map(letter => (this.state.guessed.has(letter) ? letter : " __ ") );
    }

    render() {

        const gameOver = this.state.mistake >= this.props.maxWrong;

        return (
            <div>
                <div className = "text-center">
                    <h1 >Hangman</h1>
                    <p>Save this poor human by guessing the right letters.Choose them to fill the blanks</p>
                </div>
                
                <div className = "float-right"> Wrong guesses: {this.state.mistake} of {this.props.maxWrong}</div>
                <ul>
                    {this.state.words.map(word => <p> {word} </p> )}
                </ul>  
                <img src = {this.props.images[this.state.mistake]} alt ="hangman"/>
                <div className = "text-center">
                    <p>
                        {! gameOver ? this.guessedRight() :this.state.answer}
                    </p>
                </div>
            </div>
            
        )
    }
}

export default Header;