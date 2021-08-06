import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Home from './components/Home/Home';
import GlobalProvider from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <ErrorBoundary>
                <Home />
            </ErrorBoundary>
        </GlobalProvider>
    );
}

export default App;
