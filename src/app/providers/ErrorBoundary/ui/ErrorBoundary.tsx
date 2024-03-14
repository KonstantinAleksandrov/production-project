import React, { type ReactNode/* , type ErrorInfo  */ } from 'react'
import { PageError } from 'widgets/PageError'

interface IErrorBoundaryProps {
    children: ReactNode
}

interface IErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor (props: IErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (error: Error) {
        // Update state so the next render will show the fallback UI.
        console.log(error)
        return { hasError: true }
    }

    /* componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    } */

    render () {
        if (this.state.hasError) {
        // You can render any custom fallback UI
            return <PageError/>
        }

        return this.props.children
    }
}

export default ErrorBoundary
