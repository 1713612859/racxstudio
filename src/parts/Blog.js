import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import api from "../api/axios";

// 假数据，模拟从后端获取的博客文章列表
// const blogPosts = [
//   {
//     id: 1,
//     title: '如何利用会员系统提升门店复购率',
//     description: '通过智能会员营销策略，轻松管理客户关系，实现销售额的持续增长。',
//     coverImage: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop',
//     tags: ['会员', '营销', '增长'],
//     publishedAt: '2024-07-15T10:00:00Z',
//     updatedAt: '2024-07-15T10:00:00Z',
//   },
//   {
//     id: 2,
//     title: '掌握收银技巧，提高门店运营效率',
//     description: '深入解析高效收银流程，减少等待时间，为客户带来流畅的购物体验。',
//     coverImage: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop',
//     tags: ['收银', '效率', '运营'],
//     publishedAt: '2024-07-20T11:30:00Z',
//     updatedAt: '2024-07-21T14:00:00Z',
//   },
//   {
//     id: 3,
//     title: '智能库存管理，告别商品积压与缺货',
//     description: '借助自动化库存系统，实时追踪商品动态，确保货架上永远有您需要的商品。',
//     coverImage: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop',
//     tags: ['库存', '管理', '零售'],
//     publishedAt: '2024-07-18T09:00:00Z',
//     updatedAt: '2024-07-18T09:00:00Z',
//   },
//   {
//     id: 4,
//     title: '数据驱动决策：用报表洞察门店经营',
//     description: '从销售数据到客户行为，通过直观的报表分析，做出更明智的商业决策。',
//     coverImage: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop',
//     tags: ['数据', '决策', '分析'],
//     publishedAt: '2024-07-10T15:45:00Z',
//     updatedAt: '2024-07-12T08:00:00Z',
//   },
// ];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  // 获取博客文章列表
  useEffect(() => {
    api.get('/helpcenter/blog/list')
      .then((response) => {
        setBlogPosts(response.rows);
      });
  }, []);

  const navigate = useNavigate();
  const handleClickDetail = (id) => {
    // 跳转到文章详情页面
    // eslint-disable-next-line no-useless-concat
    console.log('id', id);
    // eslint-disable-next-line no-useless-concat
    navigate('/blog' + `${`/${id}`}`);
  };

  // 模拟数据加载和排序
  useEffect(() => {
    // 默认按发布时间降序排序
    // eslint-disable-next-line max-len
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    setFilteredPosts(sortedPosts);
  }, []);

  // 根据标签过滤文章
  useEffect(() => {
    if (selectedTag) {
      setFilteredPosts(blogPosts.filter((post) => post.tags.includes(selectedTag)));
    } else {
      // 如果没有选择标签，则恢复为按时间排序的所有文章
      // eslint-disable-next-line max-len
      const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      setFilteredPosts(sortedPosts);
    }
  }, [selectedTag]);

  // 获取所有不重复的标签
  const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

  // 格式化日期显示
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-theme-blue mb-4">
              博客
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              探索行业洞察，获取最新的经营技巧与解决方案。
            </p>
          </div>
        </Fade>

        {/* 标签过滤区 */}
        <Fade direction="down" delay={300} triggerOnce>
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            <button
              type="button"
              onClick={() => setSelectedTag(null)}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
                !selectedTag ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              全部
            </button>
            {allTags.map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedTag === tag ? 'bg-theme-purple text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Fade>

        {/* 博客文章列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <Fade direction="up" delay={200} triggerOnce key={post.blogId}>
              {/* eslint-disable-next-line max-len */}
              <button
                type="button"
                onClick={() => {
                  handleClickDetail(post.blogId);
                }}
                className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300"
              >
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tag} {' '}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 text-theme-blue group-hover:text-theme-purple transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <p>发布于：{formatDate(post.publishedAt)}</p>
                    <p>更新于：{formatDate(post.updatedAt)}</p>
                  </div>
                </div>
              </button>
            </Fade>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <Fade direction="up" triggerOnce>
            <p className="text-center text-gray-500 text-lg mt-10">
              Sorry,Currently there are no posts available.
            </p>
          </Fade>
        )}
      </div>
    </section>
  );
};

export default Blog;
