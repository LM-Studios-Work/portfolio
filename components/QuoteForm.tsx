"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, ShoppingCart, Camera, Utensils, Building2, Rocket, HelpCircle, ArrowRight, ArrowLeft } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
  projectType: string;
  projectStatus: string;
  budget: string;
  timeline: string;
  contentReadiness: string;
  currentUrl: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  preferredContact: "WhatsApp",
  projectType: "",
  projectStatus: "New Website Build",
  budget: "",
  timeline: "",
  contentReadiness: "",
  currentUrl: "",
};

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const formSubmitEmail = "lm.studios.web@gmail.com"; // process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateField = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
      if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${formSubmitEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Quote Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        setStep(4);
      } else {
        throw new Error("Something went wrong on the server.");
      }
    } catch (error) {
      console.error(error);
      setSubmissionError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
      { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
      { id: "portfolio", label: "Portfolio", icon: Camera },
      { id: "restaurant", label: "Restaurant", icon: Utensils },
      { id: "corporate", label: "Business/Corp", icon: Building2 },
      { id: "landing", label: "Landing Page", icon: Rocket },
      { id: "other", label: "Other / Not Sure", icon: HelpCircle },
  ];

  const projectStatuses = [
      "New Website Build",
      "Website Redesign",
      "Maintenance / Bug Fix",
      "Speed Optimization / SEO"
  ];

  const budgets = [
      "R1,500 - R2,500",
      "R2,500 - R5,000",
      "R5,000+",
      "N/A"
  ];

  const timelines = [
      "ASAP / Rush",
      "Within 2-4 weeks",
      "1-2 months",
      "Flexible"
  ];

  const readiness = [
      "I have all text and images ready.",
      "I need help creating content.",
      "I am still working on it."
  ];

  const contactOptions = ["WhatsApp", "Call", "Email"];

  if (submissionSuccess || step === 4) {
      return (
          <section id="quote" className="py-20 px-6 bg-card/50 border-t border-border">
              <div className="max-w-2xl mx-auto">
                  <Card className="border-border bg-card text-center p-12">
                      <div className="flex justify-center mb-6">
                          <CheckCircle2 className="h-16 w-16 text-green-500" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                      <p className="text-lg text-muted-foreground mb-8">
                          Thanks, {formData.name}! We've received your project details and will be in touch within 24 hours with a quote.
                      </p>
                      <Button onClick={() => { setStep(1); setSubmissionSuccess(false); setFormData(initialFormData); }} variant="outline">
                          Start New Request
                      </Button>
                  </Card>
              </div>
          </section>
      );
  }

  return (
    <section id="quote" className="py-20 px-6 bg-card/50 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Request a Free Quote</h2>
            <p className="text-lg text-muted-foreground">
                Answer a few questions to help us understand your project needs.
            </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
            <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
                <span className={step >= 1 ? "text-accent" : ""}>Identity</span>
                <span className={step >= 2 ? "text-accent" : ""}>Project Type</span>
                <span className={step >= 3 ? "text-accent" : ""}>Scope</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                    className="h-full bg-accent transition-all duration-300 ease-in-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                />
            </div>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>
                {step === 1 && "Step 1: Contact Information"}
                {step === 2 && "Step 2: Project Details"}
                {step === 3 && "Step 3: Scope & Budget"}
            </CardTitle>
            <CardDescription>
                {step === 1 && "Let us know how to reach you."}
                {step === 2 && "What kind of website do you need?"}
                {step === 3 && "Help us understand your timeline and budget."}
            </CardDescription>
          </CardHeader>
          <CardContent>
              {/* Step 1: Identity */}
              {step === 1 && (
                  <div className="grid gap-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                  id="name"
                                  name="name"
                                  required
                                  placeholder="John Doe"
                                  value={formData.name}
                                  onChange={handleChange}
                              />
                          </div>
                          <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  required
                                  placeholder="john@example.com"
                                  value={formData.email}
                                  onChange={handleChange}
                              />
                          </div>
                      </div>
                      <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              placeholder="+27 66 000 0000"
                              value={formData.phone}
                              onChange={handleChange}
                          />
                      </div>
                      <div className="space-y-3">
                          <Label>Preferred mode of contact</Label>
                          <div className="grid grid-cols-3 gap-3">
                              {contactOptions.map((option) => (
                                  <div
                                      key={option}
                                      onClick={() => updateField("preferredContact", option)}
                                      className={`
                                          cursor-pointer border rounded-md p-3 text-sm font-medium text-center transition-all
                                          ${formData.preferredContact === option
                                              ? "border-accent bg-accent/100 ring-1 ring-accent text-accent-foreground"
                                              : "border-border hover:border-accent/50 hover:bg-accent/5 text-muted-foreground"}
                                      `}
                                  >
                                      {option}
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              )}

              {/* Step 2: Project Type */}
              {step === 2 && (
                  <div className="space-y-8">
                      <div className="space-y-3">
                          <Label>What type of website do you need?</Label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              {projectTypes.map((type) => (
                                  <div
                                      key={type.id}
                                      onClick={() => updateField("projectType", type.label)}
                                      className={`
                                          cursor-pointer border rounded-lg p-4 flex flex-col items-center justify-center gap-3 text-center transition-all
                                          ${formData.projectType === type.label
                                              ? "border-accent bg-accent/10 ring-1 ring-accent"
                                              : "border-border hover:border-accent/50 hover:bg-accent/5"}
                                      `}
                                  >
                                      <type.icon className={`h-8 w-8 ${formData.projectType === type.label ? "text-accent" : "text-muted-foreground"}`} />
                                      <span className="text-sm font-medium">{type.label}</span>
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="space-y-3">
                          <Label>Project Status</Label>
                          <div className="grid sm:grid-cols-2 gap-3">
                              {projectStatuses.map((status) => (
                                  <div
                                      key={status}
                                      onClick={() => updateField("projectStatus", status)}
                                      className={`
                                          cursor-pointer border rounded-md px-4 py-3 text-sm font-medium transition-all
                                          ${formData.projectStatus === status
                                              ? "border-accent bg-accent/100 ring-1 ring-accent text-accent-foreground"
                                              : "border-border hover:border-accent/50 hover:bg-accent/5 text-muted-foreground"}
                                      `}
                                  >
                                      {status}
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              )}

              {/* Step 3: Scope */}
              {step === 3 && (
                  <div className="space-y-6">
                      <div className="space-y-3">
                          <Label>Budget Range</Label>
                          <div className="grid grid-cols-2 gap-3">
                              {budgets.map((budget) => (
                                  <div
                                      key={budget}
                                      onClick={() => updateField("budget", budget)}
                                      className={`
                                          cursor-pointer border rounded-md p-3 text-sm font-medium text-center transition-all
                                          ${formData.budget === budget
                                              ? "border-accent bg-accent/100 ring-1 ring-accent text-accent-foreground"
                                              : "border-border hover:border-accent/50 hover:bg-accent/5 text-muted-foreground"}
                                      `}
                                  >
                                      {budget}
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="space-y-3">
                          <Label>Timeline</Label>
                          <div className="grid grid-cols-2 gap-3">
                              {timelines.map((timeline) => (
                                  <div
                                      key={timeline}
                                      onClick={() => updateField("timeline", timeline)}
                                      className={`
                                          cursor-pointer border rounded-md p-3 text-sm font-medium text-center transition-all
                                          ${formData.timeline === timeline
                                              ? "border-accent bg-accent/100 ring-1 ring-accent text-accent-foreground"
                                              : "border-border hover:border-accent/50 hover:bg-accent/5 text-muted-foreground"}
                                      `}
                                  >
                                      {timeline}
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="space-y-3">
                          <Label>Content Readiness</Label>
                          <div className="grid gap-3">
                              {readiness.map((item) => (
                                  <div
                                      key={item}
                                      onClick={() => updateField("contentReadiness", item)}
                                      className={`
                                          cursor-pointer border rounded-md p-3 text-sm font-medium transition-all
                                          ${formData.contentReadiness === item
                                              ? "border-accent bg-accent/100 ring-1 ring-accent text-accent-foreground"
                                              : "border-border hover:border-accent/50 hover:bg-accent/5 text-muted-foreground"}
                                      `}
                                  >
                                      {item}
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="space-y-2">
                          <Label htmlFor="currentUrl">Current Website URL (Optional)</Label>
                          <Input
                              id="currentUrl"
                              name="currentUrl"
                              placeholder="https://example.com"
                              value={formData.currentUrl}
                              onChange={handleChange}
                          />
                      </div>
                  </div>
              )}

              {submissionError && (
                  <p className="text-sm text-destructive mt-4">
                      {submissionError}
                  </p>
              )}
          </CardContent>
          <CardFooter className="flex justify-between">
              {step > 1 ? (
                  <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
              ) : (
                  <div></div> // Spacer
              )}

              {step < 3 ? (
                  <Button onClick={nextStep} className="bg-accent text-accent-foreground hover:bg-accent/90" disabled={
                        (step === 1 && (!formData.name || !formData.email || !formData.phone || !formData.preferredContact)) ||
                        (step === 2 && (!formData.projectType))
                  }>
                      Next Step <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
              ) : (
                  <Button
                      onClick={handleSubmit}
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      disabled={isSubmitting || !formData.budget || !formData.timeline || !formData.contentReadiness}
                  >
                      {isSubmitting ? (
                          <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                          </>
                      ) : (
                          "Submit Quote Request"
                      )}
                  </Button>
              )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
