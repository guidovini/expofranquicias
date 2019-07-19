import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby' // mocked

import Layout from '../Layout'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `GatsbyJS`,
        },
      },
    })
  )
})

describe(`Layout`, () => {
  test(`Should_RenderAHeader`, () => {
    const { container } = render(
      <Layout>
        <main>
          <h1>hello</h1>
        </main>
      </Layout>
    )

    expect(container.querySelector(`header`)).toBeInTheDocument()
  })

  test(`Should_RenderLayoutChildren`, () => {
    const text = `__Hello world__`
    const { getByText } = render(
      <Layout>
        <main>
          <h1>{text}</h1>
        </main>
      </Layout>
    )

    const child = getByText(text)

    expect(child).toBeInTheDocument()
  })
})
