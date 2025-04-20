import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ExternalLink, Leaf } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Downtown Plaza Revitalization",
    location: "Boston, MA",
    year: "2023",
    category: "Urban Plaza",
    description: "Transformed a concrete plaza into a thriving community garden with native plants, seating areas, and a small performance space.",
    challenge: "Heavy foot traffic, limited soil depth, and poor water drainage created challenges for plant life.",
    solution: "Implemented raised planters, permeable pavements, and strategic storm water management systems.",
    impact: [
      "Reduced urban heat island effect by 4°F in summer months",
      "Created habitat for 15 local bird species and various pollinators",
      "Increased local business foot traffic by 27%",
      "Reduced storm water runoff by 62%"
    ],
    beforeImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    afterImage: "https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    quote: {
      text: "This space has completely transformed how our community connects. What was once avoided is now a destination.",
      author: "Sarah Chen, Local Business Owner"
    }
  },
  {
    id: 2,
    title: "Riverside Industrial Conversion",
    location: "Detroit, MI",
    year: "2022",
    category: "Industrial Site",
    description: "Converted an abandoned industrial lot into a riverside park with walking trails, native meadows, and community gathering spaces.",
    challenge: "Soil contamination, invasive species, and disconnection from the surrounding neighborhood.",
    solution: "Implemented phytoremediation techniques, installed a native plant nursery, and created multiple access points from adjacent neighborhoods.",
    impact: [
      "Remediated 2.5 acres of contaminated soil using plant-based techniques",
      "Created 1.2 miles of accessible walking trails",
      "Established habitat for 35+ native plant species",
      "Hosted 24 community events in the first year"
    ],
    beforeImage: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    afterImage: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    quote: {
      text: "Seeing this transformation has given our community hope for what's possible when we work together toward renewal.",
      author: "Marcus Johnson, Community Council President"
    }
  },
  {
    id: 3,
    title: "School Yard Transformation",
    location: "Portland, OR",
    year: "2023",
    category: "Educational",
    description: "Converted an asphalt school yard into an educational garden with outdoor classrooms, edible gardens, and play spaces.",
    challenge: "Limited budget, need for educational components, and maintenance concerns.",
    solution: "Engaged student and parent volunteers, created a maintenance plan with the school, and designed multi-purpose spaces.",
    impact: [
      "Created outdoor learning spaces used by 450+ students weekly",
      "Established an edible garden producing 500+ pounds of produce annually",
      "Reduced playground injuries by 35%",
      "Improved student attention and engagement according to teacher reports"
    ],
    beforeImage: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    afterImage: "https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    quote: {
      text: "Our students are more engaged, active, and connected to nature since the transformation. It's changed our whole approach to education.",
      author: "Principal Ramirez, Washington Elementary"
    }
  }
];

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0]);
  const [viewingMode, setViewingMode] = useState('summary'); // 'summary', 'detailed', 'comparison'

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">Case <span className="text-primary">Studies</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">Explore our successful transformation projects and their measurable impacts on communities and environments.</p>
        </div>

        {/* Case Studies Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
            {caseStudies.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveStudy(study)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  activeStudy.id === study.id 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {study.title}
              </button>
            ))}
          </div>
        </div>

        {/* View Modes */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-md p-1 flex space-x-1">
            <button
              onClick={() => setViewingMode('summary')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                viewingMode === 'summary' 
                  ? 'bg-gray-200' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Summary
            </button>
            <button
              onClick={() => setViewingMode('detailed')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                viewingMode === 'detailed' 
                  ? 'bg-gray-200' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Detailed View
            </button>
            <button
              onClick={() => setViewingMode('comparison')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                viewingMode === 'comparison' 
                  ? 'bg-gray-200' 
                  : 'hover:bg-gray-100'
              }`}
            >
              Before/After
            </button>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {viewingMode === 'comparison' ? (
            // Before/After Comparison View
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img 
                  src={activeStudy.beforeImage} 
                  alt={`${activeStudy.title} before transformation`} 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded text-sm font-bold">
                  BEFORE
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <img 
                  src={activeStudy.afterImage} 
                  alt={`${activeStudy.title} after transformation`} 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary bg-opacity-90 px-3 py-1 rounded text-white text-sm font-bold">
                  AFTER
                </div>
              </div>
            </div>
          ) : (
            // Header image for other views
            <div className="relative">
              <img 
                src={activeStudy.afterImage} 
                alt={activeStudy.title} 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{activeStudy.title}</h3>
                <div className="flex items-center text-sm mb-4">
                  <span className="bg-primary rounded-full px-3 py-1 mr-3">{activeStudy.category}</span>
                  <span className="mr-3">{activeStudy.location}</span>
                  <span>{activeStudy.year}</span>
                </div>
              </div>
            </div>
          )}

          {viewingMode === 'summary' && (
            <div className="p-8">
              <p className="text-lg mb-6 leading-relaxed">{activeStudy.description}</p>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <Leaf className="w-5 h-5 text-primary mr-2" />
                    The Challenge
                  </h4>
                  <p className="text-gray-700">{activeStudy.challenge}</p>
                </div>
                <div className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
                  <h4 className="font-bold text-lg mb-3 flex items-center">
                    <Leaf className="w-5 h-5 text-primary mr-2" />
                    Our Solution
                  </h4>
                  <p className="text-gray-700">{activeStudy.solution}</p>
                </div>
              </div>
              
              {/* Impact Metrics */}
              <h4 className="font-bold text-lg mb-4 flex items-center">
                <Leaf className="w-5 h-5 text-primary mr-2" />
                Measured Impact
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {activeStudy.impact.map((impact, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary bg-opacity-10 rounded-full p-2 mr-3">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </div>
                    <span>{impact}</span>
                  </div>
                ))}
              </div>
              
              {/* Quote */}
              <div className="rounded-lg bg-gray-50 p-6 border-l-4 border-primary italic">
                <p className="text-gray-700 mb-3">"{activeStudy.quote.text}"</p>
                <p className="font-semibold text-gray-900">— {activeStudy.quote.author}</p>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="px-8">
                  Full Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {viewingMode === 'detailed' && (
            <div className="p-8">
              <div className="mb-8">
                <h4 className="font-bold text-xl mb-3">Project Overview</h4>
                <p className="text-gray-700 mb-4">{activeStudy.description}</p>
                <p className="text-gray-700">This project was completed in {activeStudy.year} and represents one of our flagship transformations, demonstrating our commitment to sustainable urban green spaces.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-4 text-primary">The Challenge</h4>
                  <p className="text-gray-700">{activeStudy.challenge}</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Site assessment revealed multiple obstacles</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Community had specific needs and concerns</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Environmental factors required creative solutions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-4 text-primary">Our Approach</h4>
                  <p className="text-gray-700">{activeStudy.solution}</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Collaborated with local stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Implemented sustainable design principles</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Used native plants adapted to local conditions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-4 text-primary">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Water-efficient irrigation systems</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Solar-powered lighting fixtures</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Permeable paving materials</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Accessible pathways and seating</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Community involvement opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-xl mb-3">Measured Impact</h4>
                <p className="mb-4">We conducted thorough before-and-after assessments to measure the quantifiable impact of this transformation:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeStudy.impact.map((impact, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex">
                      <div className="bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-bold text-xl mb-3">Community Feedback</h4>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-gray-700 mb-4 text-lg italic">"{activeStudy.quote.text}"</p>
                  <p className="font-semibold text-gray-900">— {activeStudy.quote.author}</p>
                </div>
                <p className="mt-4 text-gray-700">
                  Community surveys showed a 94% satisfaction rate with the transformation, with particular appreciation for the increased greenery and new gathering spaces.
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-8">
                <Button variant="outline">
                  Download PDF Case Study
                </Button>
                <Button>
                  Contact Us About Similar Projects
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* More Case Studies */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="px-8">
            View All Case Studies <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;