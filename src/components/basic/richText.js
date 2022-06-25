import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const RichText = ({ text, dataSal, dataSalDuration, dataSalDelay, className }) => (
    <div 
        className={ `rich-text ${ className && className}` }
        data-sal={ dataSal }
        data-sal-duration={ dataSalDuration }
        data-sal-delay={ dataSalDelay }
    >
        <ReactMarkdown children={ text } remarkPlugins={ [remarkGfm] } />
    </div>
)

export default RichText;