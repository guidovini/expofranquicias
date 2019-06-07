import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ContactoStyles from './contacto.module.scss'

const Contacto = () => {
  return (
    <Layout>
      <SEO title="Franquicias Disponibles en Ecuador" />
      <h2>Contacto</h2>
      <form className={ContactoStyles.form}>
        <label>Nombre</label>
        <input type="text" className={ContactoStyles.field} />

        <label>Comentario</label>
        <textarea className={ContactoStyles.field} />
        <button className={ContactoStyles.button}>Submit</button>
      </form>
    </Layout>
  )
}

export default Contacto
