import React, { useState } from 'react';
import { 
  Briefcase,
  Search,
  Star,
  Shield,
  Users,
  MapPin,
  Phone,
  Mail,
  Building,
  Calendar,
  Filter,
  Download,
  ChevronDown,
  SortAsc,
  SortDesc
} from 'lucide-react';

const OfficerCard = ({ officer }) => (
  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-sm p-6 border border-amber-100 hover:shadow-lg transition-all duration-300 animate-fade-up">
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Officer Info */}
      <div className="flex-1">
        <div className="flex items-start gap-4">
          <div className="bg-amber-100/50 p-3 rounded-lg">
            <Briefcase className="w-6 h-6 text-amber-700" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-1">{officer.name}</h3>
            <p className="text-amber-700 font-medium mb-2">{officer.designation}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{officer.state} ({officer.year})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Department Info */}
      <div className="flex-1">
        <div className="flex items-start gap-4">
          <div className="bg-amber-100/50 p-3 rounded-lg">
            <Building className="w-6 h-6 text-amber-700" />
          </div>
          <div>
            <h4 className="font-medium text-amber-900 mb-1">{officer.department}</h4>
            <p className="text-sm text-gray-600 mb-2">{officer.location}</p>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{officer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{officer.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Joining Info */}
      <div className="flex items-start gap-4">
        <div className="bg-amber-100/50 p-3 rounded-lg">
          <Calendar className="w-6 h-6 text-amber-700" />
        </div>
        <div>
          <h4 className="font-medium text-amber-900 mb-1">Date of Joining</h4>
          <p className="text-sm text-gray-600">{officer.joiningDate}</p>
        </div>
      </div>
    </div>
  </div>
);

const CurrentPostingsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCadre, setSelectedCadre] = useState('all');

  const officers = [
    {
      name: "Thiru HANS RAJ VERMA I.A.S",
      designation: "ACS / Chairman and Managing Director",
      state: "Rajasthan",
      year: "1986",
      department: "TN Industrial Investment Corporation Ltd. (TIIC)",
      location: "Chennai",
      phone: "044-24330689",
      email: "md@tiic.org",
      joiningDate: "26-May-2021"
    },
    {
        name: "Thiru HANS RAJ VERMA I.A.S",
        designation: "ACS / Chairman and Managing Director",
        state: "Rajasthan",
        year: "1986",
        department: "TN Industrial Investment Corporation Ltd. (TIIC)",
        location: "Chennai",
        phone: "044-24330689",
        email: "md@tiic.org",
        joiningDate: "26-May-2021"
      },

      {
        name: "Thiru HANS RAJ VERMA I.A.S",
        designation: "ACS / Chairman and Managing Director",
        state: "Rajasthan",
        year: "1986",
        department: "TN Industrial Investment Corporation Ltd. (TIIC)",
        location: "Chennai",
        phone: "044-24330689",
        email: "md@tiic.org",
        joiningDate: "26-May-2021"
      },

      {
        name: "Thiru HANS RAJ VERMA I.A.S",
        designation: "ACS / Chairman and Managing Director",
        state: "Rajasthan",
        year: "1986",
        department: "TN Industrial Investment Corporation Ltd. (TIIC)",
        location: "Chennai",
        phone: "044-24330689",
        email: "md@tiic.org",
        joiningDate: "26-May-2021"
      },

      {
        name: "Thiru HANS RAJ VERMA I.A.S",
        designation: "ACS / Chairman and Managing Director",
        state: "Rajasthan",
        year: "1986",
        department: "TN Industrial Investment Corporation Ltd. (TIIC)",
        location: "Chennai",
        phone: "044-24330689",
        email: "md@tiic.org",
        joiningDate: "26-May-2021"
      },
  

  ];

  const stats = [
    { icon: Users, title: "Total Officers", value: "256" },
    { icon: MapPin, title: "State Cadres", value: "18" },
    { icon: Building, title: "Departments", value: "42" },
    { icon: Briefcase, title: "New Postings", value: "12" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="bg-amber-100/50 p-3 rounded-full">
              <Shield className="w-8 h-8 text-amber-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-900 tracking-wide">
              CURRENT POSTINGS
            </h1>
            <div className="bg-amber-100/50 p-3 rounded-full">
              <Briefcase className="w-8 h-8 text-amber-700" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent w-24"></div>
            <Star className="w-6 h-6 text-amber-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent w-24"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-medium">
            Current Postings and Contact Information of Administrative Service Officers
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-4 border border-amber-200">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100/50 p-2.5 rounded-lg">
                  <stat.icon className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm text-amber-700">{stat.title}</p>
                  <p className="text-lg font-semibold text-amber-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, designation, or department..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-3 rounded-lg border border-amber-200 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={selectedCadre}
                onChange={(e) => setSelectedCadre(e.target.value)}
              >
                <option value="all">All Cadres</option>
                <option value="ias">IAS</option>
                <option value="ips">IPS</option>
                <option value="ifs">IFS</option>
              </select>
              <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter Results
              </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {[''].map((filter) => (
              <button
                key={filter}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Officers List */}
        <div className="space-y-4">
          {officers.map((officer, index) => (
            <OfficerCard key={index} officer={officer} />
          ))}
        </div>

        {/* Table Controls */}
        <div className="mt-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show</span>
            <select className="px-3 py-1 border border-amber-200 rounded-lg">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span className="text-sm text-gray-600">entries</span>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CurrentPostingsPage;