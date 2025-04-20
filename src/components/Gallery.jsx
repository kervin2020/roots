import React from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Downtown Rooftop Transformation",
    type: "Rooftop Garden",
    description:
      "Converting unused rooftop space into a thriving community garden with urban farming initiatives.",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1585144860106-998ee0c9c94c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 2,
    title: "Neighborhood Revival Garden",
    type: "Community Garden",
    description:
      "A vacant lot transformed into a vibrant community space with vegetable gardens and gathering areas.",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 3,
    title: "Elementary School Green Initiative",
    type: "School Project",
    description:
      "Creating educational garden spaces where children learn about sustainability and growing food.",
    location: "Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1616101054398-0fc4a6c18bc71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 4,
    title: "Central Park Revitalization",
    type: "Park Renewal",
    description:
      "Restoring native plants and creating sustainable landscaping in a neglected urban park.",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1600240644455-fd509320dc45?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 5,
    title: "Community Composting Hub",
    type: "Composting",
    description:
      "Building a neighborhood composting system to reduce waste and create soil for local gardens.",
    location: "Portland, OR",
    image:
      "https://images.unsplash.com/photo-1505248254168-1de4e1abfa78?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
  },
  {
    id: 6,
    title: "Vertical Garden Initiative",
    type: "Vertical Farming",
    description:
      "Implementing vertical farming solutions in space-constrained urban environments.",
    location: "Boston, MA",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#8BC34A] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Explore our transformative projects bringing green spaces to urban
            environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 text-sm">
                  {project.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {project.location}
                  </span>
                  <a
                    href="#"
                    className="text-primary font-bold hover:underline"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary text-white px-6 py-6 rounded-full inline-block hover:bg-opacity-90 transition duration-300 font-bold text-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
