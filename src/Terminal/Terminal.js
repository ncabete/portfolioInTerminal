import React from 'react';
import TopBar from '../TopBar/TopBar.js'
import TerminalOutput from '../TerminalOutput/TerminalOutput.js'
import './Terminal.css'


class TerminalWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top :  20,
            left : 20,
            unit : "%"

        }
    }


    updatePosition = (top, left) => {
        this.setState({
            top : top,
            left : left
        }) 
    }


    changePosition = () => {
        let newTop = this.state.top + 2
        let newLeft = this.state.left + 2
        this.updatePosition(newTop, newLeft)
    }


    render() {
        return (
            <div 
                className="terminal_dialog"
                style = {{
                    "top"  : String(this.state.top)  + this.state.unit,
                    "left" : String(this.state.left) + this.state.unit
                }}
            >
                <div onClick={this.changePosition}>
                    <TopBar title="Terminal"/>
                </div>
                <div className="terminalScreen">
                    <TerminalOutput/>
                </div>
            </div>
        )
    }
}


export default TerminalWindow;
