/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import api, { BASE_URL } from "../api/axios";
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
        if (res.data && res.code === 200 && res.data) {
          setPost(res.data);
        } else {
          setPost(null);
        }
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
    return new Date(dateString).toLocaleDateString('zh-CN', options);
  };

  if (loading) {
    return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <p className="text-gray-500 text-lg">加载中...</p>
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

  function isHttpUrl(url) {
    return BASE_URL + url;
  }

  return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-8 max-w-6xl"> {/* 移动端小内边距 */}
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

                <Fade direction="right" triggerOnce>
                    <img
                      src={isHttpUrl(post.coverImage)}
                      alt="Doesn't exist"
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg mb-8" // 动态调整高度
                    />
                </Fade>

                <Fade direction="up" triggerOnce>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-md"> {/* 动态调整内边距 */}
                        {post.categoryName && (
                            <div className="text-sm text-purple-600 font-medium mb-2">
                                {post.categoryName}
                            </div>
                        )}

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-blue mb-4"> {/* 动态调整字号 */}
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center text-sm text-gray-400 mb-6">
                            <p className="mr-2">发布于：{formatDate(post.createTime)}</p>
                            <span className="mx-1">•</span>
                            <p className="ml-2">更新于：{formatDate(post.updateTime)}</p>
                        </div>

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

                        <div
                          className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-700 leading-relaxed" // 动态调整内容区字号
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </Fade>
            </div>
        </section>
  );
};

export default BlogPageDetail;
