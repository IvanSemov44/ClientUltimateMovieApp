import React from "react";
import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        return this.state.error
            ? <h1>404</h1>
            : this.props.childern;
    }
}