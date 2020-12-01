import { Component } from 'react';

class Address extends Component{
    
    render(){

        const addr = {
            city : 'ariana',
            cp : 2080
        }

        return(

            <h2>I live in {addr.city}</h2>

        )
    }
}

export default Address;