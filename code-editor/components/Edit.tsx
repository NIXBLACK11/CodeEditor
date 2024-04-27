"use client"

import Editor from '@monaco-editor/react';
import { useRecoilState } from 'recoil';
import { selectedFile, selectedLanguage } from '@/recoil/atom';

export const Edit = function() {
    const [language, setLanguage] = useRecoilState<string>(selectedLanguage);
    const [file, setFile] = useRecoilState(selectedFile);

    function handleEditorChange(v: any, e: any) {
        setFile((file)=>({
            ...file,
            fileValue: v            
        }));
    }
    return(
        <> 
            <Editor 
                height="70vh" 
                theme='vs-dark'
                path={file.fileName}
                defaultLanguage={language}
                defaultValue={file.fileValue}
                onChange={handleEditorChange}
            />
        </>
    );
}