import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import api  from "../api/axios";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/helpcenter/blog/list')
      .then((response) => {
        if (response.data) {
          setBlogPosts(response.data);
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
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // Check for a valid date
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(date.getTime())) {
      return 'Invalid Date'; // Or handle the error in another way
    }
    return date.toLocaleDateString('en-US', options);
  };
  function isHttpUrl(url) {
    if (url && (/^https?:\/\//.test(url) || url.startsWith('http://'))) {
      return url;
    }
    return `https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop`;
  }

  return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Fade direction="down" triggerOnce>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-theme-blue mb-4">
                            Blog
                        </h1>
                        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
                            Explore our blog for the latest business tips and industry insights.
                        </p>
                    </div>
                </Fade>

                {loading && (
                    <div className="flex justify-center items-center h-48">
                        <p className="text-gray-500 text-lg">Loading...</p>
                    </div>
                )}

                {!loading && blogPosts.length === 0 && (
                    <Fade direction="up" triggerOnce>
                        <p className="text-center text-gray-500 text-lg mt-10">
                            Sorry, no blog posts found.
                        </p>
                    </Fade>
                )}

                {!loading && blogPosts.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10"> {/* 响应式：手机1列，平板2列，PC 3列 */}
                        {blogPosts.map((post) => (
                            <Fade direction="up" delay={100} triggerOnce key={post.blogId}>
                                <button
                                  type="button"
                                  onClick={() => handleClickDetail(post.blogId)}
                                  className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 w-full text-left"
                                >
                                    <img
                                      src={isHttpUrl(post.coverImage)}
                                      alt={post.title}
                                      className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-t-2xl" /* 根据屏幕大小调整 */
                                    />
                                    <div className="p-6 sm:p-7 lg:p-8">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags?.split(',').map((tag) => (
                                                <span
                                                  key={tag}
                                                  className="bg-purple-100 text-purple-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
                                                >
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-theme-blue">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-5 line-clamp-3">
                                            {post.description}
                                        </p>
                                        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400">
                                            <p>Published: {formatDate(post.createTime)}</p>
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
