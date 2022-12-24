import * as React from "react";
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore'
import { db } from "../firebase";
import ReactMarkdown from 'react-markdown'

export default function Home() {
    const [markdown, setMarkdown] = useState(``);

    useEffect(() => {
        getDoc(doc(db, 'shops', 'QGQgvjfv6GRwcRocjF7F'))
            .then((doc) => {
                console.log(doc.data());
                setMarkdown(doc.data()!.description);
            })
    }, [])

    return (
        <div>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    )
}
