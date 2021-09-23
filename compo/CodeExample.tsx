import { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import highlighterStyle from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';

export const CodeExample: FC<{ source: string }> = ({ source }) => {
    return (
        <div className="border-gray-500 border-8 rounded-lg">
            <div className="bg-gray-500 h-7">
                <div className="bg-red-400 w-5 h-5 rounded-full inline-block mr-1"></div>
                <div className="bg-yellow-400 w-5 h-5 rounded-full inline-block mr-1"></div>
                <div className="bg-green-400 w-5 h-5 rounded-full inline-block mr-1"></div>
            </div>
            <SyntaxHighlighter
                language="typescript"
                showLineNumbers
                style={highlighterStyle}
            >
                {source}
            </SyntaxHighlighter>
        </div>
    );
};
