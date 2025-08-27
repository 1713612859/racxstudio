/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

const ArticleContent = ({ content }) => {
  // 包装 iframe
  const processedContent = (content || "").replace(
    /<iframe([\s\S]*?)<\/iframe>/g,
    (match) => `<div class="responsive-video">${match}</div>`,
  );

  return (
        <div
          className="article-content leading-relaxed text-gray-800"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
  );
};

export default ArticleContent;
