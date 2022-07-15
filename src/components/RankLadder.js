import React from 'react'
import HighRanker from './HighRanker'
import RankTable from './RankTable'
import {parseAmountFormat} from './utils'

const rankData = Array.from({length:500}, (_, idx) => ({rating: idx+1, id: 5054, amount: 563690, change: 23, status: 'up'}) )
// const rankData = [
//   {rating: 1, id: 5054, amount: 563690, change: 23, status: 'up'},
//   {rating: 2, id: 2054, amount: 323690, change: 6, status: 'down'},
//   {rating: 3, id: 4054, amount: 133690, change: 0, status: 'new'},
//   {rating: 4, id: 4054, amount: 133690, change: 0, status: 'new'},
//   {rating: 5, id: 4054, amount: 133690, change: 0, status: 'new'},
//   {rating: 6, id: 4054, amount: 133690, change: 0, status: 'new'},
//   {rating: 7, id: 4054, amount: 133690, change: 0, status: 'new'},
//   {rating: 8, id: 4054, amount: 133690, change: 0, status: 'new'},
// ]

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
    {title: '변동', render: (row) => <div style={{color: '#CACED3', fontWeight:700}}>NEW</div>},
  ]

  return (<>
    <HighRanker/>
    <RankTable
      column={column}
      data={rankData}
    />
  </>)
}

export default RankLadder;