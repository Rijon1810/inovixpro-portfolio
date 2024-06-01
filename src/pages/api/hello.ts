// src/pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Define the handler function for the API route
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Send a JSON response with a status code of 200 (OK)
  res.status(200).json({ message: 'Hello, world!' });
}
