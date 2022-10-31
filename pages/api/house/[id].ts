import type { NextApiRequest, NextApiResponse } from 'next';
import { apiKey } from '../../../lib/network/apiClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const response = await fetch(
      `https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${apiKey}/koop/${id}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json(null);
  }
}
