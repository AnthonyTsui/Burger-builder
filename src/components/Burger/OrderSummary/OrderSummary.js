import React, {Component} from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //Only a class/component extension for testing purposes

    componentDidUpdate(){
        console.log(`[OrderSummary] will update`);
    }


    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span 
                        style={{textTransform: 'capitalize'}}>{key}
                    </span>: 
                    {this.props.ingredients[key]}
                </li>
            );
        });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: $this.{this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            <Button 
                buttonType="Danger" 
                clicked={this.props.purchaseCanceled} >Cancel</Button>
            <Button 
                buttonType="Success" 
                clicked={this.props.purchaseContinue}>Continue</Button>
        </Aux>
    );
    }
};

export default OrderSummary