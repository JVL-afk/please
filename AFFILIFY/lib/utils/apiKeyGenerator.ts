import crypto from 'crypto';

const API_KEY_PREFIX = 'affilify-sk-';
const API_KEY_LENGTH = 32; // Length of the random part

/**
 * Generates a cryptographically secure random API key.
 * @returns {string} The generated API key (e.g., affilify-sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx).
 */
export function generateApiKey(): string {
  const randomBytes = crypto.randomBytes(API_KEY_LENGTH);
  const randomString = randomBytes.toString('hex').slice(0, API_KEY_LENGTH);
  return `${API_KEY_PREFIX}${randomString}`;
}

