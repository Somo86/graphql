import {gql} from 'apollo-boost'

export const addBookGQL = gql`
      mutation($name: String!, $genre: String!, $authorId: ID!) {
          addBook(name: $name, genre: $genre, authorId: $authorId) 
          {
              name
              id
          }
      }`;
