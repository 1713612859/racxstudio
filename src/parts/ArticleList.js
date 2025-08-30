import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import Header from "./Header";
import Footer from "./Footer";

const ArticleList = () => {
  const { categoryId } = useParams(); // 子分类ID
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get(`/helpcenter/article/list`, {
          params: { categoryId },
        });
        setArticles(response.rows);
      } catch (err) {
        console.error("Loading Article Failed...:", err);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) fetchArticles();
  }, [categoryId]);

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

  if (loading) {
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
  if (articles.length === 0) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="container mx-auto px-6 py-12">
                    {BackTag}
                    <p>No articles found.</p>
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
                <section className="container mx-auto px-6 py-12">
                    {BackTag}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-pos-secondary">Articles</h1>
                        <p className="text-pos-gray mt-3">Please select an article to continue</p>
                        <div className="mt-4 w-16 h-1 mx-auto bg-pos-primary rounded-full" />
                    </div>
                    <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((a) => (
                            <li key={a.id}>
                                <Link
                                  to={`/article/${a.id}`}
                                  className="group block p-6  rounded-2xl bg-blue-100 block p-6 text-theme-blue shadow hover:shadow-lg transition-all border border-gray-100 hover:-translate-y-0.5"
                                >
                                    <div className="flex items-start">
                                        <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-pos-primary/10 text-pos-primary flex items-center justify-center mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M19 2H8a2 2 0 00-2 2v16l5-3 5 3V4a2 2 0 00-2-2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold text-pos-secondary group-hover:text-pos-primary line-clamp-2">{a.title}</h2>
                                            {a.summary && (
                                              <p className="text-sm text-pos-gray mt-1 line-clamp-2">{a.summary}</p>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
  );
};

export default ArticleList;
