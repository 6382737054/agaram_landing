import React from 'react';
import { 
  RefreshCw, 
  Calendar, 
  FileText, 
  Search,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink
} from 'lucide-react';

const TransferEntry = ({ date, title }) => (
  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-sm p-4 sm:p-6 border border-amber-100 hover:shadow-md transition-all duration-300 group animate-fade-up">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex items-center gap-2 min-w-[130px]">
        <Calendar className="w-4 h-4 text-amber-600" />
        <span className="text-sm font-medium text-amber-900">{date}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-sm sm:text-base text-amber-900 font-medium group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
      </div>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <button className="p-2 rounded-lg hover:bg-amber-100 text-amber-700 transition-colors">
          
        </button>
        <button className="p-2 rounded-lg hover:bg-amber-100 text-amber-700 transition-colors">
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

const TransfersPage = () => {
  const transfers = [
    {
      date: "09-Sep-2024",
      title: "IAS- TMT SAUMYA ANAND IAS-CADRE TRANSFER TO MADHYA PRADESH- NOTIFIED"
    },
    {
        date: "09-Sep-2024",
        title: "IAS- TMT SAUMYA ANAND IAS-CADRE TRANSFER TO MADHYA PRADESH- NOTIFIED"
      },
      {
        date: "09-Sep-2024",
        title: "IAS- TMT SAUMYA ANAND IAS-CADRE TRANSFER TO MADHYA PRADESH- NOTIFIED"
      },
      {
        date: "09-Sep-2024",
        title: "IAS- TMT SAUMYA ANAND IAS-CADRE TRANSFER TO MADHYA PRADESH- NOTIFIED"
      },
      {
        date: "09-Sep-2024",
        title: "IAS- TMT SAUMYA ANAND IAS-CADRE TRANSFER TO MADHYA PRADESH- NOTIFIED"
      },
      {
        date: "09-Sep-2024",
        title: "IAS- TMT SAUMYA ANAND IAS-CADRE TRANSFER TO MADHYA PRADESH- NOTIFIED"
      },
      {
        date: "09-Sep-2024",
        title: "IAS- TMT SAUMYA ANAND IAS-CADRE TRANSFER TO MADHYA PRADESH- NOTIFIED"
      },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-6">
            <div className="bg-amber-100/50 p-3 rounded-full">
              <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-900">
              TRANSFER AND POSTINGS
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Official Notifications and Orders regarding Administrative Services Transfers and Postings
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-amber-200 p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by officer name or notification..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 rounded-lg border border-amber-200 text-sm text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>All Dates</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
                <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Transfers List */}
        <div className="space-y-3">
          {transfers.map((transfer, index) => (
            <TransferEntry
              key={index}
              date={transfer.date}
              title={transfer.title}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-sm text-gray-600">
            Showing 1 to 10 of 206 entries
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded border border-amber-200 text-amber-700 hover:bg-amber-50 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded border ${
                  page === 1
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'border-amber-200 text-amber-700 hover:bg-amber-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-3 py-1 rounded border border-amber-200 text-amber-700 hover:bg-amber-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransfersPage;