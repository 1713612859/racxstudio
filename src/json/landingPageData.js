/* eslint-disable import/extensions */

// Services Img Imports
// import Web from '../assets/images/Services/Web.png';
// import Mobile from '../assets/images/Services/Mobile.png';
// import UIUX from '../assets/images/Services/Design.png';
import Restaurant from '../assets/images/Services/Restaurant.png';
// import Supermarket from '../assets/images/Services/Supermarket.png';
import Supermarket2 from '../assets/images/Services/Supermarket2.jpeg';
import MilkTea from '../assets/images/Services/MilkTea.png';

// Portfolio Img Imports
// import Recruiting from '../assets/images/Portfolio/Recruiting.png';
import BIR from '../assets/images/Portfolio/BIRFlag.png';
import Stream from '../assets/images/Portfolio/Stream.png';
import Freelance from '../assets/images/Portfolio/Freelance.png';
import Aura from '../assets/images/Portfolio/Aura.png';
import Surtido from '../assets/images/Portfolio/Surtido.png';
import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

// Our Clients
import BINGCHUN from '../assets/images/OurClients/BINGCHUN.jpg';
import SHAXIANSNACK from '../assets/images/OurClients/SHAXIANSNACK.jpg';
import LAVARA from '../assets/images/OurClients/LAVARA.jpg';
import COOLER from '../assets/images/OurClients/COOLER.jpg';
import RONGTAI from '../assets/images/OurClients/RONGTAI.jpg';
import THAILANG from '../assets/images/OurClients/THAILANG.jpg';
import PHOENIXMART from '../assets/images/OurClients/PHOENIXMART.jpg';

// 服务层
export const Services = [
  {
    title: 'Restaurant',
    imageUrl: Restaurant,
    animation: 'left',
  },
  {
    title: 'Quick Service',
    imageUrl: MilkTea,
    animation: 'up',
  },
  {
    title: 'Retail',
    imageUrl: Supermarket2,
    animation: 'right',
  },
];
// 作品集
// 菲律宾税务局 (BIR) 收银机系统推广作品集
export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'BIR 合规收银系统',
    imageUrl: BIR,
    type: 'BIR POS 系统',
    responsibility: [
      '收银系统开发',
      'BIR 合规对接',
      'UI/UX 优化设计',
    ],
    credit: 'https://dribbble.com/shots/15164950-Recruiting-app',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: '电子发票与税务申报',
    imageUrl: Stream,
    type: 'BIR POS 系统',
    responsibility: [
      '电子发票集成',
      'BIR 报表自动化',
      '税务合规功能',
    ],
    credit: 'https://dribbble.com/shots/15276430-Stream',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: '',
    imageUrl: Freelance,
    type: 'BIR POS 系统',
    responsibility: [
      '多门店同步',
      '税务统一管理',
      '企业合规配置',
    ],
    credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  },
  {
    id: 'asd1293ufgdfgs4',
    title: '云端 BIR 收银平台',
    imageUrl: Aura,
    type: 'BIR 网站系统',
    responsibility: [
      '云端税务处理',
      'BIR API 对接',
      '远程监控功能',
    ],
    credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
  },
  {
    id: 'asd1293ulskmnb5',
    title: '快速合规部署方案',
    imageUrl: Surtido,
    type: 'BIR 网站系统',
    responsibility: [
      '快速上线',
      '自动合规校验',
      '后台管理支持',
    ],
    credit: 'https://dribbble.com/shots/15173118-Surtido-Rico',
  },
  {
    id: 'asd1293ulkmnbj6',
    title: 'BIR 税务课程与培训',
    imageUrl: ManagementApp,
    type: 'BIR 网站系统',
    responsibility: [
      '培训平台开发',
      '纳税人学习工具',
      '税务推广资源',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
];

// 为什么选择我们
export const WhyChooseUs = [
  '专注菲律宾 BIR 税务收银机系统软件开发，确保系统稳定与企业百分百合规',
  '提供 POS、网站、移动端与云端的一体化软件解决方案',
  '多年税务与收银软件项目经验，支持单店、多门店及连锁业务',
  '快速部署与灵活扩展，让企业轻松实现税务数字化合规',
  '完善的售后服务：技术支持、系统升级、合规更新一站式提供',
  '高效沟通与定制化软件方案，满足各类企业个性化需求',
];

// 优势信息
export const Advantages = [
  [
    {
      title: '稳定可靠的软件',
      description: '采用成熟架构与严格测试，保障系统长期稳定运行。',
      imageUrl: Communicative,
    },
    {
      title: '完善的售后服务',
      description: '提供持续的技术支持、功能升级与合规更新服务。',
      imageUrl: Management,
    },
  ],
  [
    {
      title: '灵活的系统管理',
      description: '支持多门店、多平台同步，实现业务一体化管理。',
      imageUrl: Collaborative,
    },
    {
      title: '客户信赖与持续合作',
      description: '众多企业长期选择并信赖我们，享受全程技术与合规支持。',
      imageUrl: Favorite,
    },
  ],
];

// 客户评价信息（菲律宾市场）
export const Testimonials = [
  {
    id: 1,
    name: 'Maria Santos',
    company: 'Owner, Manila Retail Hub',
    testimoni: '感谢团队帮助我们快速完成 BIR 收银机系统的部署，系统稳定且符合所有合规要求，售后服务也很及时！',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Jose Ramirez',
    company: 'Director, Cebu Trading Corp',
    testimoni: '从开发到认证再到售后支持，都非常专业。现在我们的税务流程更加高效，也符合 BIR 规范。',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Liza Dela Cruz',
    company: 'CEO, Davao Food Chain',
    testimoni: '软件简单易用，支持多门店管理，售后团队反应迅速，让我们无忧过渡到 BIR 合规系统。',
    imageUrl: Reiner,
  },
];

export const OurClients = [
  { id: 1, name: "SHAXIAN SNACK", logo: SHAXIANSNACK },
  { id: 2, name: "BINGCHUN INC", logo: BINGCHUN },
  { id: 3, name: "LA VARA Restaurant", logo: LAVARA },
  { id: 4, name: "COOLER", logo: COOLER },
  { id: 5, name: "RONGTAI", logo: RONGTAI },
  { id: 6, name: "THAILANG & BAR", logo: THAILANG },
  { id: 7, name: "PHOENIXMART", logo: PHOENIXMART },

];

// 团队成员信息
export const TeamMembers = [
  {
    name: 'Rach David',
    position: 'CEO',
    imageUrl: CEO,
  },
  {
    name: 'Pauline Sydney',
    position: 'HRD',
    imageUrl: HRD,
  },
  {
    name: 'Granger Watterson',
    position: 'Finance',
    imageUrl: Finance,
  },
  {
    name: 'Tom Jimmy',
    position: 'Project Manager',
    imageUrl: ProjectManager,
  },
  {
    name: 'Jim Hendrix',
    position: 'Front-end Developer',
    imageUrl: Frontend1,
  },
  {
    name: 'Calvin Max',
    position: 'Front-end Developer',
    imageUrl: Frontend2,
  },
  {
    name: 'Hawkins Jim',
    position: 'Back-end Developer',
    imageUrl: Backend1,
  },
  {
    name: 'Don Bizaro',
    position: 'Back-end Developer',
    imageUrl: Backend2,
  },
  {
    name: 'Bill Markinson',
    position: 'Mobile Developer',
    imageUrl: Mobile1,
  },
  {
    name: 'Igor Kavarov',
    position: 'Mobile Developer',
    imageUrl: Mobile2,
  },
  {
    name: 'Freddie Curl',
    position: 'UI/UX Designer',
    imageUrl: UIUX2,
  },
  {
    name: 'Monica Lovegood',
    position: 'UI/UX Designer',
    imageUrl: UIUX1,
  },
];
