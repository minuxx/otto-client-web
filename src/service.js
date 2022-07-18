import axios from 'axios'

export const RankingAPI = axios.create({
  baseURL: 'http://dayrider.ranking.pilot.swingmobility.dev:8080',
});

export async function getRevenue(){
  await RankingAPI.get('/rank?type=R');
}