import React from 'react'

function RankTable({data, column}) {

  return (
    <table
      align={'center'} width={'100%'}
      style={{fontSize: '12px', fontWeight: 500}}
    >
      <thead>
      <tr align={'center'}>
        {column.map((ele, idx) => <th key={`column-${idx}`} height={35} style={{color: '#CACED3'}}>{ele.title}</th>)}
      </tr>
      </thead>
      <tbody align={'center'}>
      {data.map((row, rowIdx) => (
        <tr key={`row-${rowIdx}`}>
          {column.map((col, colIdx) =>
            <td style={{verticalAlign: "middle"}} key={`col-${colIdx}`} height={35} width={100}>
              <div style={{height: '100%'}}>{col.render(row, rowIdx)}</div>
            </td>)}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default RankTable;