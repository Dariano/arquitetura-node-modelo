var Schema = {};
const SchemaSkeleton = function (Skeleton) {
    const createSchemaField = function (SkeletonAtom) {
            Schema[SkeletonAtom.field] = SkeletonAtom.props;
    };

    Skeleton.forEach(createSchemaField);

    return Schema;
};

module.exports = SchemaSkeleton;