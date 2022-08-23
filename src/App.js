import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';

function App() {
    const [showMyComponent, setShowMyComponent] = useState(true);

    return (
        <div className='App'>
            {showMyComponent && <MyComponent randomProp='whatever' />}
            {!showMyComponent && <p> My component has been deleted</p>}
            <br />
            <button
                onClick={() => {
                    setShowMyComponent(false);
                }}
            >
                Delete My Component
            </button>
        </div>
    );
}

export default App;
