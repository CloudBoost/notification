import React from 'react';
import Popover from 'material-ui/Popover';
import {ToolbarTitle} from 'material-ui/Toolbar';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {xhrClient} from './xhrClient';

//css
require('./styles.css')
const toolbartitle = {
    fontSize: 18
};

class Notifications extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    handleTouchTap = (event) => {
        event.preventDefault()
        this.setState({open: true, anchorEl: event.currentTarget})
    }

    handleRequestClose = () => {
        this.setState({open: false})
    }
    callAction(data) {
        let {url, method, payload} = data;
        xhrClient({url: url, method: method, data: payload});
    }
    render() {
        let {notifications} = this.props

        let pendingTasks = notifications.length || 4;
        let notificationsUnSeen = notifications.filter((x) => !x.seen).length;
        let notificationDiv = notifications.map((x, i) => {
            let cancelButton = x.meta.cancelButton;
            let acceptButton = x.meta.acceptButton;

            return (
                <div className="notificationdiv" key={i}>
                    {x.icon
                        ? <img src={x.icon} className="notinvicon"></img>
                        : <i className="ion ion-ios-bell notinvicon"></i>
}
                    <p className="nottextinv" dangerouslySetInnerHTML={{
                        __html: x.text
                    }}></p>
                    {acceptButton
                        ? <div className="noteinvbtncontainer">
                                {cancelButton
                                    ? <button className="cancelbtnnotinv" onClick={this.callAction.bind(this, cancelButton)}>{cancelButton.text}</button>
                                    : ''}
                                <button className="acceptbtnnotinv" onClick={this.callAction.bind(this, acceptButton)}>{acceptButton.text}</button>
                            </div>
                        : ''}
                </div>
            )
        })
        // let notifications = (
        //     <div className="notification-wrap">
        //         <div className="notificationdiv" key={1}>
        //             <i className="ion ion-ios-bell notinvicon"></i>
        //             <p className="nottextinv" dangerouslySetInnerHTML={{
        //                 __html: 'You have been invited to collaborate on Student App. Do you want to accept the invite?'
        //             }}></p>
        //             <div className="noteinvbtncontainer">
        //                 <button className="cancelbtnnotinv ">Reject</button>
        //                 <button className="acceptbtnnotinv ">Accept</button>
        //             </div>
        //         </div>
        //         <div className="notificationdiv" key={2}>
        //             <img src="/assets/images/cblogo.png" className="notinvicon"></img>
        //             <p className="nottextinv" dangerouslySetInnerHTML={{
        //                 __html: 'You have been invited to collaborate on Student App. Do you want to accept the invite?'
        //             }}></p>
        //
        //         </div>
        //         <div className="notificationdiv" key={3}>
        //             <img src="/assets/images/cache-rocket.png" className="notinvicon"></img>
        //             <p className="nottextinv" dangerouslySetInnerHTML={{
        //                 __html: 'You have been invited to collaborate on Student App. Do you want to accept the invite?'
        //             }}></p>
        //             <div className="noteinvbtncontainer">
        //                 <button className="okbtnnotinv ">Ok</button>
        //             </div>
        //         </div>
        //         <div className="notificationdiv" key={4}>
        //             <img src="/assets/images/user-default-image.jpg" className="notinvicon"></img>
        //             <p className="nottextinv" dangerouslySetInnerHTML={{
        //                 __html: 'You have been invited to collaborate on Student App. Do you want to accept the invite?'
        //             }}></p>
        //             <div className="noteinvbtncontainer">
        //                 <button className="cancelbtnnotinv ">Reject</button>
        //                 <button className="acceptbtnnotinv ">Accept</button>
        //             </div>
        //         </div>
        //     </div>
        // )

        return (
            <div>
                <ToolbarTitle style={toolbartitle} text="" onTouchTap={this.handleTouchTap}/>
                <Badge badgeContent={notificationsUnSeen} primary={true} className="notebadge" onTouchTap={this.handleTouchTap}>
                    <NotificationsIcon/>
                </Badge>
                <Popover open={this.state.open} anchorEl={this.state.anchorEl} anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom'
                }} targetOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                }} onRequestClose={this.handleRequestClose} className="popovernotifications">
                    <div className="profilepoparrow"></div>

                    <p className="headingpop">NOTIFICATIONS {pendingTasks
                            ? (' - ' + pendingTasks + ' Pending')
                            : ''}</p>
                    {!pendingTasks
                        ? <div style={{
                                textAlign: 'center'
                            }}>
                                <i className="ion-ios-bell notificationemptybell"></i>
                                <p className="notificationemptymessage">We'll let you know when we've got something new for you!</p>
                            </div>
                        : ''
}
                    <div className="notification-wrap">
                        {notificationDiv}</div>
                </Popover>
            </div>
        )
    }

}

export default Notifications;
