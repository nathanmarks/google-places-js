import places from './places';

const Places = {
  /**
   * Your config should look like this
   *
   * @type {Object}
   *
   * let config = {
   *   key: API_KEY
   * };
   */
  create (config = {}) {

    // Check that the config was passed before creating the object
    if (Object.is(undefined, config.key)) {
      throw new Error('API key missing from config.');
    }

    return places(config);
  }
};

export default Places;
