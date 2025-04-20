import React from "react";
import Header from "../components/Header";
import Donation from "../components/Donation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const DonationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-28 pb-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Make a <span className="text-primary">Donation</span>
            </h1>
            <p className="text-lg max-w-3xl mx-auto">
              Your support allows us to transform urban spaces into thriving
              green environments.
            </p>
          </div>
        </div>
      </div>

      <Donation />
      <Footer />
    </div>
  );
};

export default DonationPage;
