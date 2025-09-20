'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getFlightSuggestions } from '@/app/actions';
import type { SuggestFlightParametersOutput } from '@/ai/flows/suggest-flight-parameters';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2, Thermometer, Mountain, Target } from "lucide-react";

const formSchema = z.object({
  weatherConditions: z.string().min(3, "Please describe the weather conditions."),
  terrainType: z.string().min(3, "Please describe the terrain type."),
  missionRequirements: z.string().min(10, "Please describe the mission requirements in detail."),
});

const AiFlightPlannerSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SuggestFlightParametersOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weatherConditions: "",
      terrainType: "",
      missionRequirements: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    const response = await getFlightSuggestions(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error || "An unexpected error occurred.",
      });
    }

    setIsLoading(false);
  }

  return (
    <section id="ai-planner" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              AI Flight Planner
            </h2>
            <p className="mt-4 text-lg text-foreground/80 text-balance">
              Leverage our AI to get optimal flight parameters for your mission. Enter the environmental conditions and mission goals to receive expert suggestions instantly.
            </p>
            <Card className="mt-8 bg-background">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardHeader>
                    <CardTitle>Mission Parameters</CardTitle>
                    <CardDescription>Fill in the details below to get a suggestion.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="weatherConditions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center"><Thermometer className="w-4 h-4 mr-2" />Weather Conditions</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Sunny, 10 km/h wind from SW" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="terrainType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center"><Mountain className="w-4 h-4 mr-2" />Terrain Type</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Rolling hills, sparse vegetation" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="missionRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center"><Target className="w-4 h-4 mr-2" />Mission Requirements</FormLabel>
                          <FormControl>
                            <Textarea placeholder="e.g., High-resolution mapping, RGB sensor, 2cm/px GSD" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Wand2 className="mr-2 h-4 w-4" />
                      )}
                      Generate Suggestions
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </div>

          <div className="flex items-center justify-center">
            {isLoading && (
              <div className="text-center">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
                <p className="mt-4 text-lg text-muted-foreground">Generating flight plan...</p>
              </div>
            )}
            {result && (
              <Card className="w-full max-w-xl shadow-2xl bg-background">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Suggested Flight Parameters</CardTitle>
                  <CardDescription>Based on your input, here is our AI's recommendation.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-base">
                  <p><strong>Altitude:</strong> {result.altitude}</p>
                  <p><strong>Speed:</strong> {result.speed}</p>
                  <p><strong>Camera Settings:</strong> {result.cameraSettings}</p>
                  <p><strong>Flight Path Adjustments:</strong> {result.flightPathAdjustments}</p>
                </CardContent>
              </Card>
            )}
            {!isLoading && !result && (
              <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                <Wand2 className="mx-auto h-12 w-12" />
                <p className="mt-4 text-lg">Your AI-generated flight plan will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiFlightPlannerSection;
