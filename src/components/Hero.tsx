
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-navy py-16 md:py-24 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              王教授
            </h1>
            <h2 className="text-xl md:text-2xl text-gold-light mb-6">
              规划系助理教授
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-prose">
              城市规划与可持续发展专家，专注于智慧城市、绿色交通和城市韧性研究，致力于通过跨学科方法解决复杂的城市问题。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gold hover:bg-gold-light text-navy-dark">
                <FileText className="mr-2 h-4 w-4" /> 下载简历
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                联系我
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="aspect-square w-4/5 ml-auto rounded-full overflow-hidden border-4 border-gold shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="王教授照片" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
