import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import ArticleContent from "./ArticleContent";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    api.get(`/helpcenter/article/${id}`)
      .then((res) => {
        setArticle(res.data);
      });
  }, [id]);

  if (!article) return <p className="container mx-auto px-6 py-12">加载中...</p>;

  return (
    <>
      <article className="container mx-auto px-6 py-12">
        <header className="mb-8 text-center">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-pos-secondary mb-3"
          >{article.title}</h1>
          {article.updatedAt && (
            <p className="text-sm text-pos-gray">更新于 {article.updatedAt}</p>
          )}
          <div className="mt-4 w-16 h-1 mx-auto bg-pos-primary rounded-full" />
        </header>

        <div
          className="prose max-w-none prose-headings:text-pos-secondary prose-a:text-pos-primary prose-strong:text-pos-secondary"
        >
          <ArticleContent content={article.content} />
        </div>
      </article>
    </>
  );
};

export default ArticleDetail;
