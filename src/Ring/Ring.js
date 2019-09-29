import React from 'react'
import styles from './styles.css'

const Ring = prop => (
  <>
    <div className="lds-ring">
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

export default Ring
