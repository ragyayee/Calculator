import React, { Component } from 'react';
import './Button.css';
class Button extends Component {
    isOperator=val=>{
        return !isNaN(val)|| val==='.'|| val==='=';
    };
    state = {  }
    render() { 
        return ( 
            <div className={`button ${this.isOperator(this.props.children)?"":"operator"}`} 
            onClick={()=>this.props.handleClick(this.props.children)}
            >
                <button className="button" type="button" class="btn btn-light">{this.props.children}</button>
                 
            </div>

         );
    }
}
 
export default Button;