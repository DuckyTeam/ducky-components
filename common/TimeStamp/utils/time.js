import moment from "moment";
const supportedLocales = ["nb"];
const DAYS_IN_PAST_WEEK = 6;
const DAYS_IN_PAST_MONTH = 30;
const DAYS_IN_PAST_YEAR = 365;

function getLocale() {
    return supportedLocales[0];
}

moment.locale(getLocale(), {
    calendar: {
        lastDay: "igår",
        nextDay: "D.MMM",
        lastWeek: "D.MMM",
        nextWeek: "D.MMM",
        sameElse: "D.MMM"
    },
    relativeTime: {
        s: "Nå",
        m: "%d m",
        mm: "%d m",
        h: "%d t",
        hh: "%d t"
    }
});

const periods = {
    "Siste 7 dager": moment().subtract(DAYS_IN_PAST_WEEK, "days").startOf("day"),
    "Siste 30 dager": moment().subtract(DAYS_IN_PAST_MONTH, "days").startOf("day"),
    "Siste året": moment().subtract(DAYS_IN_PAST_YEAR, "days").startOf("day"),
    Totalt: moment(0)
};

const periodsList = ["Siste 7 dager", "Siste 30 dager", "Siste året"];

export function indexToString(index) {
    return periodsList[index];
}


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
    if (isSame(date, moment(), "day")) {
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

/**
 * @param {object} date: date to convert
 * @param {string} formatString: moment format string
 * @returns {string}: formatted string
 */
export function format(date, formatString) {
    if (date) {
        return moment(date).format(formatString);
    }
    return null;
}

export function isValid(date) {
    return moment(date).isValid();
}

export function getWholeDay() {
    return moment().add(1, "day").startOf("day");
}

/**
 * @param {object} date: date to check
 * @returns {bool}: is date in the future
 */
export function inFuture(date) {
    return moment().isBefore(moment(date));
}
export function inPast(date) {
    return moment().isAfter(moment(date));
}

export function getPeriodStart(periodString) {
    return periods[periodString];
}
