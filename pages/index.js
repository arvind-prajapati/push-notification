import React, { useEffect } from 'react';
import { firebaseCloudMessagin } from "../utils/firebase";
function Home() {
	useEffect(() => {
		const messaaging = firebaseCloudMessagin.init();
		Notification.requestPermission().then((status) => {
			if (status && status == 'granted') {
				messaaging.getToken({ vapidKey: 'BDNDG4iV-hTo0lp-4dTPop77dUX6iDklaKVyKS6TLh1z7Fd3xnTkfJvVu4_thj1tPyAWwvIT2Eg32cUuPvgrqd4' }).then(token => {
					console.log(token);
				})
			}
		});
		// messaaging.onMessage((payload) => {
		// 	console.log('foreground message:', payload);
		// })
	}, []);
	return <div>Web push notification</div>;
}
export default Home;