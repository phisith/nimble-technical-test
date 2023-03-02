import moment from "moment";

export const getTodayFull = () => {
    return moment().format('YYYYMMDDhmmss')
}