import { Component } from "react";

class AppErrorBoundary extends Component {

    constructor(props) {

        super(props);

        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error) {

        return {
            hasError: true,
            error
        };
    }

    componentDidCatch(error, errorInfo) {

        console.error(
            "BlueWave application error:",
            error,
            errorInfo
        );
    }

    handleReload = () => {

        window.location.reload();

    };

    render() {

        if (!this.state.hasError) {

            return this.props.children;

        }

        return (

            <div
                className="container py-5"
                style={{
                    minHeight: "60vh"
                }}
            >

                <div className="card shadow-sm border-0">

                    <div className="card-body text-center p-5">

                        <h2 className="text-danger mb-3">
                            Something went wrong
                        </h2>

                        <p className="text-muted mb-4">
                            BlueWave encountered an unexpected
                            application error.
                        </p>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.handleReload}
                        >
                            Reload Application
                        </button>

                    </div>

                </div>

            </div>
        );
    }
}

export default AppErrorBoundary;