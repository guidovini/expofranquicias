import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import contactoStyles from './contacto.module.scss'

const Contacto = () => {
  return (
    <Layout>
      <SEO title="Contacto" />
      <h2 className="title is-2 has-text-centered">Contacto</h2>
      <p className={contactoStyles.textCentered}>
        Para obtener más información, comuníquese con nosotros.
      </p>
      <div className="column is-6 is-offset-3">
        <p className={contactoStyles.text}>
          <strong>Teléfono:</strong> (02) 255 4653; (02) 254 1257
        </p>
        <p className={contactoStyles.text}>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:info@ecuafranquicias.com">info@ecuafranquicias.com</a>
        </p>
        <p className={contactoStyles.text}>
          <strong>Dirección:</strong> Av. América N31-42 y San Gabriel. Edificio
          Megaron PB Oficina 2. Quito - Ecuador.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '3rem',
          marginBottom: '5rem',
        }}
      >
        <p>Un servicio de: </p>
        <br />
        <a href="http://www.ecuafranquicias.com" target="_blank">
          <img src={require('../images/ecuafranquicias-logo.png')} />
        </a>
      </div>
    </Layout>
  )
}

export default Contacto
