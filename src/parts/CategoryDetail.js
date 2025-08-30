import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import Header from "./Header";
import Footer from "./Footer";

const CategoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
        console.error("Loading Subcategory Failed:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSubCategories();
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
  if (subCategories.length === 0) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <section className="container mx-auto px-6 py-12">
                    {BackTag}
                    <p>No categories found.</p>
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
                    <div className="text-center from-blue-50 to-blue-100 mb-10">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-pos-secondary">Please Select a Category</h1>
                        <p className="text-pos-gray mt-3">Choose a category to view the articles</p>
                        <div className="mt-4 w-16 h-1 mx-auto bg-pos-primary rounded-full" />
                    </div>
                    <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subCategories.map((sub) => (
                            <li key={sub.id}>
                                <Link
                                  to={`/articles/${sub.id}`}
                                  className="group bg-blue-100 block p-6 text-theme-blue  rounded-2xl shadow hover:shadow-lg transition-all border border-gray-100 hover:-translate-y-0.5"
                                >
                                    <div className="flex items-center mb-2">
                                        <div className="w-10 h-10 rounded-lg bg-pos-primary/10 text-pos-primary flex items-center justify-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path d="M4 5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-lg font-semibold text-pos-secondary group-hover:text-pos-primary">{sub.categoryName}</h2>
                                    </div>
                                    <p className="text-sm text-pos-gray hover:underline">Click to view articles</p>
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

export default CategoryDetail;
