import React, {useContext, useEffect, useState} from 'react'
import HighRanker from './HighRanker'
import RankTable from './RankTable'
import {parseAmountFormat, parsePhoneNum} from './utils'
import CheckButton from './CheckButton'
import {getRevenue} from '../service'
import GlobalContext from '../contexts/store'
import BG from '../images/platformIcons/bg_icon.svg'
import BM from '../images/platformIcons/bm_icon.svg'
import CP from '../images/platformIcons/cp_icon.svg'
import SD from '../images/platformIcons/sd_icon.svg'
import VR from '../images/platformIcons/vr_icon.svg'

function RankLadder({activeTab}) {
  const {setState} = useContext(GlobalContext);
  const [rank, setRank] = useState([]);

  function rankingChange(changeValue) {
    if (changeValue > 0) {
      return <div style={{color: 'red', fontWeight: 700}}>{changeValue} &#9650;</div>;
    } else if (changeValue < 0) {
      return <div style={{color: 'blue', fontWeight: 700}}>{changeValue} &#9660;</div>;
    } else
      return <div style={{color: '#CACED3', fontWeight: 700}}>NEW</div>;
  }

  function showPlatformIcons(platformTypes) {
    if (!platformTypes) return
    const platformIcons = {
      BG, BM, CP, SD, VR
    }

    return (
      <div>
        {platformTypes.map((platform, idx) => (
          <img key={`platform-${idx}`} style={{width: '15px', marginRight: '2px'}} src={platformIcons[platform]}/>))}
      </div>
    )
  }

  const activeColumn = () => {
    switch (activeTab) {
      case 'R':
        return [
          {title: '순위', render: (row) => <div style={{ fontWeight: 700}}>{row.revenueRanking}위</div>},
          {title: '라이더', render: (row) => <div style={{ fontWeight: 500}}>{parsePhoneNum(row.phoneNum)}님</div>},
          {title: '플랫폼', render: row => showPlatformIcons(row.platformTypes)},
          {
            title: '금액',
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
            render: (row) => {
              return rankingChange(row.rankingChange)
            }
          },
        ]
      case 'C':
        return [
          {title: '순위', render: (row) => <div style={{fontWeight: 700}}>{row.countRanking}위</div>},
          {title: '라이더', render: (row) => <div style={{fontWeight: 500}}>{parsePhoneNum(row.phoneNum)}님</div>},
          {title: '플랫폼', render: row => showPlatformIcons(row.platformTypes)},
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
            render: (row) => rankingChange(row.crankingChange)
          },
        ]
      case 'D':
        return [
          {title: '순위', render: (row) => <div style={{fontWeight: 700}}>{row.distanceRanking}위</div>},
          {title: '라이더', render: (row) => <div style={{fontWeight: 500}}>{parsePhoneNum(row.phoneNum)}님</div>},
          {title: '플랫폼', render: row => showPlatformIcons(row.platformTypes)},
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
    <HighRanker data={rank.slice(0, 3)} activeTab={activeTab} showPlatformIcons={showPlatformIcons}/>
    <RankTable
      column={activeColumn()}
      data={rank.slice(3)}
    />
    <CheckButton text={'10초만에 나의 순위 확인하기'} enabled={true} onClick={() => setState({page: 1})}/>
  </>)
}

export default RankLadder;