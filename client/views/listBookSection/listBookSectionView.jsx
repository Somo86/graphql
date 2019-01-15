import React, {useState} from 'react';
import ListComponent from '../../components/listComponent';
import AddBookComponent from './addBookSectionView';
import DetailSection from '../detailBookSection/detailBookSectionView';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../../queries/queries';

const ListBook = (props) => {
    const [bookId, setBookId] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div>
            <DetailSection bookId={bookId} open={open} onClose={onClose(setOpen)} />
            <AddBookComponent authors={props.data.authors}/>
            <ListComponent list={props.data.books} onClick={handleListClick(setBookId, setOpen)}/>
        </div>
    );
};

function handleListClick(setBookId, setOpen){
    return bookId => {
        setBookId(bookId);
        setOpen(true);
    }
}

function onClose(setOpen) {
    return() => {
        setOpen(false);
    };
}

export default graphql(getBooksQuery)(ListBook);
