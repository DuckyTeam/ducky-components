import moment from "moment";
const supportedLocales = ["nb"];

function getLocale() {
    return supportedLocales[0];
}

/* eslint-disable id-length */
moment.locale(getLocale(), {
    calendar: {
        lastDay: "igår",
        sameDay: "[i dag kl] LT",
        nextDay: "D.MMM",
        lastWeek: "D.MMM",
        nextWeek: "D.MMM",
        sameElse: "D.MMM"
    },
    relativeTime: {
        furture: "in %s",
        past: "%s",
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
 * @param {object} firstDate: date to compare
 * @param {object} secondDate: date to compare to
 * @param {string} period: period to compare
 * @returns {bool}: dates are within period
 */
export function isSame(firstDate, secondDate, period) {
    if (period) {
        return moment(firstDate)[period]() === moment(secondDate)[period]();
    }
    return moment(firstDate).isSame(moment(secondDate));
}

/**
 * @param {object} date: date to convert
 * @param {bool} short: remove suffixes
 * @returns {string}: human readable time string
 */
export function timeSince(date, short = false) {
    if (isSame(date, moment(), "date")) {
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
