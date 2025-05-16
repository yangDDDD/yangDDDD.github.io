
import { Link } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-serif text-xl font-bold">王教授</h3>
            <p className="text-gray-300 mt-1">规划系助理教授</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#research" className="text-gray-300 hover:text-white transition-colors">研究方向</a>
            <a href="#publications" className="text-gray-300 hover:text-white transition-colors">发表论文</a>
            <a href="#teaching" className="text-gray-300 hover:text-white transition-colors">教学</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">联系方式</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} 版权所有。保留所有权利。</p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Google Scholar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">ResearchGate</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.564.376-.94.94-1.134 1.7h-.001a11.867 11.867 0 0 0-.276 3.004h3.418v.703h-3.462c0 .36.017 1.062.05 2.11.033 1.05.034 1.752.034 2.111h3.443v.704h-3.4c-.022 3.088-.142 5.156-.275 6.205-.191.77-.567 1.333-1.131 1.709a3.222 3.222 0 0 1-2.073.565c-.515 0-.937-.057-1.269-.17v-.765c.235.045.537.067.907.067.478 0 .861-.127 1.149-.384.288-.255.487-.678.597-1.268.142-.754.227-2.454.268-4.96h-2.78v-.703h2.811l.001-2.066c0-1.066.011-1.79.036-2.154h-2.848v-.704h2.892c.023-.99.057-1.804.101-2.443.044-.638.101-1.101.171-1.389.215-.871.633-1.487 1.254-1.848.62-.36 1.34-.54 2.161-.54.516 0 .939.058 1.269.17v.769a6.36 6.36 0 0 0-.907-.071z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">ORCID</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.69 19.698a.124.124 0 0 1-.124.124H5.432a.125.125 0 0 1-.124-.124V4.302c0-.069.055-.124.124-.124h13.135c.069 0 .124.055.124.124v15.396z" />
                <path d="M9.21 7.05h-.974v9.852h.974V7.05zM8.684 5.518a.683.683 0 1 0-.001 1.366.683.683 0 0 0 .001-1.366zm7.065 3.159c-.724-.713-1.724-1.064-2.907-1.064-1.058 0-1.94.284-2.563.844v-.407h-1.532v9.852h1.547v-5.095c0-1.61.883-2.445 2.304-2.445 1.223 0 1.918.811 1.918 2.233v5.307h1.548v-5.652c0-1.488-.435-2.636-1.315-3.573z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
