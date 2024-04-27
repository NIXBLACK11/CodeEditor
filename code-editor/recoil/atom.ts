import { atom } from 'recoil';

export const selectedLanguage = atom({
    key: 'selectedLanguage',
    default: 'javascript',
});

export const selectedFile = atom({
    key: 'selectedFile',
    default: {
        fileName: 'example.js',
        fileValue: '//This is your example'
    }
});