import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Leaf } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!acceptPolicy) {
      toast({
        title: "Privacy Policy",
        description: "You must accept the privacy policy",
        variant: "destructive",
      });
      return;
    }

    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter",
      });

      setEmail("");
      setAcceptPolicy(false);
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was a problem subscribing to the newsletter",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="text-[#8BC34A] h-6 w-6" />
              <span className="font-montserrat font-bold text-xl tracking-tight">
                Roots of Renewal
              </span>
            </div>
            <p className="mb-6">
              Transforming urban spaces into thriving green environments for
              healthier communities and a more sustainable future.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#8BC34A] hover:text-gray-900 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#8BC34A] hover:text-gray-900 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#8BC34A] hover:text-gray-900 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#8BC34A] hover:text-gray-900 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
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
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#home" className="hover:text-[#8BC34A] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-[#8BC34A] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery"
                  className="hover:text-[#8BC34A] transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#ai-tool"
                  className="hover:text-[#8BC34A] transition"
                >
                  AI Tool
                </Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-[#8BC34A] transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-[#8BC34A] transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-[#8BC34A] transition"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#8BC34A] transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8BC34A] transition">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8BC34A] transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8BC34A] transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8BC34A] transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8BC34A] transition">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#8BC34A] transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">
              Newsletter
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates on our projects
              and events.
            </p>
            <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-l-lg focus:outline-none text-gray-800 border-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-[#8BC34A] text-gray-900 rounded-r-lg hover:bg-opacity-90 transition border-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
                  </svg>
                </Button>
              </div>
              <div className="flex items-center">
                <Checkbox
                  id="privacy-policy"
                  checked={acceptPolicy}
                  onCheckedChange={setAcceptPolicy}
                  className="h-4 w-4 text-[#8BC34A] focus:ring-[#8BC34A] border-gray-300 rounded"
                />
                <Label htmlFor="privacy-policy" className="ml-2 text-sm">
                  I agree to the{" "}
                  <a href="#" className="text-[#8BC34A] hover:underline">
                    Privacy Policy
                  </a>
                </Label>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white border-opacity-10 text-center text-sm text-white text-opacity-60">
          <p>
            &copy; {new Date().getFullYear()} Roots of Renewal. All rights
            reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-[#8BC34A] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#8BC34A] transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#8BC34A] transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
