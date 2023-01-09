import * as React from 'react';
import { PostList, PostShow, PostCreate, PostEdit } from './posts';
import { UserList, UserShow, UserCreate, UserEdit } from './users';
import { Admin, Resource, ListGuesser } from 'react-admin';
import {
    FirebaseDataProvider,
    FirebaseAuthProvider,
} from 'react-admin-firebase';

import firebase from "firebase/compat/app";
import ArticleCreate from './ArticleCreate';
import ArticleList from './ArticleList';

const firebaseConfig = {
    apiKey: "AIzaSyD6RVbA7AoJK-nfggRm2Nsp4Joi7MO2vaM",
    authDomain: "articles-9f370.firebaseapp.com",
    databaseURL: "https://articles-9f370-default-rtdb.firebaseio.com",
    projectId: "articles-9f370",
    storageBucket: "articles-9f370.appspot.com",
    messagingSenderId: "659020904039",
    appId: "1:659020904039:web:75ad243d9b221a0cfa86c2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage(firebaseApp)
console.log({ firebaseConfig, firebaseApp });

const options = {
    logging: true,
    // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
    app: firebaseApp,
    // watch: ['posts'];
    // dontwatch: ['comments'];
    persistence: 'local',
    // disableMeta: true
    dontAddIdFieldToDoc: true,
    lazyLoading: {
        enabled: true,
    },
    firestoreCostsLogger: {
        enabled: true,
    },
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

const App = () => {
    return (
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
            <Resource
                name="articles"
                list={ArticleList}
                create={ArticleCreate}
            />
        </Admin>
    )
}

export default App;