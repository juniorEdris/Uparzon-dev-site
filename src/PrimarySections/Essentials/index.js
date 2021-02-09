import React from 'react'
export const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
export const renderSpan = (rawHTML) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });