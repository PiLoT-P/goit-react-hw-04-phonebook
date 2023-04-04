import { useEffect, useState, useRef } from "react";
import { contacts as contactsList} from "components/data/data"; 

import TodoForm from "components/TodoForm/TodoForm";
import TodoList from "components/TodoList/TodoList";
import TodoFilter from "components/TodoFilter/TodoFilter";

import css from "./TodoPage.module.css";

const TodoPage =() => {
    const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem("contacts")) || contactsList);
    const [filter, setFilter] = useState('');

    const addTodo = (todo) => {
        setContacts((prev) => [...prev, todo]);
    };

    const filterTodoList = () => {
        if (filter === '') return contacts; 
        return contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()));
    };

    const getFilter = (event) => {
        const { value } = event.target;
        setFilter(value);
    };

    const removeTodo = (id) => {
        setContacts((prev)=>prev.filter((el) => el.id !== id))
    };

    const filterTodo = filterTodoList();

    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts])

    return (
        <div className={css.main}>
            <h1>Phonebook</h1>
            <TodoForm contacts={contacts} addTodo={addTodo} />
            <h2>Contacts</h2>
            <TodoFilter filter={filter} getFilter={getFilter} />
            <TodoList
                contacts={filterTodo}
                removeTodo={removeTodo}
            />
        </div>
    );
}

export default TodoPage;