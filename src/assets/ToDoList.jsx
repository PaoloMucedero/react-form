import { useState } from 'react'

// imposto array iniziale da usare come valore iniziale della var di stato
const initialTasks = [`fare la spesa`, `pulire casa`, `fare il bucato`];




function ToDoList() {
    // setto var stato per gestire la lista (come renderizzare la lista)
    const [tasks, setTasks] = useState(initialTasks)

    // setto var stato per gestire valore input utente
    const [newTask, setNewTask] = useState("")
    // gestisco il submit
    const handleSubmit = () => {
        event.preventDefault();
        const updatedTask = [...tasks, newTask];
        setTasks(updatedTask)
        console.log(`Submit ricevuto! il nuovo compito è:` + newTask);
    }
        return (
            <div className='container mt-5 w-50'>
                <h2>tasks</h2>
                <ul className='list-group'>
                    {tasks.map((task, i) => (
                        <li className='list-group-item' key={i}>{task}</li>
                    ))}
                </ul>

                {/* FORM PER AGGIUNGERE TASK */}
                <form onSubmit={handleSubmit}>
                    <div className='input-group mb-3'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Cosa devi fare?"
                            value={newTask}
                            onChange={e => { setNewTask(e.target.value) }}
                        />
                        <button className="btn btn-outline-secondary">AGGIUNGI</button>
                    </div>
                </form>
            </div>
        )

    }

    export default ToDoList