import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        const containerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        };
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <div style={containerStyle}>
                    <img
                        style={{ width: '70%', height: '100%' }}
                        src={`${process.env.PUBLIC_URL}/assests/images/error-img.jpg`}
                        alt="404"
                    />
                    <h2> Something went wrong</h2>
                </div>
            );
        }

        return children;
    }
}
