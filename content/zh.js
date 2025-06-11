const about_zh = {
  my_name: "廖云铭",
  position: "博士研究生",
  company: [
    {
      name: "中国科学技术大学 (USTC)",
      link: "https://www.ustc.edu.cn/",
    },
    {
      name: "计算机科学与技术学院",
      link: "https://cs.ustc.edu.cn/main.htm",
    },

    {
      name: "中国科大计算机学院智能网络与系统课题组(USTC-INT)",
      link: "https://int-ustc.github.io/index.html",
    },
  ],
  research_content: "研究方向:边缘计算、边缘智能、联邦大模型",
  introduction:
    "廖云铭目前在中国科学技术大学计算机科学与技术学院攻读博士学位。2020年6月本科毕业于中国科学技术大学电子信息工程专业并获得保研名额。目前共发表高水平论文22篇，其中一作/学生一作CCF-A类论文10篇，包括MobiCom, INFOCOM, ICDE, ToN, TMC, JSAC等顶级国际会议和期刊。",
  email: "邮箱:ymliao98@mail.ustc.edu.cn",
  google_scholar:
    "https://scholar.google.com.hk/citations?user=pKJtH5MAAAAJ&hl=zh-CN",
  github: "https://github.com/ymliao98",
};

const awards_zh = [
  // Year: Awards
  { 2025: "中国科学院院长特别奖" },
  { 2024: '"蛟龙" 一等奖学金' },
  { 2024: "博士研究生国家奖学金" },
  { 2023: "苏州育才奖学金" },
  { 2022: "硕士研究生国家奖学金" },
  { 2022: "苏州工业园区奖学金" },
  { "2022-2024": "博士一等学业奖学金" },
  { "2020-2021": "硕士一等学业奖学金" },
  { 2018: "中国科学技术大学RoboGame2018比赛冠军" },
  { 2018: "奋进奖学金" },
];
const awards_strong = [
  "中国科学院院长特别奖",
  '"蛟龙" 一等奖学金',
  "国家奖学金",
  "冠军",
];

// 在此处添加论文
const publications_zh = [
  {
    paper:
      "ParallelSFL: A Novel Split Federated Learning Framework Tackling Heterogeneity Issues",
    authors:
      "Yunming Liao, Yang Xu, Hongli Xu, Zhiwai Yao, Liusheng Huang, Chunming Qiao",
    publisher:
      "The 30th Annual International Conference On Mobile Computing And Networking (MOBICOM 2024)",
    level: `[MOBICOM'24, CCF A]`,
  },
  {
    paper:
      "Asynchronous Decentralized Federated Learning for Heterogeneous Devices",
    authors:
      "Yunming Liao, Yang Xu, Hongli Xu, Min Chen, Lun Wang, Chunming Qiao",
    publisher: "IEEE/ACM Transactions on Networking (ToN), 2024",
    level: `[ToN'24, CCF A]`,
  },
  {
    paper:
      "MergeSFL: Split Federated Learning with Feature Merging and Batch Size Regulation",
    authors:
      "Yunming Liao, *Yang Xu, Hongli Xu, Lun Wang, Zhiwai Yao, Chunming Qiao",
    publisher:
      "The 40th IEEE International Conference on Data Engineering (ICDE 2024)",
    level: `[ICDE'24, CCF A]`,
  },
  {
    paper:
      "Adaptive Configuration for Heterogeneous Participants in Decentralized Federated Learning",
    authors: "Yunming Liao, *Yang Xu, Hongli Xu, Lun Wang, Chen Qian",
    publisher:
      "The 42nd IEEE International Conference on Computer Communications (INFOCOM 2023)",
    level: `[INFOCOM'23, CCF A]`,
  },
  {
    paper:
      "Accelerating Federated Learning with Data and Model Parallelism in Edge Computing",
    authors:
      "Yunming Liao, *Yang Xu, Hongli Xu, Zhiwei Yao, Lun Wang, Chunming Qiao",
    publisher: "IEEE/ACM Transactions on Networking (ToN), 2023",
    level: `[ToN'23, CCF A]`,
  },
  {
    paper:
      "Decentralized Federated Learning with Adaptive Configuration for Heterogeneous Participants",
    authors:
      "Yunming Liao, *Yang Xu, Hongli Xu, Lun Wang, Chen Qian, Chunming Qiao",
    publisher: "IEEE Transactions on Mobile Computing (TMC), 2023",
    level: `[TMC'23, CCF A]`,
  },
  {
    paper:
      "Enhancing Split Federated Learning with Worker Clustering and Feature Compression",
    authors:
      "Yang Xu, Yunming Liao, Hongli Xu, Zhiwai Yao, Junhao Cheng, Chunming Qiao",
    publisher: "IEEE Journal on Selected Areas in Communications (JSAC), 2025",
    level: `[JSAC'25, CCF A]`,
  },
  {
    paper:
      "Overcoming Noisy Labels and Non-IID Data in Edge Federated Learning",
    authors:
      "Yang Xu, Yunming Liao, Lun Wang, *Hongli Xu, Zhida Jiang, Wuyang Zhang",
    publisher: "IEEE Transactions on Mobile Computing (TMC), 2024",
    level: `[TMC'24, CCF A]`,
  },
  {
    paper:
      "Adaptive Control of Local Updating and Model Compression for Efficient Federated Learning",
    authors:
      "Yang Xu, Yunming Liao, *Hongli Xu, Zhenguo Ma, Lun Wang, Jianchun Liu",
    publisher: "IEEE Transactions on Mobile Computing (TMC), 2022",
    level: `[TMC'22, CCF A]`,
  },
  {
    paper:
      "FedSNN: Training Slimmable Neural Network with Federated Learning in Edge Computing",
    authors:
      "Yang Xu, Yunming Liao, *Hongli Xu, Zhiyuan Wang, Lun Wang, Jianchun Liu, Chen Qian",
    publisher: "IEEE/ACM Transactions on Networking (ToN), 2024",
    level: `[ToN'24, CCF A]`,
  },
  {
    paper:
      "Enhancing Federated Learning through Layer-wise Aggregation over Non-IID Data",
    authors: "Yang Xu, Ying Zhu, Zhiyuan Wang, *Hongli Xu, Yunming Liao",
    publisher: "Transactions on Services Computing (TSC), 2025",
    level: `[TSC'25, CCF A]`,
  },
  {
    paper:
      "PairingFL: Efficient Federated Learning with Model Splitting and Client Pairing",
    authors: "Zhiwei Yao, Ji Qi, *Yang Xu, Yunming Liao, Hongli Xu, Lun Wang",
    publisher: "IEEE/ACM Transactions on Networking (ToN), 2025",
    level: `[ToN'25, CCF A]`,
  },
  {
    paper:
      "Enhancing Semi-Supervised Federated Learning with Progressive Training in Heterogeneous Edge Computing",
    authors:
      "Jianchun Liu, Jun Liu, *Hongli Xu, Yunming Liao, Zhiwei Yao, Min Chen, Chen Qian",
    publisher: "IEEE Transactions on Mobile Computing (TMC), 2024",
    level: `[TMC'24, CCF A]`,
  },
  {
    paper:
      "Federated Learning with Experience-Driven Model Migration in Heterogeneous Edge Networks",
    authors:
      "Jianchun Liu, Shilong Wang, *Hongli Xu, Yang Xu, Yunming Liao, Jinyang Huang, He Huang",
    publisher: "IEEE/ACM Transactions on Networking (ToN), 2024",
    level: `[ToN'24, CCF A]`,
  },
  {
    paper:
      "Ferrari: A Personalized Federated Learning Framework for Heterogeneous Edge Clients",
    authors:
      "Zhiwei Yao, *Jianchun Liu, Hongli Xu, Lun Wang, Chen Qian, Yunming Liao",
    publisher: "IEEE Transactions on Mobile Computing (TMC), 2024",
    level: `[TMC'24, CCF A]`,
  },
  {
    paper:
      "YOGA: Adaptive Layer-wise Model Aggregation for Decentralized Federated Learning",
    authors:
      "Jun Liu, *Jianchun Liu, *Hongli Xu, Yunming Liao, Zhiyuan Wang, Qianpiao Ma",
    publisher: "IEEE Transactions on Networking (ToN), 2023",
    level: `[ToN'23, CCF A]`,
  },
  {
    paper:
      "Enhancing Federated Learning with Intelligent Model Migration in Heterogeneous Edge Computing",
    authors:
      "Jianchun Liu, *Yang Xu, *Hongli Xu, Yunming Liao, Zhiyuan Wang, He Huang",
    publisher: "IEEE International Conference on Data Engineering (ICDE), 2022",
    level: `[ICDE'22, CCF A]`,
  },
  {
    paper:
      "MPLS: Stacking Diverse Layers into One Model for Decentralized Federated Learning",
    authors: "Yang Xu, Zhiwei Yao, *Hongli Xu, Yunming Liao, Zuan Xie",
    publisher:
      "The 31st International European Conference on Parallel and Distributed Computing (Euro-Par), 2025",
    level: `[Euro-Par'25, CCF B]`,
  },
  {
    paper:
      "Towards layer-wise quantization for heterogeneous federated clients",
    authors:
      "Yang Xu, Junhao Cheng, *Hongli Xu, Changyu Guo, Yunming Liao, Zhiwei Yao",
    publisher: "Computer Networks (ComNet), 2025",
    level: `[ComNet'25, CCF B]`,
  },
  {
    paper:
      "Decentralized Federated Learning with Data Feature Transmission and Neighbor Selection",
    authors: "Wenxiao Lou, Yang Xu, Hongli Xu, Yunming Liao",
    publisher: "IEEE ICPADS 2023",
    level: `[ICPADS'23, CCF C]`,
  },
  {
    paper:
      "Federated Semi-Supervised Learning with Local and Global Updating Frequency Optimization",
    authors: "Xin Hang, Yang Xu, Hongli Xu, Yunming Liao, Lun Wang",
    publisher: "IEEE CCGrid 2024 ",
    level: `[CCGrid'24, CCF C]`,
  },
  {
    paper:
      "Accelerating Hierarchical Federated Learning with Model Splitting in Edge Computing",
    authors:
      "Xiangnan Wang, Yang Xu, Hongli Xu, Zhipeng Sun, Yunming Liao, *Ji Qi",
    publisher: "IEEE ICPADS 2024 ",
    level: `[ICPADS'24, CCF C]`,
  },
];

const projects_zh = [
  {
    name: "项目名称：面向弱设备的联邦低秩微调研究",
    time: "资助年限: 2年",
    type: "资助金额: 30万",
    funding: "资助类别：青年学生基础研究项目（博士研究生）",
  },
  {
    name: "项目名称：2024年度中国科协青年人才托举工程博士生专项计划",
    time: "托举期：2年",
    type: "",
    funding: "托举学会：中国电子学会",
  },
];

const services_zh = [
  {
    type: "期刊审稿人",
    name: "IEEE Transactions on Mobile Computing(TMC)",
  },
  {
    type: "期刊审稿人",
    name: "IEEE Transactions on Parallel and Distributed Systems(TPDS)",
  },
  {
    type: "期刊审稿人",
    name: "IEEE/ACM Transactions on Networking(ToN)",
  },
  {
    type: "期刊审稿人",
    name: "IEEE Transactions on Communications(TCOM)",
  },
];

const nav_zh = {
  about: "简介",
  awards: "奖项",
  publications: "论著",
  projects: "项目",
  services: "学术服务",
};

const title_zh = {
  "Academic Services": "学术服务",
  Projects: "项目",
  Publications: "论著",
  Awards: "奖项",
  About: "关于",
};
