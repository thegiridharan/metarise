// components/FormattedMessage.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function FormattedMessage({ message }) {
    // fallback: ensure at least minimal formatting with double line breaks
    const fallbackText = message.replace(/(?<!\n)\n(?!\n)/g, '\n\n');

    return (
        <div className="prose prose-sm md:prose-base max-w-none text-gray-800">
            <ReactMarkdown
                children={fallbackText}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={oneLight}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-md"
                                wrapLongLines
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props}>
                                {children}
                            </code>
                        );
                    },
                    ul({ children, ...props }) {
                        return <ul className="list-disc pl-6 my-2" {...props}>{children}</ul>;
                    },
                    ol({ children, ...props }) {
                        return <ol className="list-decimal pl-6 my-2" {...props}>{children}</ol>;
                    },
                    p({ children, ...props }) {
                        return <p className="my-2" {...props}>{children}</p>;
                    },
                    h1: ({ children }) => <h1 className="text-2xl font-bold mt-4 mb-2">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-xl font-semibold mt-4 mb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-lg font-medium mt-4 mb-2">{children}</h3>,
                }}
            />
        </div>
    );
};