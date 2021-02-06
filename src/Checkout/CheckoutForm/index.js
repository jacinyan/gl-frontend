import React, { Component } from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'

class CheckoutForm extends Component {

    state = {
        complete: false
    }

    handleSubmit = async() => {
      let {token} = await this.props.stripe.createToken({name: 'Ji Yan'})
    //   console.log(result);
      let response = await fetch('http://localhost:3000/api/charges', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json;charset=utf-8;',
          'Authorization': "Bearer " + localStorage.getItem("jwt")
        }),
        body: JSON.stringify({
            token: token.id
        })
      })

      if (response.ok){
        this.setState({
            complete: true
        })
    }
    }

    render() {
        if (this.state.complete) return <h1>Purchase Complete!</h1>

        return (
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <button onClick={this.handleSubmit}>Purchase</button>
            </div>
        )
    }
}

export default injectStripe(CheckoutForm)