import api from './api';
let sub_id;

const pushServerPublicKey = "BNyGxFoSmc4P1pItx1EX_Zei3l8Uzd-41rNHuXuRiy7KpmLqO1Nxptykwi4XKqV3ccLHuuSWMKOsAtNuAH8gqko"
//request permission from user to send notification.
const requestPermission = () => {
    Notification.requestPermission(function (status) {
    console.log('Notification permission status:', status);
});
}

// register service worker
const registerServiceWorker = ()=> {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('sw.js')
            .then(function (registration) {
                //do whatever you want with this..
                createSubscription(registration);
                checkSubscription(registration);
         })
           .catch(function (err) {
             console.log("Service Worker Failed to Register", err);
          }) 
    }
}

const setPushServerSubscriptionId = ()=>{
    return sub_id;
}

const createSubscription = async (reg) => {
    reg.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey: pushServerPublicKey
    }).then((sub)=>{
        console.log('Endpoint URL: ',sub);
        api.post("/subscription",sub).then((response)=>{
            sub_id = response.data.id;
        })
    }).catch((e)=>{
        if (Notification.permission === 'denied') {
            console.warn("Permission is denied");
        }else{
            console.error(e);
        }
    })
}

//check subscription
const checkSubscription = (reg)=>{
    reg.pushManager.getSubscription().then((sub)=>{
        if(sub==null) {
            console.log("Not subscribed to push service");
        }else{
            console.log('Subscription object: ',sub);
        }
    });
}

//function to invoke push notification.
const displayNotification = () => {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then((reg) => {
            api.post("/",{data:"Sample Data"}).catch((err)=>{
                console.error("Communication with server failed",err)
            })
            
            reg.showNotification('Hello world!');
        });
    }
}

export {requestPermission, registerServiceWorker, displayNotification, setPushServerSubscriptionId};