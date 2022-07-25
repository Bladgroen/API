'use strict';

/**
 * user-has-task service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-has-task.user-has-task');
