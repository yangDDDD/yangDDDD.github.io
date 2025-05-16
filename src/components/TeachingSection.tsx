
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Calendar, Users } from "lucide-react";

const TeachingSection = () => {
  const courses = [
    {
      code: "UP101",
      name: "城市规划原理",
      description: "介绍城市规划的基本理论、历史演变和当代实践，培养学生理解城市发展动力机制与规划干预逻辑的能力。",
      term: "秋季学期",
      level: "本科生",
    },
    {
      code: "UP202",
      name: "城市交通规划",
      description: "学习城市交通系统的规划原理与方法，分析交通与土地利用的互动关系，探讨绿色交通发展策略。",
      term: "春季学期",
      level: "本科生",
    },
    {
      code: "UP305",
      name: "大数据与智慧城市",
      description: "探索如何利用大数据、物联网等新兴技术支持城市规划决策，培养学生数据分析与可视化能力。",
      term: "秋季学期",
      level: "研究生",
    },
    {
      code: "UP401",
      name: "城市规划研究方法",
      description: "介绍定量与定性研究方法，指导学生设计研究方案、收集分析数据并撰写学术论文。",
      term: "春季学期",
      level: "研究生",
    },
  ];

  return (
    <section id="teaching" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-8">教学</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className={`h-2 ${course.level === "研究生" ? "bg-navy" : "bg-gold"}`}></div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{course.name}</span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
                    {course.code}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{course.description}</p>
                <div className="flex flex-wrap gap-y-2">
                  <div className="flex items-center w-1/2">
                    <Calendar className="h-4 w-4 mr-2 text-navy" />
                    <span className="text-sm text-gray-600">{course.term}</span>
                  </div>
                  <div className="flex items-center w-1/2">
                    <Users className="h-4 w-4 mr-2 text-navy" />
                    <span className="text-sm text-gray-600">{course.level}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="section-subtitle flex items-center">
            <Book className="h-5 w-5 mr-2 text-navy" /> 
            学生指导
          </h3>
          <div className="mt-4 space-y-6">
            <div>
              <h4 className="font-medium text-navy">研究生论文指导方向</h4>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>• 基于多源数据的城市空间特征分析</li>
                <li>• 绿色交通系统规划与评价</li>
                <li>• 社区规划与社会公平</li>
                <li>• 气候适应性城市设计</li>
                <li>• 历史街区保护与更新</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-navy">本科生毕业设计指导</h4>
              <p className="mt-2 text-gray-700">
                每年指导3-5名本科生完成毕业设计，主题包括社区更新规划、城市公共空间改造、绿色交通廊道设计等。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
