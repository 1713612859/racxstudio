/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: "🧾",
      title: "多种收银方式",
      description: "支持扫码支付、银行卡、现金等多种收银方式，满足不同场景。",
    },
    {
      id: 2,
      icon: "👥",
      title: "会员营销",
      description: "内置会员系统，积分、储值、优惠券一体化管理。",
    },
    {
      id: 3,
      icon: "📊",
      title: "经营数据分析",
      description: "实时生成报表，助力老板精准决策，提高营收。",
    },
    {
      id: 4,
      icon: "📦",
      title: "库存管理",
      description: "自动同步库存，低库存预警，减少损耗。",
    },
    {
      id: 5,
      icon: "📱",
      title: "多端同步",
      description: "支持手机、平板、电脑端同步收银和管理。",
    },
    {
      id: 6,
      icon: "🔒",
      title: "安全稳定",
      description: "多重数据加密，保障门店经营安全无忧。",
    },
  ];

  return (
        <section className="feature bg-gradient-to-b from-white to-white ">
            <div className="container mx-auto px-6">
                {/* 标题区 */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-theme-blue mb-4">
                        核心功能
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        打造智慧门店，从收银到运营全方位支持，助力门店实现数字化升级
                    </p>
                </div>

                {/* 功能卡片区 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature) => (
                        <div
                          key={feature.id}
                          className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 relative"
                        >
                            {/* 图标 */}
                            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-50 text-white text-3xl mb-6 group-hover:scale-110 transform transition-transform duration-300">
                                {feature.icon}
                            </div>

                            {/* 标题 */}
                            <h3 className="text-2xl font-bold mb-3 text-blue-700 group-hover:text-theme-purple transition-colors">
                                {feature.title}
                            </h3>

                            {/* 描述 */}
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* 悬浮边框效果 */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-theme-purple transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
  );
}
