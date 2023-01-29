/*!
    @e53e04ac/ipp5-bookshelf-reader-router/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { Router as ExpressRouter } from 'express';
import { default as Joi } from 'joi';

import { DateTime } from 'date-time';
import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';

/** @type {import('.').Ipp5BookshelfReaderRouter.Constructor} */
const constructor = ((options) => {

    const _options = ({});

    /** @type {import('.').Ipp5BookshelfReaderRouter._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        schemaTime: hold(() => {
            return Joi.object().unknown(false).keys({
                year: Joi.number().integer().min(2000).max(2999).default(2000),
                month: Joi.number().integer().min(1).max(12).default(1),
                day: Joi.number().integer().min(1).max(31).default(1),
            }).custom((value, helpers) => {
                const date = new Date(value.year, value.month - 1, value.day);
                if (value.year == date.getFullYear() && value.month == date.getMonth() + 1 && value.day == date.getDate()) {
                    return value;
                }
                throw new Error();
            });
        }),
        paramHandlerTenantId: hold(() => {
            return ((req, res, next) => {
                if (res.locals.tenantId === undefined) {
                    throw new Error('tenantId');
                } else {
                    next();
                }
            });
        }),
        paramHandlerTime: hold(() => {
            return ((req, res, next) => {
                _self.schemaTime().validateAsync({
                    year: req.params.year,
                    month: req.params.month,
                    day: req.params.day,
                }).then((value) => {
                    res.locals.time = DateTime.from(value);
                    next();
                }).catch((error) => {
                    next(error);
                });
            });
        }),
        requestHandlerMenuData: hold(() => {
            return ((req, res, next) => {
                (async () => {
                    const result = await self.callExactOne('menuData', {
                        tenantId: res.locals.tenantId,
                        time: res.locals.time,
                    });
                    res.status(200).type('application/json').end(JSON.stringify(result, null, 2));
                })().catch((error) => {
                    next(error);
                });
            });
        }),
        requestHandlerYearlySummaryData: hold(() => {
            return ((req, res, next) => {
                (async () => {
                    const result = await self.callExactOne('yearlySummaryData', {
                        tenantId: res.locals.tenantId,
                        time: res.locals.time,
                    });
                    res.status(200).type('application/json').end(JSON.stringify(result, null, 2));
                })().catch((error) => {
                    next(error);
                });
            });
        }),
        requestHandlerMonthlySummaryData: hold(() => {
            return ((req, res, next) => {
                (async () => {
                    const result = await self.callExactOne('monthlySummaryData', {
                        tenantId: res.locals.tenantId,
                        time: res.locals.time,
                    });
                    res.status(200).type('application/json').end(JSON.stringify(result, null, 2));
                })().catch((error) => {
                    next(error);
                });
            });
        }),
        requestHandlerDailySummaryData: hold(() => {
            return ((req, res, next) => {
                (async () => {
                    const result = await self.callExactOne('dailySummaryData', {
                        tenantId: res.locals.tenantId,
                        time: res.locals.time,
                    });
                    res.status(200).type('application/json').end(JSON.stringify(result, null, 2));
                })().catch((error) => {
                    next(error);
                });
            });
        }),
    });

    /** @type {import('.').Ipp5BookshelfReaderRouter.Self} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5BookshelfReaderRouter: (() => {
            return _self;
        }),
        expressRouter: hold(() => {
            const it = ExpressRouter({
                caseSensitive: false,
                mergeParams: false,
                strict: false,
            });
            it.get('/menu/',
                _self.paramHandlerTenantId(),
                _self.paramHandlerTime(),
                _self.requestHandlerMenuData()
            );
            it.get('/yearly-summary/:year/',
                _self.paramHandlerTenantId(),
                _self.paramHandlerTime(),
                _self.requestHandlerYearlySummaryData()
            );
            it.get('/monthly-summary/:year-:month/',
                _self.paramHandlerTenantId(),
                _self.paramHandlerTime(),
                _self.requestHandlerMonthlySummaryData()
            );
            it.get('/daily-summary/:year-:month-:day/',
                _self.paramHandlerTenantId(),
                _self.paramHandlerTime(),
                _self.requestHandlerDailySummaryData()
            );
            return it;
        }),
    });

    return self;

});

/** @type {import('.').Ipp5BookshelfReaderRouter.Companion} */
const companion = ({});

/** @type {import('.').Ipp5BookshelfReaderRouter.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5BookshelfReaderRouter };
