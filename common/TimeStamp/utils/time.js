import moment from "moment";
const supportedLocales = ["nb"];

function getLocale() {
    return supportedLocales[0];
}

/* eslint-disable id-length */
moment.locale(getLocale(), {
    calendar: {
        lastDay: "igår",
        nextDay: "D.MMM",
        lastWeek: "D.MMM",
        nextWeek: "D.MMM",
        sameElse: "D.MMM"
    },
    relativeTime: {
        future: "in %s",
        past:   "%s",
        d: "1 dag",
        dd: "%d dager",
        M: "1 måned",
        MM: "%d måneder",
        y: "1 år",
        yy: "%d år",
        s: "Nå",
        m: "%d m",
        mm: "%d m",
        h: "%d t",
        hh: "%d t"
    }
});

/**
 * @param {object} date: date to convert
 * @param {bool} short: remove suffixes
 * @returns {string}: human readable time string
 */
export function timeSince(date, short = false) {
    if (moment().date() === moment(date).date() &&
        moment().month() === moment(date).month() &&
        moment().year() === moment(date).year()) {
        return moment(date).fromNow(short);
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
