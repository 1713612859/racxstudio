import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import ArticleContent from "./ArticleContent";
import Header from "./Header";
import Footer from "./Footer";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    api.get(`/helpcenter/article/${id}`).then((res) => {
      setArticle(res.data);
    });
  }, [id]);

  const BackTag = (
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full text-sm bg-pos-primary/10 text-pos-primary hover:bg-pos-primary/20"
        >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back
        </button>
  );

  if (!article) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="container mx-auto px-6 py-12">
                    {BackTag}
                    <p>Loading...</p>
                </section>
            </main>
            <Footer />
        </div>
    ); 
  }

  return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <article className="container mx-auto px-6 py-12">
                    {BackTag}
                    <header className="mb-8 text-center">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-pos-secondary mb-3">{article.title}</h1>
                        {article.updatedAt && (
                          <p className="text-sm text-pos-gray">Updated at: {article.updatedAt}</p>
                        )}
                        <div className="mt-4 w-16 h-1 mx-auto bg-pos-primary rounded-full" />
                    </header>

                    <div className="prose max-w-none prose-headings:text-pos-secondary prose-a:text-pos-primary prose-strong:text-pos-secondary">
                        <ArticleContent content={article.content} />
                    </div>
                </article>
            </main>
            <Footer />
        </div>
  );
};

export default ArticleDetail;
