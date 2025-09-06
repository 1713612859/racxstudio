/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import api from "../api/axios";
import NotFoundPage from "./NotFoundPage";

const BlogPageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const res = await api.get(`/helpcenter/blog/${id}`);
        setPost(res.data || null);
      } catch (error) {
        console.error('Get Blog detail failed:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogDetail();
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const isHttpUrl = (url) => {
    if (url && (/^https?:\/\//.test(url) || url.startsWith('http://'))) {
      return url;
    }
    return 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop';
  };

  if (loading) {
    return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <p className="text-gray-500 text-lg">Loading...</p>
            </div>
    );
  }

  if (!post) {
    return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <NotFoundPage />
            </div>
    );
  }

  /**
     * 格式化博客内容
     * - 将 <strong> 内联 style 替换为 Tailwind 类
     * - 图片自适应屏幕，保持较小高度
     * @param {string} html - API 返回的 HTML
     * @returns {string} - 处理后的 HTML
     */
  function formatBlogContent(html) {
    if (!html) return '';

    let formatted = html;

    // 1️⃣ 处理 <strong>，加粗 + 蓝色
    formatted = formatted.replace(
      /<strong[^>]*>/g,
      '<strong class="text-blue-700 font-bold">',
    );

    // 2️⃣ 处理 <img>，宽度自适应，高度较小，圆角
    formatted = formatted.replace(
      /<img([^>]*)>/g,
      '<img$1 class="w-full h-48 object-cover rounded-lg my-4" />',
    );

    return formatted;
  }

  return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
                {/* 返回按钮 */}
                <Fade direction="down" triggerOnce>
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="mb-8 flex items-center text-theme-blue hover:text-theme-purple transition-colors"
                    >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </button>
                </Fade>

                {/* 封面图片 */}
                <Fade direction="right" triggerOnce>
                    <img
                      src={isHttpUrl(post.coverImage)}
                      alt={post.title || "Blog Cover"}
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg mb-8"
                    />
                </Fade>

                {/* 内容卡片 */}
                <Fade direction="up" triggerOnce>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-md">
                        {post.categoryName && (
                            <div className="text-sm text-purple-600 font-medium mb-2">
                                {post.categoryName}
                            </div>
                        )}

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-blue mb-4">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center text-sm text-gray-400 mb-6">
                            <p className="mr-2">Published: {formatDate(post.createTime)}</p>
                            <span className="mx-1">•</span>
                            <p className="ml-2">Updated: {formatDate(post.updateTime)}</p>
                        </div>

                        {/* 标签 */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags?.split(',').map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                >
                  {tag}
                </span>
                            ))}
                        </div>

                        <div className="overflow-x-auto">
                            <div
                              className="prose prose-indigo prose-sm sm:prose-base max-w-none leading-relaxed [&>p]:my-2 [&>h2]:mt-4 [&>h2]:mb-2 [&>h3]:mt-3 [&>h3]:mb-1"
                              dangerouslySetInnerHTML={{ __html: formatBlogContent(post.content) }}
                            />
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
  );
};

export default BlogPageDetail;
