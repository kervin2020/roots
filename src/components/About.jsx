import React from "react";
import { Leaf, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            About <span className="text-primary">Roots of Renewal</span>
          </h2>
          <div className="w-20 h-1 bg-[#8BC34A] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            We're on a mission to transform urban spaces into vibrant, green
            environments that benefit communities and the planet.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1620127682229-33388276e540?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Community gardening project"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Our Mission
            </h3>
            <p className="mb-6">
              Roots of Renewal is dedicated to transforming neglected urban
              spaces into thriving green environments. We believe that everyone
              deserves access to natural spaces that promote well-being,
              community connection, and environmental sustainability.
            </p>

            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Our Vision
            </h3>
            <p className="mb-6">
              We envision cities where green spaces are abundant, accessible,
              and integrated into the urban landscape. Where communities come
              together to nurture these spaces and benefit from cleaner air,
              improved mental health, and stronger social bonds.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Leaf className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-bold">100+ Projects</h4>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-bold">50+ Communities</h4>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Leaf className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-bold">10,000+ Plants</h4>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Heart className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-bold">1,000+ Volunteers</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
