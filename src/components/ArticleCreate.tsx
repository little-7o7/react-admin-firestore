import React, { useCallback, useState } from 'react'
import { Create, SimpleForm, TextInput, AutocompleteInput, DateInput, ReferenceInput, SelectInput, required, ImageInput, ImageField } from 'react-admin'
import Editor from './markdown/editor'
import Preview from './markdown/preview';
import styles from '../styles/Home.module.css'
import { Input, Stack } from '@mui/material';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useController } from 'react-hook-form';


const ArticleCreate = (props: any) => {
    const [doc, setDoc] = useState<string>(`# __description__ \n ---`);

    return (
        <Create title='Create a Post' {...props} className={styles.container}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput source='subtitle' />
                <TextInput source='description' fullWidth
                    format={(value) => value && doc}
                    // parse={(value) => (value ? doc : doc)}
                />

                <Stack width='100%'>
                    <span>Markdown</span>
                    <Stack width='100%' direction='row' className='flex flex-1 w-full gap-4'>
                        <Editor initialDoc={doc} setDoc={setDoc} />
                        <Preview doc={doc} />
                    </Stack>
                </Stack>

                <TextInput source='published' />
                <TextInput source='category' />
                <ImageInput source="img" label="Images" multiple>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput source='author.name' />
                <TextInput source='author.designation' />
                <ImageInput source="author.img" label="Author img">
                    <ImageField source="src" title="title" />
                </ImageInput>
            </SimpleForm>
        </Create>
    )
}

export default ArticleCreate
