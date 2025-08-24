/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/BuildWebsite.png"; // 换成收银机相关图片

export default function Hero() {
  return (
      <section className="hero flex flex-col-reverse lg:flex-row items-center lg:items-start">
        {/* 左侧文案区 */}
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
            智能收银<br />
            让门店经营更轻松
          </h1>

          <p className="font-light text-xl text-gray-500 leading-relaxed mb-10">
            支持会员营销、库存管理与经营分析，助力门店数字化转型。
          </p>

          <Fade direction="up" delay={500} triggerOnce>
            <div className="flex gap-4">
              <Button
                href="https://tenant.pppos.com"
                type="link"
                className="px-10 py-4 text-white text-lg bg-theme-purple rounded-lg shadow-xl hover:bg-dark-theme-purple transition duration-200"
              >
                免费试用
              </Button>
              <Button
                href="/features"
                type="link"
                className="px-10 py-4 text-theme-purple text-lg border border-theme-purple rounded-lg hover:bg-theme-purple hover:text-white transition duration-200"
              >
                查看功能
              </Button>
            </div>
          </Fade>
        </div>

        {/* 右侧产品展示图 */}
        <div className="flex pt-5 w-full lg:w-1/2 justify-center items-center">
          <Fade direction="down" triggerOnce>
            <img
              className="max-w-full h-auto"
              src={BuildWebsite}
              alt="Smart Piont of Sales"
            />
          </Fade>
        </div>
      </section>
  );
}
