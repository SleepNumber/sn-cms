/**
 * User data via current_user api call
 * @typedef User
 * @property {boolean}  logged_in
 * @property {number}   cart_quantity
 * @property {boolean}  admin
 * @property {boolean}  impersonating
 * @property {boolean}  browsing_as_guest
 * @property {string}   csrf_param - i.e. 'authenticity_token'
 * @property {string}   csrf_token
 * @property {object}   geolocation
 * @property {string}   geolocation.country - i.e. 'US'
 * @property {string}   geolocation.state - i.e. 'MN'
 * @property {string}   geolocation.city - i.e. 'Saint Paul'
 * @property {string[]} geolocation.localities - i.e. ['Saint Paul']
 * @property {string}   geolocation.zipcode - i.e. '55406'
 * @property {string}   geolocation.longitude - i.e. -93.3047
 * @property {string}   geolocation.latitude - i.e. 44.9702
 * @property {string[]} segments - i.e. ["First Time Visitor"]
 * @property {string[]} price_lists - i.e. ["i don't know?"]
 * @property {boolean}  primary
 */

/**
 * Return true if the user (session data current_user)
 * - is an admin or
 * - is impersonating another user
 * @param {User} user
 * @return {boolean}
 */
export function isAdmin(user) {
  return (
    user.impersonation ||
    user.browsing_as_guest ||
    (user.admin && user.logged_in)
  );
}
