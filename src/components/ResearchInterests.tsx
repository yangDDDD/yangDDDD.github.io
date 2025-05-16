
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchInterests = () => {
  const researchAreas = [
    {
      title: "智慧城市与数字规划",
      description: "研究如何利用大数据、物联网和人工智能技术优化城市规划与管理，提高城市运行效率与宜居性。",
    },
    {
      title: "可持续交通系统",
      description: "研究绿色出行方式、公共交通优化以及交通与土地使用的协调发展，减少碳排放，促进可持续城市发展。",
    },
    {
      title: "城市韧性与气候适应",
      description: "探索城市应对气候变化、自然灾害和公共卫生危机的规划策略，提升城市系统的适应力和恢复力。",
    },
    {
      title: "社区规划与社会公平",
      description: "研究包容性规划实践，关注弱势群体的空间正义问题，促进社区参与和多元共治。",
    },
  ];

  return (
    <section id="research" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-8">研究方向</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-navy">
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="section-subtitle mb-4">当前研究项目</h3>
          <ul className="space-y-4">
            <li className="flex">
              <span className="text-navy font-semibold mr-2">•</span>
              <div>
                <p className="font-medium">基于多源数据的城市空间活力评价与优化策略研究</p>
                <p className="text-gray-600 text-sm">国家自然科学基金青年项目（2023-2026）</p>
              </div>
            </li>
            <li className="flex">
              <span className="text-navy font-semibold mr-2">•</span>
              <div>
                <p className="font-medium">大都市区绿色交通系统规划方法与评价体系</p>
                <p className="text-gray-600 text-sm">省部级重点研发计划（2022-2025）</p>
              </div>
            </li>
            <li className="flex">
              <span className="text-navy font-semibold mr-2">•</span>
              <div>
                <p className="font-medium">后疫情时代城市公共空间优化设计研究</p>
                <p className="text-gray-600 text-sm">校级研究项目（2023-2024）</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
