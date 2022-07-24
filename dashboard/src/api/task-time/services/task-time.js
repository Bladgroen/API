'use strict';

/**
 * task-time service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-time.task-time');
