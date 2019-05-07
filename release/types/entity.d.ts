/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Issues from '@juridoc/client-issues';
import * as Messages from '@juridoc/client-messages';
import * as Notifications from '@juridoc/client-notifications';
/**
 * Notices entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * New issues.
     */
    issueList: Issues.Entity[];
    /**
     * New messages.
     */
    messageList: Messages.Entity[];
    /**
     * New notifications.
     */
    notificationList: Notifications.Entity[];
}
