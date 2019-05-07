/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Issues from '@juridoc/client-issues';
import * as Messages from '@juridoc/client-messages';
import * as Notifications from '@juridoc/client-notifications';

/**
 * Notices entity class.
 */
@RestDB.Schema.Entity('notices')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * New issues.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(() => Issues.Entity)
  @Class.Public()
  public issueList!: Issues.Entity[];

  /**
   * New messages.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(() => Messages.Entity)
  @Class.Public()
  public messageList!: Messages.Entity[];

  /**
   * New notifications.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(() => Notifications.Entity)
  @Class.Public()
  public notificationList!: Notifications.Entity[];
}
