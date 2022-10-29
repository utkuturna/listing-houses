import type { NextApiRequest, NextApiResponse } from 'next';
import { apiKey } from '../../../lib/network/apiClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  const response = await fetch(
    `https://partnerapi.funda.nl/feeds/Aanbod.svc/json/${apiKey}/?type=koop&zo=/${slug}`
  );
  const data = await response.json();
  res.status(200).json(data);
}
