import React from 'react';
import { 
  Shield, 
  Star, 
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Crown,
  MessageSquare,
  Building
} from 'lucide-react';

const ContactCard = ({ icon: Icon, title, details, link }) => (
  <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 border border-amber-200 hover:shadow-xl transition-all duration-300 group">
    <div className="flex flex-col items-center text-center">
      <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-4 rounded-lg shadow-sm mb-4 group-hover:shadow-md transition-all">
        <Icon className="w-6 h-6 text-amber-700" />
      </div>
      <h3 className="text-lg font-semibold text-amber-900 mb-2">{title}</h3>
      {details.map((detail, index) => (
        <a 
          key={index}
          href={link}
          className="text-gray-600 hover:text-amber-700 transition-colors mb-1 text-sm"
        >
          {detail}
        </a>
      ))}
    </div>
  </div>
);

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Head Office",
      details: [
        "Secretariat",
        "Fort St. George",
        "Chennai - 600009",
        "Tamil Nadu, India"
      ],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 44 2567 8901",
        "+91 44 2567 8902",
        "Toll Free: 1800 123 4567"
      ],
      link: "tel:+914425678901"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "contact@tn.gov.in",
        "support@tn.gov.in",
        "helpdesk@tn.gov.in"
      ],
      link: "mailto:contact@tn.gov.in"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday",
        "10:00 AM - 5:45 PM",
        "Except Government Holidays"
      ],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 sm:p-4 rounded-full shadow-md">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-amber-700" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-900 tracking-wide">
              CONTACT US
            </h1>
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 sm:p-4 rounded-full shadow-md">
              <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-amber-700" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent w-32"></div>
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent w-32"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-medium">
            Get in Touch with the Tamil Nadu Administrative Services
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 border border-amber-200 shadow-lg">
            <h2 className="text-2xl font-semibold text-amber-900 mb-6 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;