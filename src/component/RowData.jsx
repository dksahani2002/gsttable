import React from 'react'

const RowData = ({index,prop}) => {
    console.log("prop:",prop)
    const result=[];
    for(let i=0;i<prop.length;i++){
        result.push(<td>{prop[i]}</td>)
    }
  return (
    <>
     {result}
    </>
  )
}

export default RowData