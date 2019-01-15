import React, {useState} from "react";
import {graphql} from 'react-apollo';
import {addBookGQL} from '../../queries/mutations';
import {getBooksQuery} from '../../queries/queries';
import FormControl from '@material-ui/core/FormControl';
import Select from '../../components/selectComponent';
import Input from '../../components/inputComponent';
import Button from '@material-ui/core/Button';

const AddBookView = (props) => {
    const [authorId, setAuthor] = useState('');
    const [name, setBookName] = useState('');
    const [genre, setBookGenre] = useState('');

    return(
        <Form onSubmit={handleSubmit(props.addBookMutation, {authorId, name, genre})}>
            <Form.Input label="Name" onChange={handleChange(setBookName)} />
            <Form.Input label="Genre" onChange={handleChange(setBookGenre)} />
            <Form.Select
                name="Author"
                items={props.authors}
                onChange={handleChange(setAuthor)} />
        </Form>
    );
};

function Form(props) {
    return(
        <FormControl>
            { props.children }
            <Button variant="contained" color="primary" onClick={props.onSubmit}>Save</Button>
        </FormControl>
    );
}

Form.Input = Input;
Form.Select = Select;

function handleChange(setHook) {
    return (val) => {
        setHook(val);
    };
}

function handleSubmit(addBookMutation, variables) {
    return () => {
        addBookMutation({variables, refetchQueries: [{query: getBooksQuery}]});
    };
}

export default graphql(addBookGQL, {name: 'addBookMutation'})(AddBookView);
