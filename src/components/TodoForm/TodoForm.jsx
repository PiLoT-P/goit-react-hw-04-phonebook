import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import PropTypes from "prop-types";

import css from "./TodoForm.module.css";

const TodoForm = ({ contacts, addTodo }) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const hendleChangeName = (event) => {
        const { value } = event.target;
        setName(value);
    }
    const hendleChangeNumber = (event) => {
        const { value } = event.target;
        setNumber(value);
    }

    const hendleSubmit = (event) => {
        event.preventDefault();

        const todo = {id: uuidv4(), name, number };
        let k = 0;

        contacts.map((el) => {
            if (el.name === name) {
                alert(name+' is already in contacts');
                k++;
            }
            return k;
        })
        if (k > 0) {
            return;
        } else {
            addTodo(todo);   
        }
    }

    return (
        <>
            <form className={css.form} onSubmit={hendleSubmit}>
                <label >
                    <p className={css.text}>Name</p>
                    <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={hendleChangeName}
                    />
                </label>
                <label>
                    <p>Number</p>
                    <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={hendleChangeNumber}
                    />
                </label>
                <button className={css.btn} type="submit">
                    Add contacts
                </button>
            </form>
        </>
    );
}

TodoForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    addTodo: PropTypes.func.isRequired,
}

export default TodoForm;