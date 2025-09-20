'use server';

/**
 * @fileOverview AI Flight Planner flow that suggests optimal flight parameters based on environmental conditions and mission requirements.
 *
 * - suggestFlightParameters - A function that suggests flight parameters.
 * - SuggestFlightParametersInput - The input type for the suggestFlightParameters function.
 * - SuggestFlightParametersOutput - The return type for the suggestFlightParameters function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFlightParametersInputSchema = z.object({
  weatherConditions: z
    .string()
    .describe('Description of current weather conditions (e.g., sunny, cloudy, windy).'),
  terrainType: z
    .string()
    .describe('Type of terrain the flight will cover (e.g., mountains, plains, urban).'),
  missionRequirements: z
    .string()
    .describe(
      `Specific goals or objectives of the flight (e.g., high-resolution mapping, thermal imaging).
      Include the sensor type and desired resolution.`
    ),
});
export type SuggestFlightParametersInput = z.infer<typeof SuggestFlightParametersInputSchema>;

const SuggestFlightParametersOutputSchema = z.object({
  altitude: z.string().describe('Suggested altitude for the flight (in meters).'),
  speed: z.string().describe('Suggested speed for the flight (in meters per second).'),
  cameraSettings: z
    .string()
    .describe(
      'Suggested camera settings (e.g., ISO, aperture, shutter speed) suitable for the conditions.'
    ),
  flightPathAdjustments: z
    .string()
    .describe(
      'Any additional advice to achieve optimal data collection, considering weather, terrain, and desired output.'
    ),
});
export type SuggestFlightParametersOutput = z.infer<typeof SuggestFlightParametersOutputSchema>;

export async function suggestFlightParameters(input: SuggestFlightParametersInput): Promise<SuggestFlightParametersOutput> {
  return suggestFlightParametersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFlightParametersPrompt',
  input: {schema: SuggestFlightParametersInputSchema},
  output: {schema: SuggestFlightParametersOutputSchema},
  prompt: `You are an expert flight planner specializing in aerial photogrammetry and drone operations.

  Based on the provided environmental conditions, terrain type, and mission requirements, suggest optimal flight parameters, camera settings, and flight path adjustments.

  Consider the following information:

  Weather Conditions: {{{weatherConditions}}}
  Terrain Type: {{{terrainType}}}
  Mission Requirements: {{{missionRequirements}}}

  Provide the response following this format.  The response must be suitable for direct use and not conversational.

  Altitude: <suggested altitude in meters>
  Speed: <suggested speed in meters per second>
  Camera Settings: <suggested camera settings, including ISO, aperture, and shutter speed>
  Flight Path Adjustments: <any advice to achieve optimal data collection, considering weather, terrain, and desired output>
  `,
});

const suggestFlightParametersFlow = ai.defineFlow(
  {
    name: 'suggestFlightParametersFlow',
    inputSchema: SuggestFlightParametersInputSchema,
    outputSchema: SuggestFlightParametersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
