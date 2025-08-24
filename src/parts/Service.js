/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

export default function Service({ data }) {
// 使用 switch 语句
  function handleClick(props) {
    switch (props) {
      case 'Restaurant':
        toast.success(`${props}`, {
          position: 'top-center',         // 放在顶部中间
          autoClose: 3000,                // 3秒后自动关闭
          hideProgressBar: false,         // 显示进度条
          closeOnClick: true,             // 点击后关闭
          pauseOnHover: true,             // 鼠标悬停时暂停自动关闭
          draggable: true,                // 可以用鼠标拖动
          progress: undefined,            // 自动计算进度
          theme: 'light',               // 使用彩色主题
        });
        break;
      case 'Retail':
        toast.warning(`${props}`, { autoClose: 2000, position: "top-center" });
        break;
      case 'Quick Service':
        toast.error(`${props}`, { autoClose: 2000, position: "top-center" });
        break;
      default:
        toast.info(`${props}`, { autoClose: 2000, position: "top-center" });
    }
  }
  
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-1 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl py-4 text-theme-blue text-center font-bold">Our Service</h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            We are ready to scale up your business with our great service.
          </p>
        </Fade>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {
            data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fade direction={item.animation} delay={600 * index} key={index} triggerOnce>
                <div>
                  <div className="bg-white group rounded-2xl w-auto shadow-lg border border-light-theme-purple transform transition duration-500 hover:scale-105">
                    <img src={item.imageUrl} alt="Service" className="w-full  object-cover rounded-t-2xl" />
                    {/* eslint-disable-next-line max-len */}
                    {/* <h2 className="text-theme-blue text-center text-2xl py-3">{item.title}</h2> */}
                    <button
                      className="w-full py-3 text-center bg-white text-lg font-medium text-theme-blue rounded-b-2xl"
                      type="button"
                      onClick={() => handleClick(item.title)}
                    >
                      {item.title}
                    </button>               
                  </div>
                </div>
              </Fade>
            ))
          }
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
