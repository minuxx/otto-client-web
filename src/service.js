import axios from 'axios'

export const RankingAPI = axios.create({
  baseURL: 'https://dayrider.ranking.pilot.swingmobility.dev',
});

export async function getRevenue(activeTab) {
  return await RankingAPI.get(`rank?type=${activeTab}`);
}

export async function registerRidingInfo(request) {
  await RankingAPI.post('/register', request)
}
