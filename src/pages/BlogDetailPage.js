import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';
import NotFoundPage from "./NotFoundPage";

// 假数据，模拟从后端获取的博客文章列表
// 注意：为了演示详情页，我们增加了 'content' 字段
const blogPosts = [
  {
    id: 1,
    title: '如何利用会员系统提升门店复购率',
    description: '通过智能会员营销策略，轻松管理客户关系，实现销售额的持续增长。',
    coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e178b548d?q=80&w=2670&auto=format&fit=crop',
    tags: ['会员', '营销', '增长'],
    publishedAt: '2024-07-15T10:00:00Z',
    updatedAt: '2024-07-15T10:00:00Z',
    content: `
      <p>在当今竞争激烈的市场环境中，仅仅吸引新客户是远远不够的。提升客户的复购率，将一次性消费者转化为忠实会员，才是实现可持续增长的关键。我们的智能会员系统，正是为此而生。</p>
      <h3>为什么会员营销至关重要？</h3>
      <p>研究表明，获取一个新客户的成本远高于维护一个老客户。通过建立会员体系，您可以：</p>
      <ul>
        <li><b>精准洞察客户：</b> 记录会员的消费习惯和偏好，为个性化推荐提供数据支持。</li>
        <li><b>提升客户忠诚度：</b> 积分兑换、等级特权、生日礼遇等，让会员感受到尊贵与关怀。</li>
        <li><b>刺激消费：</b> 定期发送优惠券和促销信息，有效引导会员再次消费。</li>
      </ul>
      <p>我们的系统支持积分、储值、优惠券一体化管理，让您的会员营销工作变得前所未有的简单和高效。告别传统繁琐的纸质卡片，所有数据都在云端实时同步，让您的门店管理更加智能化。</p>
      <h3>如何开始？</h3>
      <p>只需简单几步，即可在您的门店部署这套强大的系统，开始您的会员增长之旅。我们提供全程技术支持和运营指导，确保您能够顺利上手，快速见效。</p>
    `,
  },
  {
    id: 2,
    title: '掌握收银技巧，提高门店运营效率',
    description: '深入解析高效收银流程，减少等待时间，为客户带来流畅的购物体验。',
    coverImage: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop',
    tags: ['收银', '效率', '运营'],
    publishedAt: '2024-07-20T11:30:00Z',
    updatedAt: '2024-07-21T14:00:00Z',
    content: `<p>高效的收银系统是门店运营的生命线。它不仅能提升员工工作效率，更能大幅改善顾客体验，减少排队等待时间。</p>`,
  },
  // ... 其他文章数据
];

const BlogPageDetail = () => {
  // 从 URL 获取动态参数 (例如，/blog/1 中的 '1')
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // 将字符串ID转换为数字，然后查找对应的文章
    const foundPost = blogPosts.find((p) => p.id === parseInt(id, 10));
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id, navigate]);

  // 格式化日期显示
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
  };

  if (!post) {
    return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <NotFoundPage />
            </div>
    );
  }

  return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <Fade direction="down" triggerOnce>
                    {/* 返回按钮 */}
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="mb-8 flex items-center text-theme-blue hover:text-theme-purple transition-colors"
                    >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        返回博客列表
                    </button>
                </Fade>

                <Fade direction="right" triggerOnce>
                    <img src={post.coverImage} alt={post.title} className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8" />
                </Fade>

                <Fade direction="up" triggerOnce>
                    <div className="bg-white rounded-2xl p-8 shadow-md">
                        <h1 className="text-4xl font-bold text-theme-blue mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center text-sm text-gray-400 mb-6">
                            <p>发布于：{formatDate(post.publishedAt)}</p>
                            <span className="mx-2">•</span>
                            <p>更新于：{formatDate(post.updatedAt)}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <span key={tag} className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
                            ))}
                        </div>

                        <div
                          className="prose max-w-none text-gray-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </Fade>
            </div>
        </section>
  );
};

export default BlogPageDetail;
