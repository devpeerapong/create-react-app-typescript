import * as React from 'react'

import '../styles/layouts/PageLayout.css'

export interface PageLayoutProps {
  title: string
  children?: React.ReactNode
  className?: string
}

function PageLayout(props: PageLayoutProps) {
  const { className } = props
  let css = 'main'

  if (className) {
    css += ' ' + className
  }

  return (
    <section className="page-layout">
      <header className="header">
        <h1 className="title">{props.title}</h1>
      </header>
      <div className={css}>{props.children}</div>
    </section>
  )
}

export default PageLayout
