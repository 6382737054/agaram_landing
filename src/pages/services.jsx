import React from 'react';
import { 
  Shield, 
  Star, 
  FileText, 
  Building,
  Users,
  Clock,
  ChevronRight,
  Award,
  Globe,
  ScrollText,
  Crown,
  Scale,
  BookOpen,
  BarChart,
  Network,
  Landmark
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, status }) => (
  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 border border-amber-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 opacity-20 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
    
    <div className="flex flex-col h-full relative">
      <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-lg shadow-sm w-fit mb-4 group-hover:shadow-md transition-all">
        <Icon className="w-6 h-6 text-amber-700" />
      </div>
      
      <h3 className="text-xl font-semibold text-amber-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow text-sm">{description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          status === 'Active' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-amber-100 text-amber-700'
        }`}>
          {status}
        </span>
        <button className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors group">
          <span className="text-sm font-medium">Access Service</span>
          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const StatsCard = ({ icon: Icon, title, value }) => (
  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300 group">
    <div className="flex items-center gap-4">
      <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-lg shadow-sm group-hover:shadow-md transition-all">
        <Icon className="w-6 h-6 text-amber-700" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-amber-900">{value}</h3>
        <p className="text-sm text-amber-700">{title}</p>
      </div>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: Scale,
      title: "Administrative Reforms",
      description: "Streamlining governance processes and implementing modern administrative practices for enhanced efficiency.",
      status: "Active"
    },
    {
      icon: ScrollText,
      title: "Policy Implementation",
      description: "Execution and monitoring of government policies and directives across departments.",
      status: "Active"
    },
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Coordination and oversight of major infrastructure projects and urban development initiatives.",
      status: "Active"
    },
    {
      icon: Network,
      title: "Inter-Department Coordination",
      description: "Facilitating seamless communication and collaboration between various government departments.",
      status: "Active"
    },
    {
      icon: BookOpen,
      title: "Training & Development",
      description: "Comprehensive training programs for civil servants and administrative staff.",
      status: "Active"
    },
    {
      icon: BarChart,
      title: "Performance Monitoring",
      description: "Advanced analytics and reporting systems for tracking administrative performance.",
      status: "Active"
    },
    {
      icon: Globe,
      title: "Digital Governance",
      description: "Implementation of e-governance solutions and digital transformation initiatives.",
      status: "Active"
    },
    {
      icon: Landmark,
      title: "Public Service Delivery",
      description: "Efficient delivery of government services to citizens through modern channels.",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Adjusted Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 sm:p-4 rounded-full shadow-md">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-amber-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-900 tracking-wide">
              GOVERNMENT SERVICES
            </h1>
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 sm:p-4 rounded-full shadow-md">
              <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-amber-700" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent w-32"></div>
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent w-32"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-medium">
            Comprehensive Administrative Services Supporting Excellence in Governance
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard 
            icon={Award} 
            title="Success Rate"
            value="99.8%"
          />
          <StatsCard 
            icon={Users} 
            title="Citizens Served"
            value="10M+"
          />
          <StatsCard 
            icon={Clock} 
            title="Average Response"
            value="24hrs"
          />
          <StatsCard 
            icon={FileText} 
            title="Digital Services"
            value="200+"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        {/* Optional: Add animation keyframes to your global CSS */}
        <style jsx global>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-up {
            animation: fadeUp 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ServicesPage;