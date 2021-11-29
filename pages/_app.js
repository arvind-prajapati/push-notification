import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	// useEffect(() => {
	// 	if (navigator && "serviceWorker" in navigator) {
	// 		window.addEventListener("load", function () {
	// 			navigator.serviceWorker.register("/firebase-messaging-sw.js").then(
	// 				function (registration) {
	// 					console.log("Service Worker registration successful with scope: ", registration.scope);
	// 				},
	// 				function (err) {
	// 					console.error("Service Worker registration failed: ", err);
	// 				}
	// 			);
	// 		});
	// 	}
	// }, [])


	return <Component {...pageProps} />
}

export default MyApp
