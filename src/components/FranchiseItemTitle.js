import React from 'react'

const FranchiseItemTitle = ({ nombre, concepto }) => {
  return (
    <>
      <h3
        className="title is-4 has-text-grey-dark"
        data-testid="franchise-name"
      >
        {nombre}
      </h3>
      <p
        className="subtitle is-6 has-text-grey-dark"
        style={{
          fontSize: '1.125rem',
          opacity: '0.7',
        }}
        data-testid="franchise-concept"
      >
        {concepto}
      </p>
    </>
  )
}

export default FranchiseItemTitle
