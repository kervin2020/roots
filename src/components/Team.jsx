import React from "react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Executive Director",
    bio: "Urban sustainability expert with 15 years of experience in green space development.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sarah@rootsofrenewal.org",
    },
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Lead Landscape Architect",
    bio: "Award-winning designer specializing in sustainable urban landscapes and native plants.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "mailto:marcus@rootsofrenewal.org",
    },
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Community Outreach Director",
    bio: "Passionate about engaging diverse communities in urban greening initiatives.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:aisha@rootsofrenewal.org",
    },
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "AI Technology Lead",
    bio: "Expert in machine learning and computer vision with a focus on environmental applications.",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    social: {
      linkedin: "#",
      github: "#",
      email: "mailto:james@rootsofrenewal.org",
    },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Our <span className="text-primary">Team</span>
          </h2>
          <div className="w-20 h-1 bg-[#8BC34A] mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Meet the passionate individuals dedicated to creating sustainable
            urban green spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2"></div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4 text-gray-400">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="hover:text-primary transition"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="hover:text-primary transition"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      className="hover:text-primary transition"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="hover:text-primary transition"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={member.social.email}
                      className="hover:text-primary transition"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-montserrat font-bold mb-4">
            Join Our Team
          </h3>
          <p className="max-w-2xl mx-auto mb-6">
            We're always looking for passionate individuals to join our mission
            of creating sustainable urban green spaces.
          </p>
          <Button className="bg-primary text-white px-6 py-6 rounded-full inline-block hover:bg-opacity-90 transition duration-300 font-bold">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
