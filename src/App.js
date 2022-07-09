import {useState} from "react";

function App() {
    const [name, setName] = useState('Andrew')
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
            <h2>Work in progress...</h2>
        </div>
    );
}

export default App;
