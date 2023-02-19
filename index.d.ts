/*!
    @e53e04ac/ipp5-bookshelf-reader-router/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Router as ExpressRouter } from 'express';
import { RequestHandler as ExpressRequestHandler } from 'express';
import { default as Joi } from 'joi';

import { DateTime } from 'date-time';
import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';
import { Ipp5DailySummaryData } from 'ipp5-types';
import { Ipp5MenuData } from 'ipp5-types';
import { Ipp5MonthlySummaryData } from 'ipp5-types';
import { Ipp5YearlySummaryData } from 'ipp5-types';

export declare namespace Ipp5BookshelfReaderRouter {

    type Options = Record<never, never>;

    type EventSpecs = {
        menuData: {
            input: {
                readonly tenantId: string;
                readonly time: DateTime;
            };
            output: {
                readonly error?: null | Error;
                readonly menuData?: null | Ipp5MenuData;
            };
        };
        yearlySummaryData: {
            input: {
                readonly tenantId: string;
                readonly time: DateTime;
            };
            output: {
                readonly error?: null | Error;
                readonly yearlySummaryData?: null | Ipp5YearlySummaryData;
            };
        };
        monthlySummaryData: {
            input: {
                readonly tenantId: string;
                readonly time: DateTime;
            };
            output: {
                readonly error?: null | Error;
                readonly monthlySummaryData?: null | Ipp5MonthlySummaryData;
            };
        };
        dailySummaryData: {
            input: {
                readonly tenantId: string;
                readonly time: DateTime;
            };
            output: {
                readonly error?: null | Error;
                readonly dailySummaryData?: null | Ipp5DailySummaryData;
            };
        };
    };

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly schemaTime: Get<Joi.ObjectSchema<{
            readonly year: number;
            readonly month: number;
            readonly day: number;
        }>>;
        readonly paramHandlerTenantId: Get<ExpressRequestHandler<Record<string, unknown>, unknown, unknown, unknown, Partial<{
            tenantId: string;
        }>>>;
        readonly paramHandlerTime: Get<ExpressRequestHandler<Record<string, unknown> & Partial<{
            readonly year: unknown;
            readonly month: unknown;
            readonly day: unknown;
        }>, unknown, unknown, unknown, Partial<{
            time: DateTime;
        }>>>;
        readonly requestHandlerMenuData: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Readonly<{
            readonly tenantId: string;
            readonly time: DateTime;
        }>>>;
        readonly requestHandlerYearlySummaryData: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Readonly<{
            readonly tenantId: string;
            readonly time: DateTime;
        }>>>;
        readonly requestHandlerMonthlySummaryData: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Readonly<{
            readonly tenantId: string;
            readonly time: DateTime;
        }>>>;
        readonly requestHandlerDailySummaryData: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Readonly<{
            readonly tenantId: string;
            readonly time: DateTime;
        }>>>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5BookshelfReaderRouter: Get<_Self>;
        readonly expressRouter: Get<ExpressRouter>;
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5BookshelfReaderRouter = Ipp5BookshelfReaderRouter.Self;

export declare const Ipp5BookshelfReaderRouter: Ipp5BookshelfReaderRouter.ConstructorWithCompanion;
