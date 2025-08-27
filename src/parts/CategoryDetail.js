import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import BackBar from "./BackBar";

const CategoryDetail = () => {
  const { id } = useParams(); // 当前分类ID
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await api.get(`/helpcenter/category/list`, {
          params: { parentId: id },
        });
        setSubCategories(response.data);
      } catch (err) {
        console.error("加载子分类失败:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSubCategories();
  }, [id]);

  if (loading) return <p className="container mx-auto px-6 py-12">正在加载子分类...</p>;
  if (subCategories.length === 0) {
    return (
        <>
            <BackBar title="分类" />
            <section className="container mx-auto px-6 py-12">
                <p>暂无子分类</p>
            </section>
        </>
    ); 
  }

  return (
        <>
            <BackBar title="分类" />
            <section className="container mx-auto px-6 py-12">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-pos-secondary">选择您的帮助主题</h1>
                    <p className="text-pos-gray mt-3">下列子分类将带您进入更具体的帮助文档</p>
                    <div className="mt-4 w-16 h-1 mx-auto bg-pos-primary rounded-full" />
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subCategories.map((sub) => (
                        <li key={sub.id}>
                            <Link
                              to={`/articles/${sub.id}`}
                              className="group block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all border border-gray-100 hover:-translate-y-0.5"
                            >
                                <div className="flex items-center mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-pos-primary/10 text-pos-primary flex items-center justify-center mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d="M4 5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-semibold text-pos-secondary group-hover:text-pos-primary">{sub.categoryName}</h2>
                                </div>
                                <p className="text-sm text-pos-gray">点击进入该分类下的文章列表</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
  );
};

export default CategoryDetail;
