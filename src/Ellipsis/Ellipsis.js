import React from 'react'
import styles from './styles.css'

const Ellipsis = prop => (
  <>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <style jsx>{`
      ${styles}
    `}</style>
  </>
)

export default Ellipsis
