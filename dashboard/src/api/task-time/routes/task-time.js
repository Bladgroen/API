'use strict';

/**
 * task-time router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::task-time.task-time');
