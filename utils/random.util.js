import _ from 'lodash';
export default class Random{
  static randomId(lower, upper) {
    return _.random(lower, upper);
  }

}
