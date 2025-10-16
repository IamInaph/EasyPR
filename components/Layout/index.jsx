import React from 'react'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Header'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Layout({ plan, children }) {
	return (
		<>
			<div id='wrapper'>
				<Header plan={plan} />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	)
}
