import React from 'react'

function Columns() {
  return (
    <React.Fragment>
        <td>Name</td>
        <td>Madhusri</td>
    </React.Fragment>

    // we can also use the shorter syntax as 
    // <>
    // but can't use the attribute "key" inside the React fragment like this <React.Fragment key={}></React.Fragment>
    // </>
  )
}

export default Columns