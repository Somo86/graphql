import * as React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import ListSection from './listBookSection/listBookSectionView';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

const App = () => {
    return(
        <div>
            <ApolloProvider client={client}>
                <div className="main">
                   <ListSection />
                </div>
            </ApolloProvider>
        </div>
    );
};

export default App;
