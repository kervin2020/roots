import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, Users, Droplets, Wind, TreePine, TrendingUp, MapPin } from 'lucide-react';

const metrics = {
  overall: {
    title: "Overall Impact",
    description: "Our combined efforts across all projects have created significant positive change in urban environments.",
    stats: [
      {
        icon: <Leaf className="h-8 w-8 text-primary" />,
        value: "50,000+",
        label: "Plants & Trees",
        description: "Native plants and trees planted in urban spaces"
      },
      {
        icon: <Users className="h-8 w-8 text-primary" />,
        value: "100,000+",
        label: "People Impacted",
        description: "Community members with improved access to green spaces"
      },
      {
        icon: <MapPin className="h-8 w-8 text-primary" />,
        value: "75+",
        label: "Locations",
        description: "Urban areas transformed across the country"
      },
      {
        icon: <Droplets className="h-8 w-8 text-primary" />,
        value: "2.5M",
        label: "Gallons",
        description: "Annual stormwater managed through green infrastructure"
      }
    ]
  },
  environmental: {
    title: "Environmental Impact",
    description: "Our projects create measurable environmental benefits in urban settings.",
    stats: [
      {
        icon: <TreePine className="h-8 w-8 text-primary" />,
        value: "120",
        label: "Tons CO₂",
        description: "Annual carbon sequestration from planted trees"
      },
      {
        icon: <Droplets className="h-8 w-8 text-primary" />,
        value: "65%",
        label: "Runoff Reduction",
        description: "Average stormwater runoff reduction in our projects"
      },
      {
        icon: <Wind className="h-8 w-8 text-primary" />,
        value: "4-7°F",
        label: "Cooler",
        description: "Average temperature reduction in transformed areas"
      },
      {
        icon: <Leaf className="h-8 w-8 text-primary" />,
        value: "350+",
        label: "Species",
        description: "Native plant, insect and bird species supported"
      }
    ]
  },
  social: {
    title: "Social Impact",
    description: "Our work strengthens communities and improves quality of life for residents.",
    stats: [
      {
        icon: <Users className="h-8 w-8 text-primary" />,
        value: "5,000+",
        label: "Volunteers",
        description: "Community members engaged in transformation projects"
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        value: "27%",
        label: "Increase",
        description: "Average increase in community space usage"
      },
      {
        icon: <Leaf className="h-8 w-8 text-primary" />,
        value: "1,200+",
        label: "Workshop Participants",
        description: "People trained in sustainable gardening practices"
      },
      {
        icon: <MapPin className="h-8 w-8 text-primary" />,
        value: "45+",
        label: "Schools",
        description: "Educational institutions with improved green spaces"
      }
    ]
  }
};

const yearlyGrowth = [
  { year: 2020, projects: 12, plants: 8500, volunteers: 650 },
  { year: 2021, projects: 18, plants: 15200, volunteers: 1100 },
  { year: 2022, projects: 23, plants: 22700, volunteers: 1850 },
  { year: 2023, projects: 28, plants: 36000, volunteers: 2400 },
  { year: 2024, projects: 35, plants: 50000, volunteers: 3500 }
];

const ImpactMetrics = () => {
  const [activeCategory, setActiveCategory] = useState('overall');
  const [activeMetric, setActiveMetric] = useState(null);

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">Our <span className="text-primary">Impact</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">Measurable results that demonstrate our commitment to creating sustainable green spaces.</p>
        </div>
        
        <Tabs defaultValue="overall" className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger 
                value="overall" 
                onClick={() => setActiveCategory('overall')}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Overall
              </TabsTrigger>
              <TabsTrigger 
                value="environmental" 
                onClick={() => setActiveCategory('environmental')}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Environmental
              </TabsTrigger>
              <TabsTrigger 
                value="social" 
                onClick={() => setActiveCategory('social')}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Social
              </TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(metrics).map((key) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{metrics[key].title}</h3>
                <p className="text-gray-600">{metrics[key].description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics[key].stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg ${
                      activeMetric === index && activeCategory === key 
                        ? 'ring-2 ring-primary transform scale-105' 
                        : 'hover:transform hover:scale-105'
                    }`}
                    onClick={() => setActiveMetric(activeMetric === index ? null : index)}
                  >
                    <div className="mx-auto bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      {stat.icon}
                    </div>
                    <h4 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h4>
                    <p className="font-semibold text-primary mb-1">{stat.label}</p>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Growth Chart */}
        <div className="mt-20 bg-gray-50 rounded-xl p-8 shadow-md max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Growth Year by Year</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Year</th>
                  <th className="p-3 text-left">Projects Completed</th>
                  <th className="p-3 text-left">Plants & Trees</th>
                  <th className="p-3 text-left">Volunteers Engaged</th>
                </tr>
              </thead>
              <tbody>
                {yearlyGrowth.map((year, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="p-3 border-b border-gray-200 font-medium">{year.year}</td>
                    <td className="p-3 border-b border-gray-200">
                      <div className="flex items-center">
                        <span className="mr-2">{year.projects}</span>
                        <div className="bg-blue-100 h-3 rounded-full" style={{ width: `${year.projects * 3}px` }}></div>
                      </div>
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      <div className="flex items-center">
                        <span className="mr-2">{year.plants.toLocaleString()}</span>
                        <div className="bg-green-100 h-3 rounded-full" style={{ width: `${year.plants / 1000}px` }}></div>
                      </div>
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      <div className="flex items-center">
                        <span className="mr-2">{year.volunteers.toLocaleString()}</span>
                        <div className="bg-yellow-100 h-3 rounded-full" style={{ width: `${year.volunteers / 70}px` }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="mr-4">
              Download Complete Impact Report
            </Button>
            <Button>
              Join Our Efforts
            </Button>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-16 bg-primary rounded-xl p-8 text-white max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="220" height="220" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="white"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Making a Difference</h3>
            <blockquote className="text-xl italic mb-6">
              "The data tells one story, but the real impact is seen in the faces of community members who now have beautiful, sustainable green spaces to enjoy. These spaces aren't just aesthetically pleasing – they're improving air quality, managing stormwater, creating habitat, and bringing people together."
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" 
                alt="Emma Rodriguez" 
                className="w-12 h-12 rounded-full object-cover border-2 border-white mr-4"
              />
              <div>
                <p className="font-bold">Emma Rodriguez</p>
                <p className="text-white text-opacity-80">Director of Impact Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;