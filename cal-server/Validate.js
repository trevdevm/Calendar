function isIsoDate(str) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) {
        return false;
    }

    var d = new Date(str);
    return d.toISOString() === str;
}

const validate = (param) => {
    let valid = isIsoDate(param);

    if (valid) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = validate;