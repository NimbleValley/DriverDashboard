"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgPackSchema = exports.msgPackValueSchema = exports.messageSchema = exports.propertiesMessageSchema = exports.unannounceMessageSchema = exports.announceMessageSchema = exports.unsubscribeMessageSchema = exports.subscribeMessageSchema = exports.setPropertiesMessageSchema = exports.unpublishMessageSchema = exports.publishMessageSchema = exports.propertiesMessageParamsSchema = exports.unannounceMessageParamsSchema = exports.announceMessageParamsSchema = exports.unsubscribeMessageParamsSchema = exports.subscribeMessageParamsSchema = exports.setPropertiesMessageParamsSchema = exports.unpublishMessageParamsSchema = exports.publishMessageParamsSchema = exports.subscriptionOptionsSchema = exports.topicSchema = exports.topicPropertiesSchema = exports.typeNumSchema = exports.typeStringSchema = exports.integerSchema = void 0;
var zod_1 = require("zod");
/** Schema for an integer. */
exports.integerSchema = zod_1.z.number().int();
/** Schema for type strings in the NT protocol. */
exports.typeStringSchema = zod_1.z.union([
    zod_1.z.literal('boolean'),
    zod_1.z.literal('double'),
    zod_1.z.literal('int'),
    zod_1.z.literal('float'),
    zod_1.z.literal('string'),
    zod_1.z.literal('json'),
    zod_1.z.literal('raw'),
    zod_1.z.literal('rpc'),
    zod_1.z.literal('msgpack'),
    zod_1.z.literal('protobuf'),
    zod_1.z.literal('boolean[]'),
    zod_1.z.literal('double[]'),
    zod_1.z.literal('int[]'),
    zod_1.z.literal('float[]'),
    zod_1.z.literal('string[]'),
]);
/** Schema for type numbers in the NT protocol. */
exports.typeNumSchema = zod_1.z.union([
    zod_1.z.literal(0),
    zod_1.z.literal(1),
    zod_1.z.literal(2),
    zod_1.z.literal(3),
    zod_1.z.literal(4),
    zod_1.z.literal(5),
    zod_1.z.literal(16),
    zod_1.z.literal(17),
    zod_1.z.literal(18),
    zod_1.z.literal(19),
    zod_1.z.literal(20),
]);
/** Schema for topic properties in the NT protocol. */
exports.topicPropertiesSchema = zod_1.z
    .object({
    persistent: zod_1.z.boolean(),
    retained: zod_1.z.boolean(),
})
    .partial()
    .strict();
/** Schema for a topic in the NT protocol. */
exports.topicSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    id: zod_1.z.number(),
    type: exports.typeStringSchema,
    properties: exports.topicPropertiesSchema,
})
    .strict();
/** Schema for subscription options in the NT protocol. */
exports.subscriptionOptionsSchema = zod_1.z
    .object({
    periodic: zod_1.z.number(),
    all: zod_1.z.boolean(),
    topicsonly: zod_1.z.boolean(),
    prefix: zod_1.z.boolean(),
})
    .partial()
    .strict();
/** Schema for the publish message in the NT protocol. */
exports.publishMessageParamsSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    pubuid: zod_1.z.number(),
    type: exports.typeStringSchema,
    properties: exports.topicPropertiesSchema,
})
    .strict();
/** Schema for the unpublish message params in the NT protocol. */
exports.unpublishMessageParamsSchema = zod_1.z
    .object({
    pubuid: zod_1.z.number(),
})
    .strict();
/** Schema for the set properties message params in the NT protocol. */
exports.setPropertiesMessageParamsSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    update: exports.topicPropertiesSchema,
})
    .strict();
/** Schema for the subscribe message params in the NT protocol. */
exports.subscribeMessageParamsSchema = zod_1.z
    .object({
    topics: zod_1.z.array(zod_1.z.string()),
    subuid: zod_1.z.number(),
    options: exports.subscriptionOptionsSchema,
})
    .strict();
/** Schema for the unsubscribe message params in the NT protocol. */
exports.unsubscribeMessageParamsSchema = zod_1.z
    .object({
    subuid: zod_1.z.number(),
})
    .strict();
/** Schema for the announce message params in the NT protocol. */
exports.announceMessageParamsSchema = exports.topicSchema
    .extend({
    pubuid: zod_1.z.number().optional(),
})
    .strict();
/** Schema for the unannounce message params in the NT protocol. */
exports.unannounceMessageParamsSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    id: zod_1.z.number(),
})
    .strict();
/** Schema for the properties message params in the NT protocol. */
exports.propertiesMessageParamsSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    ack: zod_1.z.boolean(),
})
    .strict();
/** Schema for a publish message in the NT protocol. */
exports.publishMessageSchema = zod_1.z
    .object({
    method: zod_1.z.literal('publish'),
    params: exports.publishMessageParamsSchema,
})
    .strict();
/** Schema for an unpublish message in the NT protocol. */
exports.unpublishMessageSchema = zod_1.z
    .object({
    method: zod_1.z.literal('unpublish'),
    params: exports.unpublishMessageParamsSchema,
})
    .strict();
/** Schema for a setproperties message in the NT protocol. */
exports.setPropertiesMessageSchema = zod_1.z
    .object({
    method: zod_1.z.literal('setproperties'),
    params: exports.setPropertiesMessageParamsSchema,
})
    .strict();
/** Schema for a subscribe message in the NT protocol. */
exports.subscribeMessageSchema = zod_1.z
    .object({
    method: zod_1.z.literal('subscribe'),
    params: exports.subscribeMessageParamsSchema,
})
    .strict();
/** Schema for an unsubscribe message in the NT protocol. */
exports.unsubscribeMessageSchema = zod_1.z
    .object({
    method: zod_1.z.literal('unsubscribe'),
    params: exports.unsubscribeMessageParamsSchema,
})
    .strict();
/** Schema for an announce message in the NT protocol. */
exports.announceMessageSchema = zod_1.z
    .object({
    method: zod_1.z.literal('announce'),
    params: exports.announceMessageParamsSchema,
})
    .strict();
/** Schema for an unannounce message in the NT protocol. */
exports.unannounceMessageSchema = zod_1.z
    .object({
    method: zod_1.z.literal('unannounce'),
    params: exports.unannounceMessageParamsSchema,
})
    .strict();
/** Schema for a properties message in the NT protocol. */
exports.propertiesMessageSchema = zod_1.z
    .object({
    method: zod_1.z.literal('properties'),
    params: exports.propertiesMessageParamsSchema,
})
    .strict();
/** Schema for a text frame message in the NT protocol. */
exports.messageSchema = zod_1.z.array(zod_1.z.discriminatedUnion('method', [
    exports.publishMessageSchema,
    exports.unpublishMessageSchema,
    exports.setPropertiesMessageSchema,
    exports.subscribeMessageSchema,
    exports.unsubscribeMessageSchema,
    exports.announceMessageSchema,
    exports.unannounceMessageSchema,
    exports.propertiesMessageSchema,
]));
/** Schema for a value in the msgpack format. */
exports.msgPackValueSchema = zod_1.z.union([
    zod_1.z.boolean(),
    zod_1.z.number().finite().int(),
    zod_1.z.number().finite(),
    zod_1.z.string(),
    zod_1.z.instanceof(ArrayBuffer),
    zod_1.z.array(zod_1.z.boolean()),
    zod_1.z.array(zod_1.z.string()),
    zod_1.z.array(zod_1.z.number().finite().int()),
    zod_1.z.array(zod_1.z.number().finite()),
]);
/** Schema for a binary message in the msgpack format. */
exports.msgPackSchema = zod_1.z.tuple([
    zod_1.z.union([zod_1.z.number().int().nonnegative(), zod_1.z.literal(-1)]),
    zod_1.z.number().int().nonnegative(),
    exports.typeNumSchema,
    exports.msgPackValueSchema,
]);
//# sourceMappingURL=schemas.js.map