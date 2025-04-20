import React from 'react';
import { Award, CheckCircle, FileText, Shield } from 'lucide-react';

const partners = [
  {
    id: 1,
    name: "National Parks Foundation",
    logo: "https://images.unsplash.com/photo-1633158829799-96bb13cab779?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80",
    type: "partner"
  },
  {
    id: 2,
    name: "Urban Green Council",
    logo: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80",
    type: "partner"
  },
  {
    id: 3,
    name: "Sustainable Cities Initiative",
    logo: "https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80",
    type: "partner"
  },
  {
    id: 4,
    name: "Green Building Council",
    logo: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80",
    type: "partner"
  },
  {
    id: 5,
    name: "Community Foundation",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80",
    type: "partner"
  }
];

const certifications = [
  {
    id: 1,
    name: "Environmental Excellence Award 2023",
    icon: <Award className="h-12 w-12 text-[#FFC107]" />,
    description: "Recognized for outstanding contributions to urban sustainability"
  },
  {
    id: 2,
    name: "Certified B Corporation",
    icon: <Shield className="h-12 w-12 text-[#4CAF50]" />,
    description: "Meeting the highest standards of social and environmental performance"
  },
  {
    id: 3,
    name: "Green Business Network",
    icon: <CheckCircle className="h-12 w-12 text-[#03A9F4]" />,
    description: "America's trusted certification for sustainable businesses"
  },
  {
    id: 4,
    name: "GuideStar Platinum",
    icon: <FileText className="h-12 w-12 text-[#9C27B0]" />,
    description: "Recognized for nonprofit transparency and effectiveness"
  }
];

const asSeenIn = [
  "The New York Times",
  "National Geographic",
  "The Guardian",
  "Forbes",
  "Sustainable Business Magazine"
];

const TrustIndicators = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">Our <span className="text-primary">Partners</span> & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">We collaborate with trusted organizations and have earned industry recognition for our commitment to excellence.</p>
        </div>
        
        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32 transition duration-300 hover:shadow-lg">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16 max-w-full grayscale hover:grayscale-0 transition duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Awards & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 hover:shadow-lg hover:transform hover:scale-105">
                <div className="bg-gray-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* As Seen In */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">As Seen In</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {asSeenIn.map((publication, index) => (
                <div key={index} className="text-gray-600 font-serif text-xl font-bold italic">
                  {publication}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Trust Statement */}
        <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-bold mb-4">Our Commitment to Transparency</h3>
          <p className="text-gray-600 mb-6">
            At Roots of Renewal, we're committed to transparency in all we do. Our financial reports, impact assessments, and project methodologies are openly shared with our community and stakeholders.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="text-primary hover:underline font-medium flex flex-col items-center">
              <FileText className="h-5 w-5 mb-1" />
              <span>Annual Report</span>
            </a>
            <a href="#" className="text-primary hover:underline font-medium flex flex-col items-center">
              <FileText className="h-5 w-5 mb-1" />
              <span>Financial Statement</span>
            </a>
            <a href="#" className="text-primary hover:underline font-medium flex flex-col items-center">
              <FileText className="h-5 w-5 mb-1" />
              <span>Impact Assessment</span>
            </a>
            <a href="#" className="text-primary hover:underline font-medium flex flex-col items-center">
              <FileText className="h-5 w-5 mb-1" />
              <span>Methodology</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;