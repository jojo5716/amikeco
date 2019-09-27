module.exports = {
    mergeObject,
};

function mergeObject(object1, object2) {
    return { ...object1, ...object2 };
}
