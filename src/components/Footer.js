import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        marginRigth: '1rem',
        position: 'absolute',
        bottom: '0',
        width: '92%',
        paddingBottom: '2.5rem',
      }}
    >
      <p>
        Copyright © {new Date().getFullYear()} Expofranquicias Ecuador. Todos
        los derechos reservados. Un servicio de{' '}
        <a href="http://www.ecuafranquicias.com" target="_blank">
          Ecuafranquicias
        </a>
      </p>
    </footer>
  )
}

export default Footer
