import React, {useContext, useEffect, useState} from 'react'
import HighRanker from './HighRanker'
import RankTable from './RankTable'
import {parseAmountFormat} from './utils'
import CheckButton from './CheckButton'
import {getRevenue} from '../service'
import GlobalContext from '../contexts/store'

function RankLadder({activeTab, setActiveTab}) {
  const {setState} = useContext(GlobalContext);
  const [rank, setRank] = useState([]);

  function rankingChange(changeValue) {
    switch (changeValue) {
      case changeValue > 0 :
        return <div style={{color: 'red', fontWeight: 700}}>{changeValue}&#9652;</div>;
      case changeValue < 0 :
        return <div style={{color: 'blue', fontWeight: 700}}>{changeValue}&#9660;</div>;
      default :
        return <div style={{color: '#CACED3', fontWeight: 700}}>NEW</div>;
    }
  }

  const activeColumn = () => {
    switch (activeTab) {
      case 'R':
        return [
          {title: '순위', render: (row) => <div style={{fontWeight: 700}}>{row.revenueRanking}위</div>},
          {title: '라이더', render: (row) => <div>라이더{row.phoneNum}</div>},
          {
            title: '수익',
            render: (row) => (
              <div>
                <span style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  marginRight: '3px'
                }}>{parseAmountFormat(row.totalRevenue)}</span>원
              </div>)
          },
          {
            title: '변동',
            render: (row) => rankingChange(row.drankingChange)
          },
        ]
      case 'C':
        return [
          {title: '순위', render: (row) => <div style={{fontWeight: 700}}>{row.countRanking}위</div>},
          {title: '라이더', render: (row) => <div>라이더{row.phoneNum}</div>},
          {
            title: '건수',
            render: (row) => (
              <div>
                <span style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  marginRight: '3px'
                }}>{parseAmountFormat(row.totalCount)}</span>건
              </div>)
          },
          {
            title: '변동',
            render: (row) => rankingChange(row.drankingChange)
          },
        ]
      case 'D':
        return [
          {title: '순위', render: (row) => <div style={{fontWeight: 700}}>{row.distanceRanking}위</div>},
          {title: '라이더', render: (row) => <div>라이더{row.phoneNum}</div>},
          {
            title: '거리',
            render: (row) => (
              <div>
                <span style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  marginRight: '3px'
                }}>{parseAmountFormat(row.totalDistance)}</span>km
              </div>)
          },
          {
            title: '변동',
            render: (row) => rankingChange(row.drankingChange)
          },
        ]
    }
  }

  useEffect(() => {
    bootstrap()
  }, [activeTab])

  async function bootstrap() {
    try {
      const resp = await getRevenue(activeTab);
      setRank(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (<>
    <HighRanker data={rank.slice(0, 3)} activeTab={activeTab}/>
    <RankTable
      column={activeColumn()}
      data={rank.slice(3)}
    />
    <CheckButton text={'10초만에 나의 순위 확인하기'} enabled={true} onClick={() => setState({page: 1})}/>
  </>)
}

export default RankLadder;