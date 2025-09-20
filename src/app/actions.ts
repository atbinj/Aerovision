// src/app/actions.ts
'use server';

import { 
  suggestFlightParameters, 
  type SuggestFlightParametersInput,
  type SuggestFlightParametersOutput
} from '@/ai/flows/suggest-flight-parameters';

export async function getFlightSuggestions(input: SuggestFlightParametersInput): Promise<{ success: boolean; data?: SuggestFlightParametersOutput; error?: string }> {
  try {
    const result = await suggestFlightParameters(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error in getFlightSuggestions:", error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to get flight suggestions: ${errorMessage}` };
  }
}
