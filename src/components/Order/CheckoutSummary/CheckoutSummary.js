import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classses from './CheckoutSummary.css';

const checkoutSummary = (props) => {

    return (
        <div className={classses.CheckoutSummary}>
            <h1>Order collected!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.CheckoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.CheckoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;