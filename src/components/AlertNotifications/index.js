import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
// import {} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

// const notificationsView = [
//   {
//     heading: 'Success',
//     description: ,
//     icons: <AiFillCheckCircle />,
//   },
//   {
//     heading: 'Error',
//     description:
//       'Sorry, you are not authorized to have access the delete the file',
//     icons: <RiErrorWarningFill />,
//   },
//   {
//     heading: 'Warning',
//     description: 'Viewers of the file can see commands and suggestions',
//     icons: <MdWarning />,
//   },
//   {
//     heading: 'Info',
//     description: 'Anyone on the internet can view these files',
//     icons: <MdInfo />,
//   },
// ]
const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle />
      <div>
        <h1>Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill />
      <div>
        <h1>Error</h1>
        <p>Sorry, you are not authorized to have access the delete the file</p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning />
      <div>
        <h1>Warning</h1>
        <p>Viewers of the file can see commands and suggestions</p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <MdInfo />
      <div>
        <h1>Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div>
      <h1 className="alert-heading">Alert Notification</h1>
      {renderSuccessNotification()}
      {renderErrorNotification()}
      {renderWarningNotification()}
      {renderInfoNotification()}
    </div>
  )
}

export default AlertNotifications
