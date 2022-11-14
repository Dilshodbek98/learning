import React, { memo } from 'react'

const Simple2 = ({num, numm}) => {
  console.log(numm);
  numm("qweqweqw")
  return (
    <div>Simple2</div>
  )
}

export default memo(Simple2)