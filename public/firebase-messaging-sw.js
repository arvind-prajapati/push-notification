// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
firebase.initializeApp({
	apiKey: "AIzaSyD4dLmdmbsHdUnbQSluNBJc9oTQT_eOXm4",
	authDomain: "itshandsdowns.firebaseapp.com",
	projectId: "itshandsdowns",
	storageBucket: "itshandsdowns.appspot.com",
	messagingSenderId: "556771001273",
	appId: "1:556771001273:web:b83780ef8da31b27052c68"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	// Customize notification here
	const notificationTitle = 'Background Message Title';
	const notificationOptions = {
		body: 'Background Message body.',
		icon: '/firebase-logo.png'
	};

	self.registration.showNotification(notificationTitle,
		notificationOptions);
});