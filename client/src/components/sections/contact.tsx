import { useState } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import SectionHeading from "../ui/section-heading";
import GlassCard from "../ui/glass-card";
import GradientButton from "../ui/gradient-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "../../lib/queryClient";
import { useToast } from "../../hooks/use-toast";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";

export default function Contact() {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your interest!",
        description: "Our team will contact you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <SectionHeading
            title="Ready to Transform Your"
            highlightText="Marketing?"
            description="Get in touch with our team to learn how ADmyBRAND AI can boost your ROI."
          />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern collaborative office workspace" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          
          <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
            <GlassCard className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John" 
                              className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                              data-testid="input-firstName"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Doe" 
                              className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                              data-testid="input-lastName"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@company.com" 
                            className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                            data-testid="input-email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company" 
                            className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                            data-testid="input-company"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Marketing Budget</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="bg-slate-800 border-slate-600 text-white"
                              data-testid="select-budget"
                            >
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="$1,000 - $5,000">$1,000 - $5,000</SelectItem>
                            <SelectItem value="$5,000 - $15,000">$5,000 - $15,000</SelectItem>
                            <SelectItem value="$15,000 - $50,000">$15,000 - $50,000</SelectItem>
                            <SelectItem value="$50,000+">$50,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us about your goals</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4}
                            placeholder="Describe your marketing challenges and objectives..." 
                            className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                            data-testid="textarea-message"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <GradientButton 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    {contactMutation.isPending ? "Sending..." : "Get My Custom Strategy"}
                  </GradientButton>
                  
                  <p className="text-xs text-slate-400 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </Form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
