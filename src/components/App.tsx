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
    apiKey: "AIzaSyAQPKZrD6Pl-KlNZMM1_3HtMWdjVJXoqgw",
    authDomain: "react-admin-with-firebase.firebaseapp.com",
    databaseURL: "https://react-admin-with-firebase-default-rtdb.firebaseio.com",
    projectId: "react-admin-with-firebase",
    storageBucket: "react-admin-with-firebase.appspot.com",
    messagingSenderId: "874109331939",
    appId: "1:874109331939:web:dd1d57350ff704e2a618d6"
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
                name="shops"
                list={ArticleList}
                create={ArticleCreate}
            />
        </Admin>
    )
}

export default App;