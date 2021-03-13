'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async findAnd(ctx){
        console.log("find and ctx.query",ctx.query)
    }
};
