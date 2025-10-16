import '@/styles/style.scss'
import Script from 'next/script'
import '@/styles/globals.css'
import { GoogleTagManager } from '@next/third-parties/google'

export const revalidate = 60

export const metadata = {
	title: 'Press Release Publishing | EasyPRwire',
	description:
		"Get high-quality press release distribution to major news sites in the US, UK and more. Boost your brand's visibility with EasyPRWire. Publish your news today!",
}

export default function RootLayout({ children }) {
	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'EasyPRwire',
		url: 'https://www.easyprwire.com',
		logo: '/images/logo.png',
		description:
			'EasyPRwire offers online press release distribution to help businesses and brands gain media exposure.',
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+1-917-475-0021',
			contactType: 'Customer Service',
			areaServed: 'US',
			availableLanguage: ['English'],
		},
		sameAs: [
			'https://www.facebook.com/easyprwire',
			'https://www.twitter.com/easyprwire',
			'https://www.linkedin.com/company/easyprwire',
		],
	}

	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				{/* Schema.org JSON-LD */}
				<Script
					id='organization-schema'
					type='application/ld+json'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
				/>

				{/* New Relic */}
				<Script
					id='newrelic-script'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
              ;window.NREUM||(NREUM={});
              NREUM.init={
                distributed_tracing: { enabled: true },
                privacy: { cookies_enabled: true },
                ajax: { deny_list: ["bam.nr-data.net"] }
              };
              NREUM.loader_config = {
                accountID: "6613224",
                trustKey: "6613224",
                agentID: "1589070332",
                licenseKey: "NRJS-7977e61bea634284c2e",
                applicationID: "1589070332"
              };
              NREUM.info = {
                beacon: "bam.nr-data.net",
                errorBeacon: "bam.nr-data.net",
                licenseKey: "NRJS-7977e61bea634284c2e",
                applicationID: "1589070332",
                sa: 1
              };
            `,
					}}
				/>

				{/* Google Tag Manager */}
				<GoogleTagManager gtmId='GTM-M5X7GV5V' />
				{/* <Script
					id='gtm-script'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M5X7GV5V');
            `,
					}}
				/> */}

				{/* Facebook Pixel */}
				<Script
					id='facebook-pixel'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '652254534386061');
              fbq('track', 'PageView');
            `,
					}}
				/>

				{/* Favicons and Meta */}
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</head>
			<body>
				{/* Noscript for GTM */}
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-M5X7GV5V'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>

				{/* Noscript for Facebook Pixel */}
				<noscript>
					<img
						height='1'
						width='1'
						style={{ display: 'none' }}
						src='https://www.facebook.com/tr?id=652254534386061&ev=PageView&noscript=1'
						alt='fb-pixel'
					/>
				</noscript>

				{children}

				<Script
					src='https://accounts.google.com/gsi/client'
					strategy='beforeInteractive'
				/>
			</body>
		</html>
	)
}
