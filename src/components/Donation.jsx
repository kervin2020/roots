import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Leaf, CreditCard, Landmark } from "lucide-react";

const donationTiers = [
  {
    id: "seed",
    icon: <Leaf className="text-primary text-2xl" />,
    title: "Seed",
    amount: 25,
    description: "Plant 5 trees or native plants in urban green spaces",
  },
  {
    id: "garden",
    icon: <Leaf className="text-primary text-2xl" />,
    title: "Garden",
    amount: 100,
    description: "Sponsor a community garden plot or small green space",
    popular: true,
  },
  {
    id: "forest",
    icon: <Leaf className="text-primary text-2xl" />,
    title: "Forest",
    amount: 500,
    description: "Fund a complete urban space transformation project",
  },
];

const Donation = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      paymentMethod: "card",
      recurring: false,
    },
  });

  const selectTier = (tier) => {
    setSelectedTier(tier.id);
    setCustomAmount("");
    setDonationAmount(tier.amount);
    setShowDonationForm(true);
  };

  const handleCustomAmountChange = (e) => {
    const amount = e.target.value;
    setCustomAmount(amount);
    setSelectedTier(null);

    if (amount && Number(amount) > 0) {
      setDonationAmount(Number(amount));
      setShowDonationForm(true);
    } else {
      setShowDonationForm(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      // In a real app, you would process the payment through Stripe
      // This would integrate with routes.ts and the Stripe API
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: donationAmount,
          name: data.name,
          email: data.email,
          recurring: data.recurring,
          paymentMethod: data.paymentMethod,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process donation");
      }

      const paymentData = await response.json();

      // Show additional message if this is a simulated payment
      if (paymentData.simulated) {
        console.log("Simulated payment processed:", paymentData);
      }

      toast({
        title: "Thank you for your donation!",
        description: `Your donation of $${donationAmount} helps us create more green spaces.`,
      });

      // Reset form and state
      reset();
      setSelectedTier(null);
      setCustomAmount("");
      setShowDonationForm(false);
    } catch (error) {
      toast({
        title: "Donation Failed",
        description:
          error.message ||
          "There was a problem processing your donation. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="donate" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Support Our <span className="text-[#FFC107]">Mission</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Your donation helps us create more sustainable green spaces in urban
            environments.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donationTiers.map((tier) => (
              <div
                key={tier.id}
                className={`${
                  tier.popular
                    ? "bg-primary rounded-xl p-8 shadow-lg text-white text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl relative -mt-4"
                    : "bg-white rounded-xl p-6 shadow-lg text-gray-800 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFC107] text-gray-800 text-xs font-bold py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                <div
                  className={`${
                    tier.popular
                      ? "bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                      : "bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  }`}
                >
                  {tier.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  {tier.title}
                </h3>
                <p className="text-4xl font-bold mb-4">${tier.amount}</p>
                <p
                  className={`${
                    tier.popular
                      ? "text-white text-opacity-90"
                      : "text-gray-600"
                  } mb-6`}
                >
                  {tier.description}
                </p>
                <Button
                  onClick={() => selectTier(tier)}
                  className={`w-full py-3 rounded-lg border-2 ${
                    tier.popular
                      ? "border-white bg-white text-primary font-bold hover:bg-transparent hover:text-white"
                      : "border-primary text-primary font-bold hover:bg-primary hover:text-white"
                  } transition duration-300`}
                >
                  Select
                </Button>
              </div>
            ))}
          </div>

          {/* Custom Donation */}
          <div className="mt-10 bg-white bg-opacity-10 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="md:w-2/3">
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Custom Donation
                </h3>
                <p>Choose your own amount to support our green initiatives</p>
              </div>
              <div className="md:w-1/3 flex items-center w-full">
                <span className="bg-white bg-opacity-20 py-3 px-4 rounded-l-lg text-xl">
                  $
                </span>
                <Input
                  type="number"
                  id="custom-amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  min="1"
                  placeholder="Amount"
                  className="py-3 px-4 flex-grow text-gray-800 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
              </div>
            </div>
          </div>

          {/* Donation Form */}
          {showDonationForm && (
            <div className="mt-10 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-gray-800">
                Complete Your Donation
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="donor-name"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="donor-name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="donor-email"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="donor-email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label className="block text-gray-700 font-semibold mb-2">
                    Payment Method
                  </Label>
                  <RadioGroup
                    defaultValue="card"
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-primary transition">
                      <div className="flex items-center">
                        <RadioGroupItem
                          id="payment-card"
                          value="card"
                          {...register("paymentMethod")}
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-300"
                        />
                        <Label
                          htmlFor="payment-card"
                          className="ml-2 block font-semibold"
                        >
                          Credit Card
                        </Label>
                      </div>
                      <div className="mt-2 flex space-x-2">
                        <CreditCard className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-primary transition">
                      <div className="flex items-center">
                        <RadioGroupItem
                          id="payment-paypal"
                          value="paypal"
                          {...register("paymentMethod")}
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-300"
                        />
                        <Label
                          htmlFor="payment-paypal"
                          className="ml-2 block font-semibold"
                        >
                          PayPal
                        </Label>
                      </div>
                      <div className="mt-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-700"
                        >
                          <path d="M7 11l5-7" />
                          <path d="M21 11l-5-7" />
                          <path d="M7 11l-2.5 7" />
                          <path d="M21 11l-2.5 7" />
                          <path d="M21 11H7" />
                          <path d="M7 5h14" />
                        </svg>
                      </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-primary transition">
                      <div className="flex items-center">
                        <RadioGroupItem
                          id="payment-bank"
                          value="bank"
                          {...register("paymentMethod")}
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-300"
                        />
                        <Label
                          htmlFor="payment-bank"
                          className="ml-2 block font-semibold"
                        >
                          Bank Transfer
                        </Label>
                      </div>
                      <div className="mt-2">
                        <Landmark className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">
                      Donation Amount:
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      ${donationAmount}
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <Checkbox
                    id="recurring"
                    {...register("recurring")}
                    className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <Label
                    htmlFor="recurring"
                    className="ml-2 block text-gray-700"
                  >
                    Make this a monthly recurring donation
                  </Label>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="bg-primary text-white w-full py-6 rounded-lg hover:bg-opacity-90 transition duration-300 font-bold text-lg"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Complete Donation
                  </Button>
                </div>

                <p className="text-center text-sm text-gray-500">
                  Your donation is tax-deductible. You will receive a receipt
                  via email.
                </p>
              </form>
            </div>
          )}

          <div className="mt-10 bg-white bg-opacity-10 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                  alt="Donation impact"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Your Impact Matters
                </h3>
                <p className="mb-4">
                  Every donation helps us create more sustainable green spaces
                  in urban environments. Your contribution directly supports:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>
                      Transforming concrete spaces into vibrant gardens
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Supporting community-led greening initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>
                      Providing educational workshops on sustainable gardening
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mt-1 mr-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>
                      Developing innovative green technologies for urban spaces
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
