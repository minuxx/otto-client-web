import React from 'react'

function RankTable({data, column}) {

  return (
    <table
      align={'center'} width={'100%'}
      style={{fontSize: '12px', fontWeight: 500}}
    >
      <thead>
      <tr align={'center'}>
        {column.map((ele, idx) => <th key={`column-${idx}`} height={25} style={{color: '#CACED3'}}>{ele.title}</th>)}
      </tr>
      </thead>
      <tbody align={'center'}>
      {data.map((row, rowIdx) => (
        <tr key={`row-${rowIdx}`}>
          {column.map((col, colIdx) => <td key={`col-${colIdx}`} height={25} width={100}>{col.render(row, rowIdx)}</td>)}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default RankTable;