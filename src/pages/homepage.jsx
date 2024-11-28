import React from 'react';
import { 
  Bell, 
  FileText, 
  Users, 
  Calendar,
  TrendingUp,
  Globe,
  CheckCircle,
  AlertCircle,
  FileCheck,
  Award,
  ArrowRight
} from 'lucide-react';

// Enhanced Marquee Card with smooth animation
const MarqueeCard = ({ title, items }) => (
  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 border border-amber-200">
    <h3 className="text-amber-900 font-semibold mb-4 flex items-center gap-3">
      <div className="bg-amber-100 p-2 rounded-lg">
        <Bell className="w-5 h-5 text-amber-700" />
      </div>
      {title}
    </h3>
    <div className="relative overflow-hidden h-[300px]">
      <div className="animate-marquee absolute flex flex-col gap-3 w-full">
        {[...items, ...items, ...items].map((item, index) => (
          <div 
            key={index} 
            className="py-3 px-4 text-gray-700 flex items-center gap-3 hover:bg-amber-50 rounded-lg transition-colors duration-300 border border-transparent hover:border-amber-100"
          >
            <div className="min-w-2 h-2 rounded-full bg-amber-400"></div>
            <p className="text-sm font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Enhanced Stats Card
const StatsCard = ({ icon: Icon, title, value, trend }) => (
  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
        <h3 className="text-3xl font-bold text-amber-900">{value}</h3>
      </div>
      <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-4 rounded-xl">
        <Icon className="w-7 h-7 text-amber-700" />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm font-medium text-green-600 bg-green-50 py-1.5 px-3 rounded-full w-fit">
      <TrendingUp className="w-4 h-4 mr-1.5" />
      {trend}
    </div>
  </div>
);

const HomePage = () => {
  const announcements = [
    "Presidential Committee on Administrative Excellence: New Guidelines Released",
    "National Conference on Digital Governance: Tamil Nadu to Host Key Sessions",
    "Smart City Implementation: Phase 3 Launch in Metropolitan Areas",
    "International Delegation: Singapore Officials to Study TN e-Governance",
    "Chief Secretary Announces Major Administrative Reforms Package",
    "State Receives Award for Best e-Governance Implementation"
  ];

  const updates = [
    "Cabinet Approval: New Policy Framework for Administrative Modernization",
    "Digital Infrastructure Upgrade: 100% Connectivity Achievement",
    "Senior IAS Officers' Conference: Innovation in Governance",
    "Green Initiative: Paperless Office Implementation Success",
    "Citizen Services Portal: New Features Launched",
    "Administrative Training Academy: International Certification Received"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-serif text-amber-900 mb-6">
            Tamil Nadu Administrative Excellence Portal
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-medium">
            Pioneering Digital Governance | Empowering Administration | Serving Excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard 
            icon={FileText}
            title="Active Proceedings"
            value="2,456"
            trend="12% increase this month"
          />
          <StatsCard 
            icon={Users}
            title="Civil Servants"
            value="1,287"
            trend="98% productivity rate"
          />
          <StatsCard 
            icon={Calendar}
            title="Policy Reviews"
            value="328"
            trend="25% above target"
          />
          <StatsCard 
            icon={Globe}
            title="Digital Coverage"
            value="100%"
            trend="Full implementation"
          />
        </div>

        {/* Information Cards with Marquee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <MarqueeCard 
            title="Important Announcements"
            items={announcements}
          />
          <MarqueeCard 
            title="Latest Updates"
            items={updates}
          />
        </div>

        {/* Priority Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-amber-900 font-semibold mb-6 flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <AlertCircle className="w-5 h-5 text-amber-700" />
              </div>
              Priority Initiatives
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-amber-100">
                <FileCheck className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Smart Governance Implementation</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-amber-100">
                <FileCheck className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Administrative Modernization</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-amber-100">
                <FileCheck className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Digital Infrastructure Upgrade</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-amber-900 font-semibold mb-6 flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Award className="w-5 h-5 text-amber-700" />
              </div>
              Recent Achievements
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-amber-100">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                <span className="font-medium">National Excellence Award 2024</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-amber-100">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                <span className="font-medium">100% Digital Integration</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-amber-100">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                <span className="font-medium">ISO 27001 Certification</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-6 border border-amber-200">
            <h3 className="text-amber-900 font-semibold mb-6 flex items-center gap-3">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-amber-700" />
              </div>
              Upcoming Events
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-amber-100">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Administrative Excellence Summit</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-amber-100">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                <span className="font-medium">Policy Review Conference</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-amber-100">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                <span className="font-medium">International Governance Forum</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;