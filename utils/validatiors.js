exports.validateEmail = (email) => {
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return re.test(email);
};

