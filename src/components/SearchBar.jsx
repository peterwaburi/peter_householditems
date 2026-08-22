import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({
    value = "",
    onChange,
    onSearch,
    placeholder = "Search..."
}) => {

    const [query, setQuery] = useState(value);

    const handleChange = (event) => {

        const newValue =
            event.target.value;

        setQuery(newValue);

        if (onChange) {
            onChange(newValue);
        }
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        if (onSearch) {
            onSearch(query.trim());
        }
    };

    const clearSearch = () => {

        setQuery("");

        if (onChange) {
            onChange("");
        }

        if (onSearch) {
            onSearch("");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>

            <InputGroup>

                <Form.Control
                    type="search"
                    value={query}
                    placeholder={placeholder}
                    onChange={handleChange}
                />

                {query && (

                    <Button
                        variant="outline-secondary"
                        type="button"
                        onClick={clearSearch}
                    >
                        <FaTimes />
                    </Button>

                )}

                <Button
                    variant="primary"
                    type="submit"
                >
                    <FaSearch />
                </Button>

            </InputGroup>

        </Form>
    );
};

export default SearchBar;