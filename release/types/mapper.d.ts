/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Notices mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load any new notices for the current user session.
     * @returns Returns a promise to get the notice entity.
     * @throws Throws an error when the user session wasn't found.
     */
    loadMe(): Promise<Entity | undefined>;
}
