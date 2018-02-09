// importScripts('notify.js');

// addEventListener('message', function (e) {
//     var data = e.data;
//     switch (data.cmd) {
//         case 'start':
//             setTimeout(() => {
//                 var myNotification = new Notify('Yo dawg!', {
//                     body: 'This is an awesome notification',
//                     tag: 'Say hay!',
//                     notifyShow: onShowNotification,
//                     notifyClose: onCloseNotification,
//                     notifyClick: onClickNotification,
//                     notifyError: onErrorNotification,
//                     timeout: 4
//                 });
    
//                 myNotification.show();
//             }, 4000);
//             break;
    
//         default:
//             break;
//     }
// }, false)