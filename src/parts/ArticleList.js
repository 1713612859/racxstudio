import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../api/axios";

const ArticleList = () => {
  const { categoryId } = useParams(); // 子分类ID
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
        console.error("加载文章失败:", err);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) fetchArticles();
  }, [categoryId]);

  if (loading) return <p className="container mx-auto px-6 py-12">正在加载文章...</p>;
  if (articles.length === 0) {
    return (
      <>
        <section className="container mx-auto px-6 py-12">
          <p>暂无文章</p>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-pos-secondary">文章列表</h1>
          <p className="text-pos-gray mt-3">请选择您需要查看的帮助文章</p>
          <div className="mt-4 w-16 h-1 mx-auto bg-pos-primary rounded-full" />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <li key={a.id}>
              <Link
                to={`/article/${a.id}`}
                className="group block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all border border-gray-100 hover:-translate-y-0.5"
              >
                <div className="flex items-start">
                  <div
                    className="w-10 h-10 flex-shrink-0 rounded-lg bg-pos-primary/10 text-pos-primary flex items-center justify-center mr-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M19 2H8a2 2 0 00-2 2v16l5-3 5 3V4a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h2
                      className="text-lg font-semibold text-pos-secondary group-hover:text-pos-primary line-clamp-2"
                    >{a.title}</h2>
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
    </>
  );
};

export default ArticleList;
