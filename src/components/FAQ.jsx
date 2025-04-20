import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "How does Roots of Renewal select project locations?",
    answer: "We follow a community-centered approach to selecting project locations. Areas are chosen based on a combination of community requests, environmental need assessment, and potential impact. We prioritize underserved communities with limited access to green spaces and work closely with local residents, community organizations, and municipal partners to ensure our projects address specific neighborhood needs."
  },
  {
    question: "What types of plants do you use in your transformations?",
    answer: "We primarily use native plants that are well-adapted to the local climate and provide habitat for native wildlife. Our plant selections are tailored to each site's specific conditions including light exposure, soil type, and moisture levels. We focus on low-maintenance, drought-tolerant species whenever possible to ensure long-term sustainability, and incorporate a mix of trees, shrubs, perennials, and groundcovers to create diverse, layered ecosystems."
  },
  {
    question: "How can I get involved as a volunteer?",
    answer: "We welcome volunteers of all skill levels! You can sign up through our website's volunteer portal, where you'll find upcoming planting events, maintenance days, and specialized opportunities. We offer orientation sessions for new volunteers and provide all necessary tools and training. Volunteers can participate in planting, site maintenance, community outreach, event support, and specialized roles like photography or educational workshops."
  },
  {
    question: "Do you work with schools and educational institutions?",
    answer: "Yes, we have specialized programs for educational institutions. Our school greening program transforms asphalt schoolyards into vibrant learning gardens with curriculum connections. We offer teacher training workshops, student environmental clubs support, and help design outdoor classrooms. We've partnered with over 45 schools to date and can customize projects based on your school's specific needs and resources."
  },
  {
    question: "How are donations to Roots of Renewal used?",
    answer: "Your donations directly support our transformation projects and community programs. Approximately 75% of all donations go directly to project implementation, including plants, materials, and skilled labor. The remaining 25% supports essential administrative functions, community outreach, and educational programs. We publish an annual financial report that provides detailed breakdowns of how funds are allocated across our various initiatives."
  },
  {
    question: "What maintenance is provided after a space is transformed?",
    answer: "We're committed to the long-term success of every project. Each transformation includes a comprehensive 2-year maintenance plan, with regular visits by our maintenance team. We also provide training for community members and establish local stewardship teams who take increasing responsibility for ongoing care. Our maintenance approach includes regular weeding, pruning, replanting as needed, irrigation system checks, and seasonal clean-ups."
  },
  {
    question: "Can you help transform my private property?",
    answer: "While we primarily focus on public and community spaces, we do offer consultations for private property owners who wish to implement green transformations. These consultations include site assessment, sustainable design recommendations, plant suggestions, and implementation guidance. For larger private properties that offer some public benefit or access, we may consider partnership projects. Contact us to discuss your specific situation."
  },
  {
    question: "How do you measure the impact of your projects?",
    answer: "We employ a comprehensive impact assessment framework that measures environmental, social, and economic outcomes. Environmental metrics include temperature reduction, stormwater management capacity, air quality improvement, and biodiversity increases. Social metrics cover community usage, educational engagement, and resident satisfaction. We conduct before-and-after assessments for each project and publish our findings in annual impact reports available on our website."
  }
];

const categories = {
  "Getting Started": [0, 2, 6],
  "Our Process": [0, 1, 5, 7],
  "Support & Donations": [2, 4],
  "Programs": [3, 6]
};

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">Find answers to common questions about our green transformation projects and how you can get involved.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Categories Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                Categories
              </h3>
              <nav className="space-y-2">
                {Object.keys(categories).map((category, index) => (
                  <a 
                    key={index}
                    href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-3 py-2 rounded-md hover:bg-gray-200 transition text-gray-700 hover:text-primary"
                  >
                    {category}
                    <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded-full">
                      {categories[category].length}
                    </span>
                  </a>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm mb-4">Can't find what you're looking for?</p>
                <Button className="w-full" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          
          {/* FAQ Accordion */}
          <div className="md:col-span-3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="font-bold text-lg mb-2">Have more questions?</h3>
              <p className="text-gray-600 mb-4">Our team is always ready to provide more information about our projects, process, and impact.</p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
                <Button variant="outline">
                  Download Information Packet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;