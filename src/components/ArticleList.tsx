import React from 'react'
import { List, TextField, Datagrid, ImageField } from 'react-admin'

const ArticleList = (props: any) => {
    return (
        <List  {...props}>
            <Datagrid>
                <TextField source='title' />
                <TextField source='subtitle' />
                <TextField source='description' />
                <TextField source='category' />
                <TextField source='published' />
                <ImageField source='img[0].src' />
                <ImageField source='img[1].src' />
                <TextField source='author.name' />
                <TextField source='author.designation' />
                <ImageField source='author.img.src' />
            </Datagrid>
        </List >
    )
}

export default ArticleList
