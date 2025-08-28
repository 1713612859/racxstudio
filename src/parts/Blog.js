import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import api from "../api/axios";

// This is the optimized Blog component
const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // A more robust API call with loading and error handling
    api.get('/helpcenter/blog/list')
      .then((response) => {
        if (response.code === 200 && response.rows) {
          setBlogPosts(response.rows);
        } else {
          setBlogPosts([]);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch blog posts:", error);
        setBlogPosts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleClickDetail = (id) => {
    navigate(`/blog/${id}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
  };

  function isHttpUrl(url) {
    if (url && /^https?:\/\//.test(url)) {
      return url;
    }
    return `https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop`; // A fallback image
  }

  return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6"> {/* Responsive padding */}
                <Fade direction="down" triggerOnce>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-theme-blue mb-4">
                            Blog
                        </h1>
                        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
                            探索我们的博客，获取最新的经营技巧与行业洞察。
                        </p>
                    </div>
                </Fade>

                {loading && (
                    <div className="flex justify-center items-center h-48">
                        <p className="text-gray-500 text-lg">加载中...</p>
                    </div>
                )}

                {!loading && blogPosts.length === 0 && (
                    <Fade direction="up" triggerOnce>
                        <p className="text-center text-gray-500 text-lg mt-10">
                            抱歉，没有找到匹配的文章。
                        </p>
                    </Fade>
                )}

                {!loading && blogPosts.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post) => (
                            <Fade direction="up" delay={100} triggerOnce key={post.blogId}>
                                <button
                                  type="button"
                                  onClick={() => handleClickDetail(post.blogId)}
                                  className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300"
                                >
                                    <img
                                      src={isHttpUrl(post.coverImage)}
                                      alt={post.title}
                                      className="w-full h-48 sm:h-56 object-cover rounded-t-2xl"
                                    />
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {post.tags?.split(',').map((tag) => (
                                                <span
                                                  key={tag}
                                                  className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-0.5 rounded-full"
                                                >
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-theme-blue group-hover:text-theme-purple transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {post.description}
                                        </p>
                                        <div className="flex justify-between items-center text-sm text-gray-400">
                                            <p>发布于：{formatDate(post.createTime)}</p>
                                        </div>
                                    </div>
                                </button>
                            </Fade>
                        ))}
                    </div>
                )}
            </div>
        </section>
  );
};

export default Blog;
