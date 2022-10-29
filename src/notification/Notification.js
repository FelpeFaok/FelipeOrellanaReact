// import './Notification.css'
// import { createContext, useState } from "react"

// const Notification = ({ msg, severity }) => {
//     const notificationStyles = {
//       position: 'absolute',
//       top: 100,
//       right: 10,
//       padding: '10px 20px 10px 20px',
//     //   background: severity === 'success' ? 'green' : 'red',
//       color: 'white'
//     }
  
//     if(msg === '') return

//     return (
//       <div className={severity === 'success' ? 'greenClass' : 'redClass'} style={notificationStyles}>
//         {msg}
//       </div>
//     )
// }

// export const NotificationContext = createContext()

// export const NotificationProvider = ({ children }) => {
//     const [message, setMessage] = useState('')
//     const [severity, setSeverity] = useState('success')

//     const setNotification = (severity, msg) => {
//         setMessage(msg)
//         setSeverity(severity)

//         setTimeout(() => {
//             setMessage('')
//         }, 2000)
//     }

//     return (
//         <NotificationContext.Provider value={{ setNotification }}>
//             <Notification msg={message} severity={severity}/>
//             { children }
//         </NotificationContext.Provider>
//     )
// }