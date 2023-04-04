import PropTypes from "prop-types";

const TodoFilter = ({filter, getFilter}) =>{
    return (
        <div>
            <p>Filter</p>
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
                value={filter}
                onChange={getFilter}
            />
        </div>
    );
}

TodoFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    getFilter: PropTypes.func.isRequired,
}

export default TodoFilter;