import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false };
    static getDrivedStateFromError () {
        return { hasError: true };
    }
    componentDidUpdate() {
        if(this.state.hasError) {
            setTimeout(() => this.setState({redirect: true}), 5000);
        }
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    render() {
        if(this.state.redirect) {
            return <Redirect to="/" />;
        }
        if(this.state.hasError) {
            return (
                <h1>There was an error with this listing. <Link to="/">Click here</Link>
                {" "}
                to go back to the homepage or wait five seconds.</h1>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;