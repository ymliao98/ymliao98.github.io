const about = {
  my_name: "Yunming Liao",
  position: "Ph.D Candidate",
  company: [
    {
      name: "USTC Intelligent Network and System Group (USTC-INT)",
      link: "https://int-ustc.github.io/index.html",
    },
    {
      name: "School of Computer Science and Technology",
      link: "https://cs.ustc.edu.cn/main.htm",
    },
    {
      name: "University of Science and Technology of China (USTC)",
      link: "https://www.ustc.edu.cn/",
    },
  ],
  research_content:
    "Research Interests: Edge Computing, Edge Intelligence, Federated LLMs",
  introduction:
    "Yunming Liao is currently pursuing Ph.D. degree in the School of Computer Science and Technology, University of Science and Technology of China. He received B.S. degree in 2020 from the University of Science and Technology of China. His primary research interests include the Internet of Things, edge computing, federated learning, edge intelligence, and federated LLMs.",
  email: "Email:ymliao98@mail.ustc.edu.cn",
  google_scholar:
    "https://scholar.google.com.hk/citations?user=pKJtH5MAAAAJ&hl=zh-CN",
  github: "https://github.com/ymliao98",
};
const awards = [
  // Year: Awards
  { 2025: "CAS Presidential Scholarship (Special Prize)" },
  { 2024: '"Jiao Long" First-Class Scholarship' },
  { 2024: "PhD National Scholarship" },
  { 2023: "Suzhou Yucai Scholarship" },
  { 2022: "Master's National Scholarship" },
  { 2022: "Suzhou Industrial Park Scholarship" },
  { "2022-2024": "Doctoral first-class academic scholarship" },
  { "2020-2021": "Master's first-class academic scholarship" },
  { 2018: "Champion of RobeGame 2018 Competition of USTC" },
  { 2018: "Endeavor Scholarship" },
];

// 在此处添加论文
const publications = [
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
      "LOGO-CL:Accelerating Semi-Supervised Federated Learning in Edge Computing",
    authors:
      "Yang Xu, Qianshu Wang, *Hongli Xu, Yunming Liao, Liusheng Huang, Xin Hang",
    publisher: "Computer Networks (ComNet), 2025",
    level: `[ComNet'25, CCF B]`,
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

const projects = [
  {
    name: "Research on Federated Low-Rank Fine-Tuning for End Devices with Limited Resources Type:Research Period:2025-2026",
    funding: "NSFC",
  },
  {
    name: "2024 Young Talent Support Project Doctoral Program by Chinese Institute of Electronics",
    funding: "",
  },
];

const services = [
  {
    type: "Journal Reviewer",
    name: "IEEE Transactions on Mobile Computing(TMC)",
  },
  {
    type: "Journal Reviewer",
    name: "IEEE Transactions on Parallel and Distributed Systems(TPDS)",
  },
  {
    type: "Journal Reviewer",
    name: "IEEE/ACM Transactions on Networking(ToN)",
  },
  {
    type: "Journal Reviewer",
    name: "IEEE Transactions on Communications(TCOM)",
  },
];

const title_en = {
  学术服务: "Academic Services",
  项目: "Projects",
  论著: "Publications",
  奖项: "Awards",
  关于: "About",
};
