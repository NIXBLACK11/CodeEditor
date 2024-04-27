import React from 'react';
import Terminal from 'react-bash-typescript';
import Extension from "react-bash-typescript";

const Term: React.FC = () => {
  const history: Array<{ value: string }> = [{ value: 'Welcome to the terminal!' }];

  const structure = {
    src: {
      file1: { content: 'This is the text content for <file1> of <src>' },
      file2: { content: 'This is the text content for <file2> of <src>' },
      childDir1: {
        file: { content: 'This is the text content for <file> of <src/childDir1>' },
      },
      childDir2: {},
    },
    '.hiddenDir': {},
    '.hiddenFile': { content: 'This is a hidden file' },
    file: { content: 'This is the text content for <file> of the root directory' },
  };

//   const extensions: { [key: string]: Extension } = {
//     // Define your custom extensions here if needed
//     // For example:
//     // myCustomCommand: {
//     //   exec: ({ structure, history, cwd }, command) => {
//     //     // Logic for executing the custom command
//     //     return { structure, cwd, history };
//     //   }
//     // }
//   };

    const clear = {
        exec: ({ structure, history, cwd }: any, command: any) => {
            return { structure, cwd, history: [] };
        },
    };

    const extensions = { clear };

  return (
    <Terminal
      history={history}
      structure={structure}
      extensions={extensions}
      theme={Terminal.Themes.DARK} // or Terminal.Themes.LIGHT
    />
  );
};

export default Term;
