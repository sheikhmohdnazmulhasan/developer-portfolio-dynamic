import DOMPurify from "dompurify";
import React from "react";

const RenderRichText = ({ text }) => {
  return (
    <div className="article-content">
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
    </div>
  );
};

export default RenderRichText;
