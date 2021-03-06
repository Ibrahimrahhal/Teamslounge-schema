import Notification from './Notification';
import NotificationsTypes from './Notifications.types';
import JoinRequestAnsweredNotification from './JoinRequest-P.Notification';
import UserJoinRequestToRelatedProjectNotification from './JoinRequest-U.notification';
import ProjectJoinRequestNotification from './JoinRequest-P.Notification';

export default {
    Base: Notification,
    Types: NotificationsTypes,
    JoinRequest: {
        onRequestAnswer: JoinRequestAnsweredNotification,
        onUserInvite: ProjectJoinRequestNotification,
        onUserRequest: UserJoinRequestToRelatedProjectNotification
    }
}