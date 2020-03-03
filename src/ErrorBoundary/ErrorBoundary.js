import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state= {
        hasError: false,
        errorMessage: ''
    } 

    componenteDidCatch = (error, info)=> {

        this.SetState({hasError: true, errorMessage: error});
    }

    render() {

        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }     
    }
}

export default ErrorBoundary;