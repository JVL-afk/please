
'use client'

import { useState } from 'react';
import { Button } from '../ui/button'; // Changed from path alias to relative path

// Placeholder: Replace with actual logic to get user plan
const useUserPlan = () => {
  // In a real app, this would fetch user data from context or an API
  return { plan: 'Enterprise', isLoading: false }; // Example: Assume Enterprise plan
};

export default function ApiKeyGenerator() {
  const { plan, isLoading: isPlanLoading } = useUserPlan();
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateKey = async () => {
    setIsLoading(true);
    setError(null);
    setApiKey(null);

    try {
      const response = await fetch('/api/generate-api-key', {
        method: 'POST',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setApiKey(data.apiKey);
    } catch (err: any) {
      setError(err.message || 'Failed to generate API key.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Don't render anything if plan is loading or user is not Enterprise
  if (isPlanLoading || plan !== 'Enterprise') {
    return null;
  }

  return (
    <div className="mt-6 p-4 border border-[rgba(255,255,255,0.1)] rounded-md bg-[rgba(0,0,0,0.1)]">
      <h3 className="text-lg font-semibold mb-2">Generate AI Bot API Key</h3>
      <p className="text-sm text-[var(--text-secondary)] mb-3">
        As an Enterprise user, you can generate an API key to interact directly with the Affilify AI bot.
      </p>
      
      <Button
        onClick={handleGenerateKey}
        disabled={isLoading}
        variant="secondary" // Use a secondary style for this button
        size="sm"
      >
        {isLoading ? 'Generating...' : 'Generate New API Key'}
      </Button>

      {isLoading && (
         <div className="mt-3 text-sm text-[var(--text-secondary)]">Generating key...</div>
      )}

      {error && (
        <div className="mt-3 text-sm text-red-400 bg-red-900/30 border border-red-700 p-2 rounded-md">
          Error: {error}
        </div>
      )}

      {apiKey && (
        <div className="mt-3 space-y-2">
            <p className="text-sm text-green-400">API Key Generated Successfully:</p>
            <div className="flex items-center gap-2 p-2 rounded-md bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)]">
                <code className="text-sm break-all flex-1">{apiKey}</code>
                <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => navigator.clipboard.writeText(apiKey)}
                    title="Copy to clipboard"
                >
                    Copy
                </Button>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">Please store this key securely. It will not be shown again.</p>
        </div>
      )}
    </div>
  );
}

