import React from 'react'

function RankTable({data, column}) {

  return (
    <table
      align={'center'} width={'100%'}
      style={{fontSize:'12px', fontWeight:500}}
    >
      <thead>
      <tr align={'center'}>
        {column.map(e => <th height={25} style={{color: '#CACED3'}}>{e.title}</th>)}
      </tr>
      </thead>
      <tbody align={'center'}>
      {data.map(row => (
        <tr >
          {column.map(col => <td height={25} width={100} >{col.render(row)}</td>)}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default RankTable;