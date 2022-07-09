import {useState} from "react";
import sablier from './assets/hourglass.png'

function App() {
    const [name, setName] = useState('Andrew')
    const [rotation, setRotation] = useState(0)
    const names = ['Ludovic', 'Noureddine', 'Andrew']

    const pick_up_name = () => {
        setInterval(() => {
            let index = Math.round(Math.random()*(names.length-1))
            setName(names[index])
        }, 5000)
    }

    pick_up_name()

    return (
        <div>
            <h1>{name}</h1>
            <span>Work in progress </span>
            <img className="App-logo" src={sablier} alt='coucou'/>
        </div>
    );
}

export default App;
