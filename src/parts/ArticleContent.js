/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

const ArticleContent = ({ content }) => {
  // 包装 iframe
  let processedContent = (content || "").replace(
    /<iframe([\s\S]*?)<\/iframe>/g,
    (match) => `<div class="responsive-video">${match}</div>`,
  );

  // 给 h1/h2/h3/p/ul/ol/li 添加 Tailwind 样式
  processedContent = processedContent
    .replace(
      /<h1(.*?)>([\s\S]*?)<\/h1>/g,
      '<h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 border-b pb-2"$1>$2</h1>',
    )
    .replace(
      /<h2(.*?)>([\s\S]*?)<\/h2>/g,
      '<h2 class="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 border-l-4 border-blue-500 pl-3"$1>$2</h2>',
    )
    .replace(
      /<h3(.*?)>([\s\S]*?)<\/h3>/g,
      '<h3 class="text-xl md:text-2xl font-bold text-yellow-500 font-semibold  mt-6 mb-3"$1>$2</h3>',
    )
    .replace(
      /<p(.*?)>([\s\S]*?)<\/p>/g,
      '<p class="text-base leading-7 text-gray-600 mb-4"$1>$2</p>',
    )
    .replace(
      /<ul(.*?)>([\s\S]*?)<\/ul>/g,
      '<ul class="list-disc pl-5 my-4 space-y-2"$1>$2</ul>',
    )
    .replace(
      /<ol(.*?)>([\s\S]*?)<\/ol>/g,
      '<ol class="list-decimal pl-5 my-4 space-y-2"$1>$2</ol>',
    )
    .replace(
      /<li(.*?)>([\s\S]*?)<\/li>/g,
      '<li class="mb-2"$1>$2</li>',
    );

  return (
        <div
          className="article-content leading-relaxed text-gray-800"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
  );
};

export default ArticleContent;
