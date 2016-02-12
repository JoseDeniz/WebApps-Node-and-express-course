var goodReadServices = () => {

    var getBookById = (id, callback) => {

        callback(null, {description: 'Our Description'});
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodReadServices;