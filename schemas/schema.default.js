const Schema = {
    field: {
        type: String,
        default: undefined,
        validate: Function,
        index: Boolean,
        requered: Boolean
    }
};

module.exports = Schema;