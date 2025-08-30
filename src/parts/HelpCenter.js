import React, { useState, useEffect } from "react";
import Fade from "react-awesome-reveal";
import { Link } from "react-router-dom"; // 如果你用 Next.js，请改成 next/link
import api from '../api/axios.js';

const HelpCenter = () => {
  // 添加状态来管理FAQ展开/收起
  const [openFaqId, setOpenFaqId] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [entries, setEntries] = useState([]);
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  useEffect(() => {
    // 获取 FAQ 数据
    api.get('/helpcenter/faq/list')
      .then((response) => {
        setFaqs(response.rows);
      })
      .catch((error) => {
        console.error('Error fetching FAQs:', error);
      });
    // 获取帮助入口数据
    api.get('/helpcenter/category/list')
      .then((response) => {
        // 过滤掉  parent_id ！=0  的分类
        const parentCategory = response.data?.filter((entry) => entry.parentId === 0);
        // 获取帮助入口数据
        console.log(parentCategory?.length);
        setEntries(parentCategory);
      })
      .catch((error) => {
        console.error('Error fetching entries:', error);
      });
  }, []);

  // Help Center Article 入口
  // const entries = [
  //   {
  //     id: "cloud",
  //     title: "云端帮助中心",
  //     description: "获取云端 BIR 收银机系统的操作指南、更新日志与合规支持。",
  //     href: "/help/cloud",
  //     icon: "https://share.google/images/xOLdqVUAVF4RWY4YJ",
  //   },
  //   {
  //     id: "pos",
  //     title: "POS 端帮助中心",
  //     description: "查看 POS 收银机系统常见问题、安装教程与技术支持。",
  //     href: "/help/pos",
  //     icon: "https://share.google/images/xOLdqVUAVF4RWY4YJ",
  //   },
  // ];

  // //  FAQ 数据
  // const faqs = [
  //   {
  //     question: "如何快速完成 BIR 收银机系统的合规认证？",
  //     answer: "我们提供一站式服务，包括系统部署、合规对接与技术支持，通常 3-5 个工作日即可完成。",
  //     id: 1,
  //   },
  //   {
  //     question: "软件是否支持多门店同步？",
  //     answer: "支持。我们的系统可与云端对接，实现多门店同步管理与税务统一申报。",
  //     id: 2,
  //   },
  //   {
  //     question: "遇到问题如何联系客服？",
  //     answer: "您可以通过在线客服、邮箱或 24/7 技术支持通道联系我们。",
  //     id: 3,
  //   },
  // ];

  return (
        <section className="container mx-auto px-6 py-16">
            {/* Header */}
            <Fade>
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Help Center
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mx-auto leading-relaxed">
                        Providing comprehensive support and user guides for your
                        <span className="font-semibold text-blue-600"> Cloud </span> &
                        <span className="font-semibold text-purple-600"> POS System</span>,
                        helping you quickly find the answers you need.
                    </p>
                    <div className="mt-6 w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>

            </Fade>

            {/* Search Bar */}
            <div className="flex justify-center mb-12">
                <input
                  type="text"
                  placeholder="Search ..."
                  className="w-full  sm:w-2/3 lg:w-1/2 px-5 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* System Entries */}
            {/* System Entries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {entries.map((entry) => (
                    <Link
                      key={entry.id}
                      to={`/category/${entry.id}`}   // 使用分类ID跳转
                      className="group relative block p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-center mb-4 group">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 640"
                                  className="w-6 h-6 text-blue-700 group-hover:text-blue-900 transition-colors duration-300"
                                  fill="currentColor"
                                >
                                    <path d="M32 206.1L32 544C32 561.7 46.3 576 64 576C81.7 576 96 561.7 96 544L96 304C96 286.3 110.3 272 128 272L512 272C529.7 272 544 286.3 544 304L544 544C544 561.7 558.3 576 576 576C593.7 576 608 561.7 608 544L608 206.1C608 178.6 590.4 154.1 564.2 145.4L335.2 69.1C325.3 65.8 314.7 65.8 304.8 69.1L75.8 145.4C49.6 154.1 32 178.6 32 206.1zM496 320L144 320L144 384L496 384L496 320zM144 480L496 480L496 416L144 416L144 480zM496 512L144 512L144 576L496 576L496 512z" />
                                </svg>
                            </div>
                            <h2 className="ml-4 text-2xl font-bold text-blue-800 group-hover:text-blue-900 transition-colors duration-300">
                                {entry.categoryName}
                            </h2>
                        </div>

                        <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                            {entry.description}
                        </p>
                        {/* 右下角箭头提示 */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>

            {/* FAQ Section */}
            <div id="faq" className="mb-16">
                <Fade>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">F&Q</h2>
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div
                              key={faq.id}
                              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
                            >
                                <button
                                  type="button"
                                  className="w-full text-left flex justify-between items-center"
                                  onClick={() => toggleFaq(faq.id)}
                                >
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {faq.question}
                                    </h3>
                                    <span className="ml-4 text-2xl">
                                      {openFaqId === faq.id ? '−' : '+'}
                                    </span>
                                </button>
                                {openFaqId === faq.id && (
                                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>

            {/* Contact */}
            <div
              id="contact"
              className="text-center bg-blue-50 p-10 rounded-2xl shadow"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Still have questions？</h2>
                <p className="text-gray-600 mb-6">Our  support team is here to help you.。</p>
                <a
                  href="/discuss-project"
                  className="inline-block px-16 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full shadow hover:bg-yellow-500 hover:scale-110 transition-transform duration-300"
                >
                    Contact Us
                </a>
            </div>
        </section>
  );
};

export default HelpCenter;
