import React from 'react';
import { 
  Scroll, 
  Star, 
  Calendar, 
  Award, 
  BookOpen, 
  Shield, 
  Users, 
  LandPlot,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

const ChiefSecretaryCard = ({ name, service, period, imageUrl }) => (
  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-4 sm:p-6 border border-amber-200 hover:shadow-xl transition-all duration-300 group hover:translate-y-[-4px] w-full max-w-sm mx-auto">
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-amber-100 shadow-lg mb-4 group-hover:border-amber-300 transition-all duration-300">
        <img 
          src={imageUrl || "/placeholder-profile.jpg"} 
          alt={name}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-2 px-2">{name}</h3>
      <div className="text-amber-700 font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base flex-wrap justify-center">
        <GraduationCap className="w-4 h-4 flex-shrink-0" />
        <span>{service}</span>
      </div>
      <div className="flex items-center text-gray-600 text-xs sm:text-sm bg-amber-50 px-3 sm:px-4 py-1.5 rounded-full border border-amber-100">
        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-amber-600 flex-shrink-0" />
        <span>{period}</span>
      </div>
    </div>
  </div>
);

const StatsBox = ({ icon: Icon, title, value }) => (
  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-4 sm:p-6 text-center border border-amber-200 hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] w-full">
    <div className="bg-amber-100/50 p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:bg-amber-200/50 transition-all duration-300">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{value}</p>
  </div>
);

const CSRollOfHonour = () => {
  const chiefSecretaries = [
    {
      name: "C A RAMAKRISHNAN, ICS",
      service: "Indian Civil Service",
      period: "10/11/1965 - 13/11/1969",
      imageUrl: "/test1.png"
    },
    {
      name: "E P ROYAPPA, IAS",
      service: "Indian Administrative Service",
      period: "14/11/1969 - 12/04/1971",
      imageUrl: "/test1.png"
    },
    {
      name: "P SABANAYAGAM, IAS",
      service: "Indian Administrative Service",
      period: "12/04/1971 - 11/03/1976",
     imageUrl: "/test1.png"
    },
    {
      name: "V KARTHIKEYAN, IAS",
      service: "Indian Administrative Service",
      period: "12/03/1976 - 15/02/1977",
 imageUrl: "/test1.png"
    },
    {
      name: "C V R PANICKER, IAS",
      service: "Indian Administrative Service",
      period: "16/02/1977 - 30/06/1977",
   imageUrl: "/test1.png"
    },
    {
      name: "V KARTHIKEYAN, IAS",
      service: "Indian Administrative Service",
      period: "30/06/1977 - 21/08/1981",
  imageUrl: "/test1.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            <div className="bg-amber-100/50 p-2 sm:p-3 md:p-4 rounded-full w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
              <Shield className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-amber-700" />
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-amber-900 tracking-wide">
              CHIEF SECRETARIES
            </h1>
            <div className="bg-amber-100/50 p-2 sm:p-3 md:p-4 rounded-full w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
              <Award className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-amber-700" />
            </div>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-amber-800 mb-4 sm:mb-6">
            ROLL OF HONOUR
          </h2>
          
          <div className="flex justify-center items-center gap-3 text-amber-700 mb-4 sm:mb-6">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent w-12 sm:w-16 md:w-24"></div>
            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-amber-400" />
            <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent w-12 sm:w-16 md:w-24"></div>
          </div>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg font-medium leading-relaxed px-2">
            Honoring the Illustrious Legacy of Distinguished Leaders who have 
            shaped the Administrative Excellence of Tamil Nadu through their 
            Visionary Leadership and Dedicated Service
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          <StatsBox 
            icon={Users}
            title="Legacy of Service"
            value="Serving Since 1965"
          />
          <StatsBox 
            icon={LandPlot}
            title="Jurisdictional Scope"
            value="33 Districts & Beyond"
          />
          <StatsBox 
            icon={TrendingUp}
            title="Administrative Impact"
            value="Transforming Governance"
          />
        </div>

        {/* Chief Secretaries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {chiefSecretaries.map((cs, index) => (
            <div 
              key={index} 
              className="animate-fade-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ChiefSecretaryCard
                name={cs.name}
                service={cs.service}
                period={cs.period}
                imageUrl={cs.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSRollOfHonour;