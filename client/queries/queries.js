import {gql} from 'apollo-boost'

export const getBooksQuery = gql`
    {
        books {
            name
            id
        }
        authors {
            name
            id
        }
    }
`;

export const getBookDetailQuery = gql`
query($id: ID){
    book(id: $id){
        name
        genre
        author {
            name
            age
            books {
                name
                genre
            }
        }
    }
}
`;
