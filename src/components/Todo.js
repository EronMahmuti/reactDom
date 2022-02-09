import { useState,  } from 'react';
import Backdrop from './Backdrop'
import Modal from './Modal'

let nextId = 1;

const initialTodos = [];

function Todo(props){
    const [ modalOpen, setModalOpen ] = useState(false);
    const [name, setName] = useState('');
    const [todos, setTodos] = useState(
        initialTodos
    );
    function handleClick(){
        const insertAt = 0;
        const nextTodo = [
            ...todos.slice(0, insertAt),
            {id:nextId++, name: name},
            ...todos.slice(insertAt),
        ];
        setTodos(nextTodo);
        setName('');
    }

    function closeModal(){
        setModalOpen(false); 
    }
    return(
        <div>
            <div>
                <input 
                value={name}
                onChange={e => setName(e.target.value)} />
            <button className='btn' onClick={ handleClick } > Add </button>
                <ul>
                    {todos.map(todo => (<li key={todo.id} >
                        <div className='card'>
                            <h4> { props.text } </h4>
                            <h5> {todo.name} </h5>
                            <div className='actions'>
                                <button className='btn' onClick={ () => {
                                    setTodos(
                                        todos.filter(t => t.id !== todo.id)
                                        )
                                } } > Delete </button>
                                
                            </div>
                            {
                                modalOpen && <Modal onCancel={ closeModal } onConfirm={ closeModal }  /> 
                            }
                            {
                                modalOpen && <Backdrop onClick={closeModal} />
                            }
                            
                        </div>
                    </li>))}
                </ul>
            </div>
        
        </div>
    );
}

export default Todo;


