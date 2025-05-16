
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const [activeTab, setActiveTab] = useState("journal");
  
  const journals = [
    {
      title: "基于机器学习的城市土地利用变化预测模型研究",
      authors: "王XX, 李XX, 张XX",
      journal: "城市规划学刊",
      year: "2024",
      volume: "39(3)",
      pages: "45-58",
    },
    {
      title: "新型城镇化背景下小城镇空间治理模式创新研究",
      authors: "王XX, 陈XX",
      journal: "城市发展研究",
      year: "2023",
      volume: "30(5)",
      pages: "78-86",
    },
    {
      title: "城市街道空间品质评价指标体系构建与应用",
      authors: "李XX, 王XX, 赵XX",
      journal: "规划师",
      year: "2023",
      volume: "39(2)",
      pages: "112-118",
    },
    {
      title: "后疫情时代社区韧性提升策略研究",
      authors: "王XX, 刘XX",
      journal: "城市规划",
      year: "2022",
      volume: "46(7)",
      pages: "67-75",
    },
    {
      title: "智慧城市建设中的数据治理问题与对策",
      authors: "王XX",
      journal: "城市发展研究",
      year: "2021",
      volume: "28(4)",
      pages: "23-31",
    },
  ];
  
  const conferences = [
    {
      title: "基于空间句法的历史街区空间结构分析与保护更新策略",
      authors: "王XX, 黄XX",
      conference: "中国城市规划年会",
      location: "北京",
      year: "2023",
    },
    {
      title: "城市绿色基础设施规划中的多源数据整合方法研究",
      authors: "王XX, 钱XX",
      conference: "中国地理信息科学理论与方法学术年会",
      location: "上海",
      year: "2022",
    },
    {
      title: "面向碳中和的城市交通系统优化策略",
      authors: "王XX",
      conference: "中国智能交通学术年会",
      location: "深圳",
      year: "2022",
    },
  ];

  return (
    <section id="publications" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-8">发表论文</h2>
        
        <div className="flex justify-center mb-6">
          <div className="flex border rounded-lg overflow-hidden">
            <Button 
              variant={activeTab === "journal" ? "default" : "ghost"}
              className={`rounded-none ${activeTab === "journal" ? "bg-navy text-white" : ""}`}
              onClick={() => setActiveTab("journal")}
            >
              期刊论文
            </Button>
            <Button 
              variant={activeTab === "conference" ? "default" : "ghost"}
              className={`rounded-none ${activeTab === "conference" ? "bg-navy text-white" : ""}`}
              onClick={() => setActiveTab("conference")}
            >
              会议论文
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {activeTab === "journal" ? (
            <ul className="divide-y">
              {journals.map((paper, index) => (
                <li key={index} className="py-4 first:pt-0 last:pb-0">
                  <p className="font-medium text-navy">{paper.title}</p>
                  <p className="text-gray-700">{paper.authors}</p>
                  <p className="text-gray-600 text-sm">
                    <em>{paper.journal}</em>, {paper.year}, {paper.volume}: {paper.pages}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="divide-y">
              {conferences.map((paper, index) => (
                <li key={index} className="py-4 first:pt-0 last:pb-0">
                  <p className="font-medium text-navy">{paper.title}</p>
                  <p className="text-gray-700">{paper.authors}</p>
                  <p className="text-gray-600 text-sm">
                    {paper.conference}, {paper.location}, {paper.year}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Publications;
