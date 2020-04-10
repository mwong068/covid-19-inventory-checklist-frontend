import React from 'react';
import Signup from './Signup';
import Login from './Login';
import { Route } from 'react-router-dom';

class Main extends React.Component {

    componentDidMount() {
        // fetch('http://localhost:3000/helpful_users', {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json'
        // },
        // body: JSON.stringify({
        //     helpful_user: {
        //     username: "sylviawoods233444",
        //     name: "Sylvia Woods",
        //     password: "whatscooking",
        //     email: "sylvia@sylviacooks.com",
        //     location: "New York City"
        //     }
        // })
        // })
        // .then(r => r.json())
        // .then(console.log)
        const token = localStorage.token;
        fetch('http://localhost:3000/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        })
        .then(r => r.json())
        .then(console.log)

    }

    render() {
        return (
            <div>
                <h1>hello, welcome to the COVID-19 inventory checklist</h1>
                <Route exact path="/login" render={(props) => <Login {...props} />} />
                <Route exact path="/signup" render={(props) => <Signup {...props} />} />
            </div>

        )
    }
}

export default Main