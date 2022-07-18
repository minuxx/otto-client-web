import React, {useEffect} from 'react'
import HighRanker from './HighRanker'
import RankTable from './RankTable'
import {parseAmountFormat} from './utils'
import CheckButton from './CheckButton'
import {getRevenue} from '../service'

const rankData = Array.from({length: 500}, (_, idx) => ({
  rating: idx + 1,
  id: 5054,
  amount: 563690,
  change: 23,
  status: 'up'
}))

function RankLadder() {

  const column = [
    {title: '순위', render: (row) => <div style={{fontWeight: 700}}>{row.rating}위</div>},
    {title: '라이더', render: (row) => <div>라이더{row.id}</div>},
    {
      title: '금액',
      render: (row) => (
        <div>
          <span style={{fontWeight: '700', fontSize: '14px', marginRight: '3px'}}>{parseAmountFormat(row.amount)}</span>원
        </div>)
    },
    {title: '변동', render: () => <div style={{color: '#CACED3', fontWeight: 700}}>NEW</div>},
  ]

  useEffect(()=>{
    bootstrap()
  },[])

  async function bootstrap (){
    console.log(await getRevenue())
  }

  return (<>
    <HighRanker/>
    <RankTable
      column={column}
      data={rankData}
    />
    <CheckButton text={'10초만에 나의 순위 확인하기'} onClick={() => window.location.reload()}/>
  </>)
}

export default RankLadder;