
import firebase from "firebase/app";
import "firebase/messaging";

export const firebaseCloudMessagin = {
	init: () => {
		const firebaseApp = firebase.initializeApp({
			apiKey: "AIzaSyD4dLmdmbsHdUnbQSluNBJc9oTQT_eOXm4",
			authDomain: "itshandsdowns.firebaseapp.com",
			projectId: "itshandsdowns",
			storageBucket: "itshandsdowns.appspot.com",
			messagingSenderId: "556771001273",
			appId: "1:556771001273:web:b83780ef8da31b27052c68"
		});
		return firebaseApp.messaging();
	}
}