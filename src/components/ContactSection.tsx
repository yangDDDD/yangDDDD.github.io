
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "消息已发送",
      description: "感谢您的来信，我们会尽快回复。",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-8">联系方式</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="section-subtitle mb-6">联系信息</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-navy mt-1" />
                <div>
                  <p className="font-medium">邮箱</p>
                  <p className="text-gray-600">professor.wang@university.edu.cn</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-navy mt-1" />
                <div>
                  <p className="font-medium">电话</p>
                  <p className="text-gray-600">+86 123 4567 8910</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-navy mt-1" />
                <div>
                  <p className="font-medium">办公室</p>
                  <p className="text-gray-600">城市规划系 建筑学院123室</p>
                  <p className="text-gray-600">某某大学，某某市 100000</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="section-subtitle mb-4">办公时间</h3>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">周一至周五</td>
                    <td className="py-2 text-gray-600">9:00 - 17:00</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">学生答疑时间</td>
                    <td className="py-2 text-gray-600">周三 14:00 - 16:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle mb-6">发送消息</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="姓名" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="邮箱" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Input 
                  placeholder="主题" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="消息内容" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="bg-navy hover:bg-navy-light w-full">
                发送消息
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
