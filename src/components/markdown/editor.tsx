
import React, { useCallback, useEffect } from 'react'
import { EditorState } from '@codemirror/state'
import useCodeMirror from './use-codemirror'
import { Stack } from '@mui/system'

interface Props {
    initialDoc: string,
    setDoc: any
}

const Editor: React.FC<Props> = (props) => {
    const { setDoc, initialDoc } = props
    const handleChange = useCallback(
        (state: EditorState) => {setDoc(state.doc.toString()); },
        [setDoc],
    )
    const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
        initialDoc: initialDoc,
        onChange: handleChange
    })

    useEffect(() => {
        if (editorView) {
            // Do nothing for now
        } else {
            // loading editor
        }
    }, [editorView])

    return <Stack width='50%' className='w-1/2 h-full flex-grow-0 flex-shrink-0' ref={refContainer}></Stack>
}

export default Editor