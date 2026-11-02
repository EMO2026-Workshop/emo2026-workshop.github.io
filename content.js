window.EMO = {
  "talks": [
    {
      "id": "feng-feng",
      "name": "Feng Feng",
      "title": "Artificial Neural Network Techniques for Microwave Computer-Aided Design",
      "affiliation": "School of Microelectronics, Tianjin University",
      "label": "Keynote Talk 1",
      "time": "08:40–09:10",
      "session": "morning",
      "kind": "keynote",
      "photo": "assets/feng-feng.jpeg",
      "abstract": [
        "This talk presents an overview of artificial neural network (ANN) techniques for microwave computer-aided design (CAD). ANN-based techniques are becoming useful for performing forward/inverse modeling for active/passive components to enhance circuit design. With measured or simulated data of microwave devices, ANNs can be trained to learn relevant microwave relationships that are otherwise computationally expensive or for which efficient analytical formulas are not available. Fundamental concepts of ANN structure and training, such as feedforward neural networks (FFNNs), recurrent neural networks (RNNs), dynamic neural networks (DNNs), time-delay neural networks (TDNNs), deep neural networks, and neural network training and extrapolation, are described.",
        "Knowledge-based neural networks (KBNNs) are described for improving the accuracy and reliability of modeling and design optimization. Various advanced ANN techniques, such as neuro-transfer function (neuro-TF) modeling, neural network inverse modeling, and deep neural network modeling, are discussed. Existing and emerging applications of ANN in microwave CAD are identified, including electromagnetic (EM)/multiphysics modeling, nonlinear circuits and transistors, filter design, very-large-scale integration (VLSI) interconnects, oscillator, transmitter and receiver modeling, and applications involving gallium nitride (GaN) high electron-mobility transistors (HEMTs), wireless power transfer (WPT), microelectromechanical systems (MEMS), and substrate-integrated waveguides (SIWs)."
      ],
      "bio": [
        "Feng Feng received the B.Eng. degree from Tianjin University, Tianjin, China, in 2012, and the Ph.D. degree in microelectronics from Tianjin University, Tianjin, China, and the Department of Electronics at Carleton University, Ottawa, ON, Canada, in 2017. From 2017 to 2020, he was a Postdoctoral Fellow in the Department of Electronics at Carleton University, Ottawa, ON, Canada. In 2020, he joined the School of Microelectronics at Tianjin University, where he is currently a Professor. His research interests include artificial neural network-based electromagnetic parametric modeling and optimization methods for high-speed/high-frequency circuit design. He has authored or co-authored over 200 publications. He serves as an Associate Editor of IEEE Microwave and Wireless Technology Letters, and a Guest Editor for IEEE Microwave Magazine special issues of the Young Professionals Workshop on Electromagnetic Modeling and Optimization. He serves as an IEEE MTT-S Outstanding Young Professional Lecturer and an IEEE MTT-S Distinguished Microwave Lecturer. Dr. Feng is the Chair of the IEEE MTT-S Technical Committee on Design Automation (TC-2) and a member of the IEEE MTT-S Working Group on AI and Machine Learning Based Technologies for Microwaves in the MTT-S Future Directions Committee. He was the General Chair of the 2021 IEEE MTT-S Young Professionals Workshop on Electromagnetic Modeling and Optimization (EMO 2021) and General Co-Chair of EMO 2022–2024. He was the TPC Chair of the 2025 IEEE MTT-S International Conference on Numerical Electromagnetic and Multiphysics Modeling and Optimization (NEMO 2025) and is General Co-Chair of NEMO 2027."
      ]
    },
    {
      "id": "huawei-li",
      "name": "Huawei Li",
      "title": "Leveraging LLMs for Automatic Design of Domain-Specific Processors",
      "affiliation": "Institute of Computing Technology, Chinese Academy of Sciences",
      "label": "Keynote Talk 2",
      "time": "09:10–09:40",
      "session": "morning",
      "kind": "keynote",
      "photo": "assets/huawei-li.jpg",
      "abstract": [
        "Existing digital EDA toolchains offer robust support for the RTL-to-GDSII flow. However, they lack effective support for the earlier stages of processor design, such as transitioning from requirements to architecture and from architecture to RTL. We define the automation of this front-end phase as Processor Design Automation (PDA).",
        "In the era of AIoT, automated design has become a core challenge for the widespread development of Domain-Specific Processors (DSPs). While the code generation capabilities of Large Language Models (LLMs) are rapidly improving—with numerous reports of generating RTL code directly from natural language—applying them to the automated design of DSPs still faces significant hurdles. These include limitations in the scale and complexity of hardware code generation, escalating verification costs, and the difficulty of matching the performance achieved by human experts. In this talk, I will address these challenges and introduce our recent research progress in exploring automated design of DSPs, specifically focusing on LLM-based RTL code generation, verification, and performance optimization."
      ],
      "bio": [
        "Huawei Li is a Professor in the Institute of Computing Technology (ICT), Chinese Academy of Sciences (CAS), and the Vice Director of the State Key Lab of Processors. She received her Ph.D. in Computer Science from ICT, CAS, in 2001. Her current research interests include electronic design automation, testing and fault tolerance of VLSI/SOC circuits, and automatic design of domain-specific processors. She has published over 300 technical papers in these areas. She was a recipient of the 2012 National Technology Invention Award of China, a recipient of the Best Paper Awards of 2023 and 2003 IEEE Asian Test Symposium (ATS), 2021 IEEE Transactions on Computers (TC), 2019 IEEE International Conference on Computer Design (ICCD), and 2018 IEEE International Test Conference in Asia (ITC-Asia).",
        "Prof. Li serves as an Associate Editor for IEEE Design & Test, IEEE Transactions on Very Large Scale Integration (TVLSI), and Journal of Computer Science & Technology (JCST). She served as the Steering Committee Chair for IEEE ATS from 2020 to 2022. She is currently the Chair of the China Computer Federation (CCF) Technical Committee on Integrated Circuit Design, and she served as the Chair of the CCF Technical Committee on Fault Tolerant Computing from 2016 to 2019. She is a Fellow of CCF."
      ]
    },
    {
      "id": "zhengyuan-shi",
      "name": "Zhengyuan Shi",
      "title": "Evolving EDA Algorithm with Large Language Models",
      "affiliation": "The Hong Kong University of Science and Technology (Guangzhou)",
      "label": "Invited Talk 1",
      "time": "09:40–10:10",
      "session": "morning",
      "kind": "invited",
      "photo": "assets/zhengyuan-shi.jpeg",
      "abstract": [
        "Electronic Design Automation (EDA) plays a central role in the circuit modeling and optimization of both digital and analog circuits. These tools with effective heuristic algorithms can navigate complex design spaces and meet demanding performance requirements. Over the past decades, designing such algorithms has required substantial expert knowledge and manual effort. With their powerful ability to analyze and generate code, Large Language Models (LLMs) have recently offered new opportunities to automate algorithm development. This talk first discusses the challenges of turning general approaches into effective and reliable EDA algorithm improvements. Based on our recent work, this talk shares some progress and limitations of LLM-driven algorithm evolution for EDA. It further explores opportunities to extend these ideas to a broader range of circuit modeling and optimization tasks."
      ],
      "bio": [
        "Zhengyuan Shi is an Assistant Professor at The Hong Kong University of Science and Technology, Guangzhou (HKUST-GZ). His research interests include AI/LLM for Electronic Design Automation (EDA) and AI/LLM for Algorithm Design. He has published more than 40 papers at top-tier EDA venues, including DAC and ICCAD, with 1 Best Paper Award (DAC’26), 2 Best Paper Nomination Awards (ASP-DAC’25 and DAC’22), and 1 Best Poster Award (ASP-DAC’26). He obtained his Ph.D. degree from The Chinese University of Hong Kong (CUHK) in 2026. He worked as a postdoctoral fellow at CUHK and as a visiting researcher at the University of Bremen. He also serves as a TPC member for ICCAD, ICCD, and ISEDA, and as a reviewer for IEEE TCAD and ACM TODAES."
      ]
    },
    {
      "id": "ao-zhang",
      "name": "Ao Zhang",
      "title": "A Hybrid Physics-Based and Neural Network Approach to Flexible Thin-Film Transistor Modeling",
      "affiliation": "School of Microelectronics, Nantong University",
      "label": "Invited Talk 2",
      "time": "10:10–10:40",
      "session": "morning",
      "kind": "invited",
      "photo": "assets/ao-zhang.jpeg",
      "abstract": [
        "Fully additive printed electronics has emerged as a promising technology for low-cost and flexible circuit fabrication. However, significant process variations and mechanical deformations pose challenges to accurate transistor modeling and reliable device characterization. This talk presents a hybrid physics and residual neural network framework for modeling flexible thin-film transistors (TFTs) fabricated using a fully additive printed electronics process. The proposed Trend and Residual model combines a physics-based trend equation with a residual neural network to capture nonlinear current–voltage characteristics while leveraging the interpretability of physical equations and the flexibility of neural networks. The model is evaluated under flat, stretched, compressed, and compensation conditions. Compared with conventional modeling approaches, the proposed framework demonstrates excellent agreement with measured DC I–V characteristics in both the linear and saturation regions across different mechanical conditions, highlighting its potential for accurate and robust modeling of printed flexible transistors."
      ],
      "bio": [
        "Ao Zhang received the B.S. degree from Nanjing University of Posts and Telecommunications, Nanjing, China, and the Ph.D. degree from East China Normal University, Shanghai, China. In 2019, she was a Visiting Researcher with Carleton University, Ottawa, ON, Canada, where she conducted research on artificial neural network-based transistor modeling. In 2022, she joined the School of Microelectronics, Nantong University, Nantong, China, where she is currently a Professor. Since 2024, she has also been a Visiting Scholar with Nanyang Technological University, Singapore. She has authored or co-authored more than 40 publications, including more than 20 papers in IEEE journals and transactions, and authored the book Modeling and Parameter Extraction Techniques of Silicon-Based Radio Frequency Devices (World Scientific, 2023). Her research interests include physics-based and AI-assisted modeling, parameter extraction, and on-wafer millimeter-wave characterization of active and passive semiconductor devices."
      ]
    },
    {
      "id": "shuxia-yan",
      "name": "Shuxia Yan",
      "title": "Electrothermal Transient Modeling for Power Devices Based on Neural Network Space Mapping",
      "affiliation": "School of Electronics and Information Engineering, Tiangong University",
      "label": "Invited Talk 3",
      "time": "10:40–11:10",
      "session": "morning",
      "kind": "invited",
      "photo": "assets/shuxia-yan.jpeg",
      "abstract": [
        "With the rapid advancement of radio-frequency communication and power electronic systems toward higher power and greater integration, the self-heating effect of power semiconductor devices elevates the device operating temperature, which has become a critical factor limiting system stability and performance. To quantify the temperature impact on device output characteristics and evaluate device operating conditions, it is essential to develop efficient and accurate electrothermal transient models. Conventional modeling approaches suffer from excessive computational overhead and degraded prediction accuracy when capturing transient and strongly nonlinear behaviors.",
        "This talk presents two electrothermal transient modeling methods based on neural network space mapping technology, achieving both high precision and high computational efficiency. First, an electrothermal transient modeling method using electrothermally decoupled neural space mapping is introduced. Considering the time-scale differences between electrical and thermal variations, the overall model is decoupled into electrical and thermal sub-models, which are physically coupled through the device power dissipation. Second, this talk discusses an electrothermal transient modeling method integrating two-stage power mapping and bidirectionally coupled iterative training, which is applied to electrothermal transient modeling of insulated gate bipolar transistors."
      ],
      "bio": [
        "Shuxia Yan received the B.Eng. degree in communication engineering from Tiangong University, Tianjin, China, in 2010, and the M.E. and Ph.D. degrees in electromagnetic field and microwave technology from Tianjin University, Tianjin, China, in 2012 and 2015, respectively. She is currently an Associate Professor with the School of Electronics and Information Engineering, Tiangong University. Her main research interests are neural-network-based methods for microwave device modeling and circuit design."
      ]
    },
    {
      "id": "yi-zeng",
      "name": "Yi Zeng",
      "title": "General Synthesis Methods for Non-Classic Microwave Filter Topologies",
      "affiliation": "Southern University of Science and Technology, Shenzhen, China",
      "label": "Invited Talk 4",
      "time": "11:10–11:40",
      "session": "morning",
      "kind": "invited",
      "photo": "assets/yi-zeng.jpeg",
      "abstract": [
        "With the evolution of the fifth generation (5G) and 5G-advanced technology, the demand for RF/microwave filters is seeing substantial growth. Meanwhile, the new generation of terrestrial- and space-based communication systems requires microwave filters with diverse topologies to meet the electrical and physical requirements of practical applications. Usually, the transversal topology is synthesized first, then reconfigured to other practical topologies via a series of transformations of the coupling matrix. However, the transformation sequences for substantial non-classic topologies required in various applications remain unknown. Therefore, in this talk, more general numerical synthesis approaches are introduced, which can cover the reconfiguration of extensive non-classical topologies for narrowband and lumped-element filter networks."
      ],
      "bio": [
        "Yi Zeng (Member, IEEE) received the B.S. degree in electronic science and technology from the Huazhong University of Science and Technology, Wuhan, China, in 2019, and the Ph.D. degree from The Chinese University of Hong Kong (CUHK), Hong Kong, in 2022.",
        "In 2022, she joined the Southern University of Science and Technology (SUSTech), Shenzhen, China, as a research assistant professor, and she is currently an Assistant Professor. Her current research interests include microwave device synthesis and design. She has authored/co-authored over 50 publications and has served as Principal Investigator on several national- and provincial-level projects. She is a reviewer of IEEE Transactions on Microwave Theory and Techniques (TMTT), IEEE Transactions on Circuits and Systems I: Regular Papers (TCAS-I), IEEE Microwave and Wireless Technology Letters (IEEE MWTL), IEEE Microwave Magazine, etc. She is also a Young Professional (YP) Affiliate Member of Technical Filter Committee (TC-5) in the IEEE Microwave Theory and Technology Society (MTT-S).",
        "Ms. Zeng was a recipient of the Hong Kong Ph.D. Fellowship."
      ]
    },
    {
      "id": "ningning-yan",
      "name": "Ningning Yan",
      "title": "High-Efficiency Millimeter-Wave ISL Antenna Arrays",
      "affiliation": "School of Microelectronics, Tianjin University",
      "label": "Invited Talk 5",
      "time": "14:00–14:30",
      "session": "afternoon",
      "kind": "invited",
      "photo": "assets/ningning-yan.jpeg",
      "abstract": [
        "Millimeter-wave technology, with its exceptional wideband characteristics and transmission capability, plays a crucial role in 5G/6G communication systems. As a core component of millimeter-wave communication devices, the performance parameters of antenna arrays have a decisive impact on the overall communication performance of the system. In particular, the loss of the feeding network, as a key metric, has become a major bottleneck restricting further performance improvement. To address this technical challenge, this talk will introduce high-gain millimeter-wave slot array antennas with bidirectional radiation characteristics, based on an integrated suspended line (ISL) platform."
      ],
      "bio": [
        "Ningning Yan received her Bachelor's degree and Ph.D. degree from the University of Electronic Science and Technology of China in 2012 and 2019, respectively. From 2016 to 2017, she studied as a joint Ph.D. student at the Applied Electromagnetics Laboratory, University of Houston, USA. Since 2019, she has been employed at Tianjin University, where she currently serves as a Professor and Ph.D. Supervisor. Her research focuses on high-radiation-efficiency quasi-planar antennas and arrays based on Substrate Integrated Suspended Line (SISL). She has received honors including Tianjin Youth Science and Technology Talent (first cohort), and the Applied Computational Electromagnetics Society (ACES 2025) Young Female Scientist Award."
      ]
    },
    {
      "id": "jianan-mu",
      "name": "Jianan Mu",
      "title": "From Chip Code Generation to Intelligent Design Closure: Toward the Future of Agentic EDA",
      "affiliation": "Institute of Computing Technology, Chinese Academy of Sciences",
      "label": "Invited Talk 6",
      "time": "14:30–15:00",
      "session": "afternoon",
      "kind": "invited",
      "photo": "assets/jianan-mu.jpeg",
      "abstract": [
        "As demand for computing power continues to grow in the era of artificial intelligence, the increasing scale and complexity of chip designs are posing significant challenges to conventional digital integrated-circuit design flows, including long design cycles, high verification costs, difficulties in performance optimization, and limited coordination across toolchains. Recently, the rapid development of artificial intelligence technologies, such as large language models and multimodal learning, has opened up new possibilities for the intelligent transformation of EDA workflows. Chip design is gradually evolving from isolated tool automation toward a new design paradigm centered on the collaboration of data, models, and intelligent agents.",
        "This talk explores the profound changes that AI is bringing to digital chip design methodologies and EDA tool flows. Starting from chip-code generation, a key front-end task, the discussion will extend to broader scenarios including design understanding, verification feedback, performance optimization, and flow coordination. Particular emphasis will be placed on how AI can evolve from an auxiliary generation tool into an intelligent design agent capable of task planning, tool invocation, result analysis, and self-correction, thereby driving chip design flows from isolated automation toward closed-loop intelligence.",
        "Looking ahead, Agentic EDA means more than simply introducing AI models into existing EDA tools. It requires intelligent agents to possess capabilities for task planning, tool coordination, result analysis, and iterative self-improvement, enabling continuous feedback and optimization throughout complex chip design processes. This paradigm shift has the potential to significantly improve chip design efficiency, verification quality, and optimization capability, and to advance digital integrated-circuit design toward a more automated, intelligent, and efficiently collaborative future."
      ],
      "bio": [
        "Jianan Mu is an Assistant Researcher at the Institute of Computing Technology (ICT), Chinese Academy of Sciences. He received his bachelor’s degree from Peking University in 2019 and his Ph.D. from ICT, Chinese Academy of Sciences, in 2024. His research focuses on intelligent and highly reliable design of domain-specific processors. He has published more than 20 papers in leading conferences and journals in the fields of EDA and AI, including DAC, ICCAD, IEEE TCAD, MICRO, and ICML. His papers were nominated for the Best Paper Award at ICCAD 2024 and ASPDAC 2025."
      ]
    },
    {
      "id": "wenyuan-liu",
      "name": "Wenyuan Liu",
      "title": "A Wiener-Type Dynamic Neural Network (DNN) Approach for Nonlinear Device Modeling",
      "affiliation": "School of Electronic Information and Artificial Intelligence, Shaanxi University of Science and Technology",
      "label": "Invited Talk 7",
      "time": "15:00–15:30",
      "session": "afternoon",
      "kind": "invited",
      "photo": "assets/wenyuan-liu.jpeg",
      "abstract": [
        "Artificial neural networks (ANNs) are powerful tools for modeling and optimization of microwave devices and circuits. Recently, dynamic neural networks have achieved good accuracy for nonlinear modeling. This talk will introduce two types of dynamic neural networks for microwave nonlinear transistor modeling.",
        "The first one is the Wiener-type dynamic neural network (DNN) approach for nonlinear device modeling. The analytical formulation of the Wiener-type DNN structure consists of a cascade of a simplified linear dynamic part and a nonlinear static part. The simplified linear dynamic equations are obtained by vector fitting, enhancing the efficiency of the model. A formulation and a sensitivity analysis technique are derived to train the Wiener-type DNN with DC, small- and large-signal data. A gradient-based training algorithm is also formulated to speed up the training of the Wiener-type DNN model. Application examples involving a GaAs metal-semiconductor field-effect transistor and a real 2 × 50 μm gate width GaAs pseudomorphic HEMT are presented. The use of the Wiener-type DNN model in harmonic balance simulations demonstrates that the Wiener-type DNN is a robust and accurate method for developing models for different types of microwave devices. These models could be implemented into circuit simulators conveniently.",
        "In addition, a novel Wiener-type DNN structure is presented to enhance the modeling accuracy of thermal effects in high-power transistor performance, which plays a key role in microwave circuit design and sensor systems. The model introduces thermal state variables into the original framework, enabling a comprehensive representation of the interplay between electrical and thermal behaviors in transistors. To facilitate accurate and efficient modeling, the DC, small-signal, and large-signal training formulas are derived, and a dedicated training algorithm is developed to expedite the learning process. The feasibility and generalizability of this innovative structure and training algorithm are demonstrated through two distinct examples: a physics-based TCAD simulation of an AlGaN/GaN high electron mobility transistor (HEMT) and a measured high-power transistor. Validations demonstrate that the proposed model provides superior accuracy in modeling the thermal effect, which indicates its potential for subsequent complex circuit design and development of microwave sensor systems."
      ],
      "bio": [
        "Wenyuan Liu (Member, IEEE) received the B.Eng. degree from Taiyuan University of Technology, Taiyuan, China, in 2012, and the Ph.D. degree from the School of Microelectronics, Tianjin University, Tianjin, China, in 2017. She is currently an Associate Professor with the School of Electronic Information and Artificial Intelligence at Shaanxi University of Science and Technology, Xi’an, China. Her current research interests include neural network-based methods for nonlinear microwave device and circuit modeling and their applications in computer-aided design for electronic circuits. Dr. Liu serves as a reviewer for many IEEE scientific publications, including IEEE Transactions on Microwave Theory and Techniques, IEEE Microwave and Wireless Technology Letters, etc."
      ]
    },
    {
      "id": "kang-zhou",
      "name": "Kang Zhou",
      "title": "AI-Driven High-Efficiency Digital Predistortion Modeling for Nonlinear Compensation of RF Power Amplifiers",
      "affiliation": "Eastern Institute of Technology, Ningbo, China",
      "label": "Invited Talk 8",
      "time": "15:30–16:00",
      "session": "afternoon",
      "kind": "invited",
      "photo": "assets/kang-zhou.png",
      "abstract": [
        "RF power amplifiers (PAs) are inherently nonlinear and will introduce distortion that degrades the quality of transmitted signals, making digital predistortion (DPD) a key linearization technique in modern wireless systems. Although neural network (NN)-based DPD models offer powerful nonlinear modeling capability, they often suffer from high computational complexity and limited interpretability, which hinders their deployment in resource-constrained yet performance-critical scenarios. This talk presents three interpretable AI-driven frameworks for DPD modeling of nonlinear RF PAs. Firstly, an input amplitude-based adaptive tuning (AT) technique leverages an input selection module and a parameter tuning module to exploit the structural prior knowledge of Doherty PAs, particularly the operating state of the peak PA, enabling NN-DPD models to track the dynamic behavioral changes induced by active load modulation at lower complexity. Secondly, a learnable edge-located activation neural network (LEANN) embeds learnable univariate functions as activation functions on network edges, enhancing both the flexibility and interpretability of nonlinear modeling. Meanwhile, a logarithmic regularization pruning method achieves model sparsification by reducing the similarity between activation functions. Thirdly, a topology-evolving neural network (TENN) employs an evolutionary algorithm to automatically optimize the network topology starting from a minimal structure, progressively establishing internal connections according to their importance, thereby achieving excellent linearization performance at low complexity without relying on predefined network architectures. By integrating physical prior knowledge, learnable activation functions, and evolutionary topology optimization, these studies provide a systematic approach toward interpretable, efficient, and high-performance AI-driven DPD for next-generation wireless transmitters."
      ],
      "bio": [
        "Kang Zhou is currently an Associate Professor with Eastern Institute of Technology (EIT), Ningbo, China. He is also a Doctoral Supervisor with Shanghai Jiao Tong University and University of Science and Technology of China. He is a Senior Member of IEEE, a Senior Member of Chinese Institute of Electronics (CIE), and a Senior Member of International Union of Radio Science (URSI). He is a technical committee member of IEEE MTT-S TC-4 Microwave Passive Components and Transmission Line Structures. He received the Excellent Young Scientists Fund from the National Natural Science Foundation of China (NSFC) in 2023. He was listed among the World’s Top 2% Scientists by Stanford University and Elsevier from 2024 to 2026. He has authored/co-authored more than 80 articles in peer-reviewed international journals and conference proceedings with more than 1,900 citations and an h-index of 23 (Source: Google Scholar). His research interests involve microwave and millimeter-wave multifunctional filtering devices, multibeam and phased-array antennas, as well as terahertz integrated circuits and systems."
      ]
    },
    {
      "id": "wei-zhang",
      "name": "Wei Zhang",
      "title": "AI-Driven Inverse Design of Microwave Devices",
      "affiliation": "School of Electronic Engineering, Beijing University of Posts and Telecommunications",
      "label": "Invited Talk 9",
      "time": "16:00–16:30",
      "session": "afternoon",
      "kind": "invited",
      "photo": "assets/wei-zhang.jpeg",
      "abstract": [
        "The design of microwave devices often involves complex EM responses, high-dimensional design parameters, and computationally expensive full-wave simulations. Conventional design approaches typically rely on iterative electromagnetic simulations and optimization procedures, which can be time-consuming, particularly for devices with stringent performance requirements. Recent advances in artificial intelligence and surrogate modeling have provided new opportunities for improving the efficiency of microwave device design.",
        "This talk presents AI-driven approaches for the modeling, optimization, and inverse design of microwave devices. First, neural network-based surrogate modeling techniques are introduced to efficiently establish nonlinear relationships between device geometries and electromagnetic responses. Building upon these models, optimization strategies are discussed to enable efficient exploration of design spaces and improve device performance under multiple design objectives. Furthermore, inverse design approaches are presented to directly identify suitable device parameters from desired electromagnetic characteristics, providing an alternative to conventional trial-and-error design procedures. Finally, representative applications in microwave device design are discussed to illustrate the potential of integrating artificial intelligence with electromagnetic simulation and optimization. These approaches provide promising solutions for accelerating microwave device development and advancing intelligent electromagnetic design automation."
      ],
      "bio": [
        "Wei Zhang received the B.Eng. degree from Shandong University, Shandong, China, in 2013. He received the Ph.D. degree from the School of Microelectronics, Tianjin University, and the Department of Electronics, Carleton University, Ottawa, ON, Canada, in 2020. From 2020 to 2021, he was a Postdoctoral Fellow in the Department of Electronics at Carleton University, Ottawa, ON, Canada. He is currently an Associate Researcher with the School of Electronic Engineering at Beijing University of Posts and Telecommunications, Beijing, China.",
        "His research interests include neural-network-based methods for microwave device modeling, electromagnetic centric multiphysics modeling and optimization, space mapping algorithms and surrogate model optimization, and computational electromagnetics. Dr. Zhang serves as a reviewer for many IEEE scientific publications, including IEEE Transactions on Microwave Theory and Techniques, IEEE Antennas and Wireless Propagation Letters, etc. He received the Best Paper Award at the IEEE NEMO 2025."
      ]
    },
    {
      "id": "chenhao-chu",
      "name": "Chenhao Chu",
      "title": "AI-Assisted RFIC Design: From EM Modeling to Design Reuse",
      "affiliation": "Department of Information Technology and Electrical Engineering, ETH Zurich, Switzerland",
      "label": "Invited Talk 10",
      "time": "16:30–17:00",
      "session": "afternoon",
      "kind": "invited",
      "photo": "assets/chenhao-chu.png",
      "abstract": [
        "Radio-frequency integrated circuits (RFICs) are foundational for next-generation wireless communication and sensing systems, yet their design remains time-consuming and highly dependent on expert knowledge. AI-assisted RFIC design is emerging as a promising approach to accelerate specs-to-layout automation and shorten layout-to-silicon development cycles.",
        "In this talk, I will first introduce the template-seeded pixelated approach for efficient electromagnetic (EM) data generation that balances design space exploration and design data exploitation. Then, I will present the transfer learning-assisted approach for EM surrogate model reuse and design migration across technology nodes and operating frequencies, followed by a discussion of AI-assisted backend-only RFIC redesign to accelerate layout-to-silicon design iterations. Finally, I will conclude with the challenges and opportunities in AI-for-RFIC research area."
      ],
      "bio": [
        "Chenhao Chu is a Lecturer and Established Researcher with the Integrated Devices, Electronics, And Systems (IDEAS) Group in the Department of Information Technology and Electrical Engineering (D-ITET) at ETH Zurich, Switzerland. He received his Ph.D. degree in Electronic Engineering from University College Dublin, Ireland. His research interests include AI-assisted RFIC design, III-V and silicon circuit co-design for heterogeneous integration, and energy-efficient RF integrated circuits and front ends. He serves as Vice Chair of the IEEE MTT-S Electronic Information Committee and on the Technical Program Committees of the IEEE IMS, RWW, and DATE conferences. He is a 2026 IEEE MTT-S Outstanding Young Professional Lecturer."
      ]
    }
  ],
  "seniors": [
    {
      "id": "qi-jun-zhang",
      "name": "Qi-Jun Zhang",
      "role": "Advisory Committee Chair",
      "affiliation": "Carleton University",
      "bio": [
        "Qi-Jun Zhang received the B.Eng. degree from Nanjing University of Science and Technology, Nanjing, China, in 1982, and the Ph.D. degree in electrical engineering from McMaster University, Hamilton, ON, Canada, in 1987. He was a Research Engineer with Optimization Systems Associates Inc., Dundas, ON, Canada, from 1988 to 1990, developing advanced optimization software for microwave modeling and design. In 1990, he joined the Department of Electronics, Carleton University, Ottawa, ON, Canada, where he is currently a Chancellor's Professor. He is an author of the book Neural Networks for RF and Microwave Design (Boston, MA, USA: Artech House, 2000) and a co-editor of the book Modeling and Simulation of High-Speed VLSI Interconnects (Boston, MA, USA: Kluwer, 1994) and Simulation-Driven Design Optimization and Modeling for Microwave Engineering (London, U.K.: Imperial College Press, 2013). His research interests include modeling, optimization, and machine learning for high-speed/high-frequency electronic design. He has more than 360 publications in the area.",
        "Dr. Zhang is a Life Fellow of IEEE as well as a Fellow of the Canadian Academy of Engineering and the Engineering Institute of Canada. He was twice a Guest Editor of the Special Issues on Applications of ANN for RF/Microwave Design for the International Journal of RF/Microwave Computer-Aided Engineering in 1999 and 2002, a Guest Co-Editor of the Special Issue on Machine Learning in Microwave Engineering for IEEE Microwave Magazine in 2021, and a Guest-Editor of the Special Issue of AI and Machine Learning Technologies for Microwaves for IEEE Transactions on Microwave Theory and Techniques. He is a Topic Editor of IEEE Journal of Microwaves. He is also the Co-Chair of the Working Group on AI and Machine Learning Based Technologies for Microwaves in the Future Directions Committee of the IEEE Microwave Theory and Techniques (MTT) Society."
      ],
      "photo": "assets/qi-jun-zhang-senior.jpg",
      "evening": true
    },
    {
      "id": "qing-huo-liu",
      "name": "Qing Huo Liu",
      "role": "General Co-Chair",
      "affiliation": "Eastern Institute of Technology, Ningbo",
      "bio": [
        "Qing Huo Liu is a Chair Professor at the Eastern Institute of Technology, Ningbo. He studied physics at Xiamen University, earning both bachelor’s and master’s degrees, before completing his doctorate in electrical and computer engineering at the University of Illinois at Urbana-Champaign. His work addresses computational electromagnetics, computational acoustics and inverse problems.",
        "His career has spanned industrial research and university teaching. After a postdoctoral appointment at Illinois, he worked at Schlumberger-Doll Research as a research scientist and program leader. He subsequently joined New Mexico State University, then served on the faculty of Duke University from 1999 to 2022. He moved to the Eastern Institute of Technology in 2022.",
        "Professor Liu holds Fellow distinctions from IEEE, Optica, the Acoustical Society of America and the Electromagnetics Academy. He was the first Editor-in-Chief of the IEEE Journal on Multiscale and Multiphysics Computational Techniques, serving from 2015 to 2018. His honors include the U.S. Presidential Early Career Award for Scientists and Engineers and awards from the Applied Computational Electromagnetics Society and the IEEE Antennas and Propagation Society."
      ],
      "photo": "assets/qing-huo-liu-senior.png",
      "evening": false
    },
    {
      "id": "zhizhang-david-chen",
      "name": "Zhizhang (David) Chen",
      "role": "Invited Senior Professional",
      "affiliation": "Dalhousie University",
      "bio": [
        "Zhizhang (David) Chen (Fellow, IEEE) received the B.Eng. degree in radio engineering from Fuzhou University, Fuzhou, Fujian, China, in 1982, the master’s degree in radio engineering from Southeast University, Nanjing, China, in 1986, and the Ph.D. degree in electrical engineering from the University of Ottawa, ON, Canada, in 1992.",
        "He was a Natural Sciences and Engineering Research Council (NSERC) Post-Doctoral Fellow with McGill University, Montreal, QC, Canada, in 1993. He is currently a Professor in the Department of Electrical and Computer Engineering, Dalhousie University, Halifax, NS, Canada, and is the former Head of the Department. He has been an Adjunct or a Visiting Professor with the University of Nottingham, Nottingham, U.K.; École Nationale Supérieure des Télécommunications de Bretagne, Brest, France; Shanghai Jiao Tong University, Shanghai, China; Fuzhou University; The Hong Kong University of Science and Technology, Hong Kong; and the University of Electronic Science and Technology of China, Chengdu, China. He has authored and co-authored over 410 journal and conference papers in computational electromagnetics, RF/microwave electronics, antennas, and wireless technologies. He was one of the originators of the unconditionally stable methods that have been highly cited and used. He and his team also developed several nonlinear ultrawideband receivers and planar wireless power transfer transmitting and receiving structures. His current research interests include time-domain electromagnetic modeling techniques, antennas, wideband wireless communication and sensing systems, and wireless power technology.",
        "Prof. Chen is a Fellow of the Canadian Academy of Engineering and the Engineering Institute of Canada. He received the 2005 Nova Scotia Engineering Award, the 2006 Dalhousie Graduate Teaching Award, the 2007 and 2015 Dalhousie Faculty of Engineering Research Award, the 2013 IEEE Canada Fessenden Medal, and the Dalhousie University Professorship. He was the Founding Chair of the joint Signal Processing and Microwave Theory and Techniques Chapter of IEEE Atlantic Canada, the Chair of the IEEE Canada Atlantic Section, and a member of the Board of Directors for IEEE Canada, from 2000 to 2001. He has served as a Guest Editor for IEEE Transactions on Microwave Theory and Techniques, IEEE Microwave Magazine, IEEE Journal of Electromagnetics, RF and Microwave in Medicine and Biology, and the International Journal of Numerical Modeling (John Wiley) and an Associate Editor for IEEE Journal of Multiscale and Multiphysics Computational Techniques. He has also served as a Track Editor for IEEE Transactions on Microwave Theory and Techniques, a Topic Editor for IEEE Journal of Microwaves, and an Elected Member of the Ad-Com of IEEE Antennas and Propagation Society."
      ],
      "photo": "assets/zhizhang-david-chen-senior.png",
      "evening": true
    },
    {
      "id": "huawei-li",
      "name": "Huawei Li",
      "role": "General Co-Chair and Keynote Speaker",
      "affiliation": "Institute of Computing Technology, Chinese Academy of Sciences",
      "bio": [
        "Huawei Li is a Professor in the Institute of Computing Technology (ICT), Chinese Academy of Sciences (CAS), and the Vice Director of the State Key Lab of Processors. She received her Ph.D. in Computer Science from ICT, CAS, in 2001. Her current research interests include electronic design automation, testing and fault tolerance of VLSI/SOC circuits, and automatic design of domain-specific processors. She has published over 300 technical papers in these areas. She was a recipient of the 2012 National Technology Invention Award of China, a recipient of the Best Paper Awards of 2023 and 2003 IEEE Asian Test Symposium (ATS), 2021 IEEE Transactions on Computers (TC), 2019 IEEE International Conference on Computer Design (ICCD), and 2018 IEEE International Test Conference in Asia (ITC-Asia).",
        "Prof. Li serves as an Associate Editor for IEEE Design & Test, IEEE Transactions on Very Large Scale Integration (TVLSI), and Journal of Computer Science & Technology (JCST). She served as the Steering Committee Chair for IEEE ATS from 2020 to 2022. She is currently the Chair of the China Computer Federation (CCF) Technical Committee on Integrated Circuit Design, and she served as the Chair of the CCF Technical Committee on Fault Tolerant Computing from 2016 to 2019. She is a Fellow of CCF."
      ],
      "photo": "assets/huawei-li-senior.jpg",
      "evening": false
    }
  ],
  "committee": [
    {
      "name": "Qi-Jun Zhang",
      "role": "Advisory Committee Chair",
      "affiliation": "Carleton University",
      "photo": "assets/qi-jun-zhang-committee.png",
      "email": null
    },
    {
      "name": "Jinyuan Cui",
      "role": "General Chair",
      "affiliation": "Nanyang Technological University",
      "photo": "assets/jinyuan-cui-committee.jpg",
      "email": "jinyuan.cui@ntu.edu.sg"
    },
    {
      "name": "Qing Huo Liu",
      "role": "General Co-Chairs",
      "affiliation": "Eastern Institute of Technology, Ningbo",
      "photo": "assets/qing-huo-liu-committee.png",
      "email": null
    },
    {
      "name": "Huawei Li",
      "role": "General Co-Chairs",
      "affiliation": "Institute of Computing Technology, Chinese Academy of Sciences",
      "photo": "assets/huawei-li-committee.jpg",
      "email": null
    },
    {
      "name": "Feng Feng",
      "role": "General Co-Chairs",
      "affiliation": "Tianjin University",
      "photo": "assets/feng-feng-committee.jpg",
      "email": null
    },
    {
      "name": "Wei Zhang",
      "role": "Technical Program Chair",
      "affiliation": "Beijing University of Posts and Telecommunications",
      "photo": "assets/wei-zhang-committee.jpg",
      "email": "weizhang13@bupt.edu.cn"
    },
    {
      "name": "Yujie Zhang",
      "role": "Technical Program Co-Chairs",
      "affiliation": "Nanyang Technological University",
      "photo": "assets/yujie-zhang-committee.png",
      "email": null
    },
    {
      "name": "Qingtao Sun",
      "role": "Technical Program Co-Chairs",
      "affiliation": "Eastern Institute of Technology, Ningbo",
      "photo": "assets/qingtao-sun-committee.png",
      "email": null
    },
    {
      "name": "Zhengyuan Shi",
      "role": "Technical Program Co-Chairs",
      "affiliation": "The Hong Kong University of Science and Technology (Guangzhou)",
      "photo": "assets/zhengyuan-shi-committee.png",
      "email": null
    },
    {
      "name": "Yihua Chen",
      "role": "Local Arrangements",
      "affiliation": "Nanyang Technological University",
      "photo": "assets/yihua-chen-committee.jpg",
      "email": "yihua.chen@ntu.edu.sg"
    },
    {
      "name": "Jiaqi Wang",
      "role": "Website",
      "affiliation": "Tsinghua University",
      "photo": "assets/jiaqi-wang-committee.jpg",
      "email": null
    }
  ],
  "registration": "https://ntu-sg.zoom.us/meeting/register/dBQAHjYsTua8Z0Olh68Lyg"
};
