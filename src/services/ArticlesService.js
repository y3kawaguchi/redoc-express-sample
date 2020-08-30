/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a article
*
* no response value expected for this operation
* */
const createArticles = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List all articles
*
* limit Integer How many items to return at one time (max 100) (optional)
* returns List
* */
const listArticles = ({ limit }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        limit,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Info for a specific article
*
* articleId String The id of the article to retrieve
* returns Article
* */
const showArticleById = ({ articleId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        articleId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createArticles,
  listArticles,
  showArticleById,
};
