import DOMPurify from "dompurify";
import React, { FC } from "react";

const RenderRichText: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="article-content">
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
    </div>
  );
};

export default RenderRichText;
