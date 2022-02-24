import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

interface ErrorProps {
  children: JSX.Element
}
interface FallbackProps {
  resetErrorBoundary: () => void
  error: {
    message: string
  }
}

function FallbackComponent({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} type="button">
        Try again
      </button>
    </div>
  )
}

function Error({ children }: ErrorProps) {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  )
}

export default Error
