/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import { Entity } from './entity';

/**
 * Notices mapper class.
 */
@Injection.Describe({ singleton: true, name: 'notices' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Load any new notices for the current user session.
   * @returns Returns a promise to get the notice entity.
   * @throws Throws an error when the user session wasn't found.
   */
  @Class.Public()
  public async loadMe(): Promise<Entity | undefined> {
    return await this.mapper.findById('me');
  }
}
