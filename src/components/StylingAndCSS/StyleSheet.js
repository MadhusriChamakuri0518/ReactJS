import React from 'react'
import './myStyle.css'

function StyleSheet(props) {

  let classColor = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={classColor}>StyleSheets</h1>
    </div>
  )
}

export default StyleSheet