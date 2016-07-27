import moment from "moment";

/**
 * @param {object} date: date to convert
 * @param {boolean} short: remove suffixes
 * @param {boolean} onlyDays: remove suffixes
 * @returns {string}: human readable time string
 */
export function timeSince(date, short = false, onlyDays = false) {
    if (moment().date() === moment(date).date() &&
        moment().month() === moment(date).month() &&
        moment().year() === moment(date).year()) {
        return onlyDays ? "i dag" : moment(date).fromNow(short);
    }
    return moment(date).calendar();
}

/**
 * @param {object} dateTime: date to convert
 * @returns {string}: ISO timestring
 */
export function isoString(dateTime) {
    return moment(dateTime).toISOString();
}
