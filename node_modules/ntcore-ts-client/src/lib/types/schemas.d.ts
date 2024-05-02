import { z } from 'zod';
/** Schema for an integer. */
export declare const integerSchema: z.ZodNumber;
/** Schema for type strings in the NT protocol. */
export declare const typeStringSchema: z.ZodUnion<[z.ZodLiteral<"boolean">, z.ZodLiteral<"double">, z.ZodLiteral<"int">, z.ZodLiteral<"float">, z.ZodLiteral<"string">, z.ZodLiteral<"json">, z.ZodLiteral<"raw">, z.ZodLiteral<"rpc">, z.ZodLiteral<"msgpack">, z.ZodLiteral<"protobuf">, z.ZodLiteral<"boolean[]">, z.ZodLiteral<"double[]">, z.ZodLiteral<"int[]">, z.ZodLiteral<"float[]">, z.ZodLiteral<"string[]">]>;
/** Schema for type numbers in the NT protocol. */
export declare const typeNumSchema: z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<16>, z.ZodLiteral<17>, z.ZodLiteral<18>, z.ZodLiteral<19>, z.ZodLiteral<20>]>;
/** Schema for topic properties in the NT protocol. */
export declare const topicPropertiesSchema: z.ZodObject<{
    persistent: z.ZodOptional<z.ZodBoolean>;
    retained: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    persistent?: boolean | undefined;
    retained?: boolean | undefined;
}, {
    persistent?: boolean | undefined;
    retained?: boolean | undefined;
}>;
/** Schema for a topic in the NT protocol. */
export declare const topicSchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodNumber;
    type: z.ZodUnion<[z.ZodLiteral<"boolean">, z.ZodLiteral<"double">, z.ZodLiteral<"int">, z.ZodLiteral<"float">, z.ZodLiteral<"string">, z.ZodLiteral<"json">, z.ZodLiteral<"raw">, z.ZodLiteral<"rpc">, z.ZodLiteral<"msgpack">, z.ZodLiteral<"protobuf">, z.ZodLiteral<"boolean[]">, z.ZodLiteral<"double[]">, z.ZodLiteral<"int[]">, z.ZodLiteral<"float[]">, z.ZodLiteral<"string[]">]>;
    properties: z.ZodObject<{
        persistent: z.ZodOptional<z.ZodBoolean>;
        retained: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    }, {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
    name: string;
    id: number;
    properties: {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    };
}, {
    type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
    name: string;
    id: number;
    properties: {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    };
}>;
/** Schema for subscription options in the NT protocol. */
export declare const subscriptionOptionsSchema: z.ZodObject<{
    periodic: z.ZodOptional<z.ZodNumber>;
    all: z.ZodOptional<z.ZodBoolean>;
    topicsonly: z.ZodOptional<z.ZodBoolean>;
    prefix: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    periodic?: number | undefined;
    all?: boolean | undefined;
    topicsonly?: boolean | undefined;
    prefix?: boolean | undefined;
}, {
    periodic?: number | undefined;
    all?: boolean | undefined;
    topicsonly?: boolean | undefined;
    prefix?: boolean | undefined;
}>;
/** Schema for the publish message in the NT protocol. */
export declare const publishMessageParamsSchema: z.ZodObject<{
    name: z.ZodString;
    pubuid: z.ZodNumber;
    type: z.ZodUnion<[z.ZodLiteral<"boolean">, z.ZodLiteral<"double">, z.ZodLiteral<"int">, z.ZodLiteral<"float">, z.ZodLiteral<"string">, z.ZodLiteral<"json">, z.ZodLiteral<"raw">, z.ZodLiteral<"rpc">, z.ZodLiteral<"msgpack">, z.ZodLiteral<"protobuf">, z.ZodLiteral<"boolean[]">, z.ZodLiteral<"double[]">, z.ZodLiteral<"int[]">, z.ZodLiteral<"float[]">, z.ZodLiteral<"string[]">]>;
    properties: z.ZodObject<{
        persistent: z.ZodOptional<z.ZodBoolean>;
        retained: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    }, {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
    name: string;
    properties: {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    };
    pubuid: number;
}, {
    type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
    name: string;
    properties: {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    };
    pubuid: number;
}>;
/** Schema for the unpublish message params in the NT protocol. */
export declare const unpublishMessageParamsSchema: z.ZodObject<{
    pubuid: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    pubuid: number;
}, {
    pubuid: number;
}>;
/** Schema for the set properties message params in the NT protocol. */
export declare const setPropertiesMessageParamsSchema: z.ZodObject<{
    name: z.ZodString;
    update: z.ZodObject<{
        persistent: z.ZodOptional<z.ZodBoolean>;
        retained: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    }, {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    name: string;
    update: {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    };
}, {
    name: string;
    update: {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    };
}>;
/** Schema for the subscribe message params in the NT protocol. */
export declare const subscribeMessageParamsSchema: z.ZodObject<{
    topics: z.ZodArray<z.ZodString, "many">;
    subuid: z.ZodNumber;
    options: z.ZodObject<{
        periodic: z.ZodOptional<z.ZodNumber>;
        all: z.ZodOptional<z.ZodBoolean>;
        topicsonly: z.ZodOptional<z.ZodBoolean>;
        prefix: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        periodic?: number | undefined;
        all?: boolean | undefined;
        topicsonly?: boolean | undefined;
        prefix?: boolean | undefined;
    }, {
        periodic?: number | undefined;
        all?: boolean | undefined;
        topicsonly?: boolean | undefined;
        prefix?: boolean | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    options: {
        periodic?: number | undefined;
        all?: boolean | undefined;
        topicsonly?: boolean | undefined;
        prefix?: boolean | undefined;
    };
    topics: string[];
    subuid: number;
}, {
    options: {
        periodic?: number | undefined;
        all?: boolean | undefined;
        topicsonly?: boolean | undefined;
        prefix?: boolean | undefined;
    };
    topics: string[];
    subuid: number;
}>;
/** Schema for the unsubscribe message params in the NT protocol. */
export declare const unsubscribeMessageParamsSchema: z.ZodObject<{
    subuid: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    subuid: number;
}, {
    subuid: number;
}>;
/** Schema for the announce message params in the NT protocol. */
export declare const announceMessageParamsSchema: z.ZodObject<{
    type: z.ZodUnion<[z.ZodLiteral<"boolean">, z.ZodLiteral<"double">, z.ZodLiteral<"int">, z.ZodLiteral<"float">, z.ZodLiteral<"string">, z.ZodLiteral<"json">, z.ZodLiteral<"raw">, z.ZodLiteral<"rpc">, z.ZodLiteral<"msgpack">, z.ZodLiteral<"protobuf">, z.ZodLiteral<"boolean[]">, z.ZodLiteral<"double[]">, z.ZodLiteral<"int[]">, z.ZodLiteral<"float[]">, z.ZodLiteral<"string[]">]>;
    name: z.ZodString;
    id: z.ZodNumber;
    properties: z.ZodObject<{
        persistent: z.ZodOptional<z.ZodBoolean>;
        retained: z.ZodOptional<z.ZodBoolean>;
    }, "strict", z.ZodTypeAny, {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    }, {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    }>;
    pubuid: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
    name: string;
    id: number;
    properties: {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    };
    pubuid?: number | undefined;
}, {
    type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
    name: string;
    id: number;
    properties: {
        persistent?: boolean | undefined;
        retained?: boolean | undefined;
    };
    pubuid?: number | undefined;
}>;
/** Schema for the unannounce message params in the NT protocol. */
export declare const unannounceMessageParamsSchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    name: string;
    id: number;
}, {
    name: string;
    id: number;
}>;
/** Schema for the properties message params in the NT protocol. */
export declare const propertiesMessageParamsSchema: z.ZodObject<{
    name: z.ZodString;
    ack: z.ZodBoolean;
}, "strict", z.ZodTypeAny, {
    name: string;
    ack: boolean;
}, {
    name: string;
    ack: boolean;
}>;
/** Schema for a publish message in the NT protocol. */
export declare const publishMessageSchema: z.ZodObject<{
    method: z.ZodLiteral<"publish">;
    params: z.ZodObject<{
        name: z.ZodString;
        pubuid: z.ZodNumber;
        type: z.ZodUnion<[z.ZodLiteral<"boolean">, z.ZodLiteral<"double">, z.ZodLiteral<"int">, z.ZodLiteral<"float">, z.ZodLiteral<"string">, z.ZodLiteral<"json">, z.ZodLiteral<"raw">, z.ZodLiteral<"rpc">, z.ZodLiteral<"msgpack">, z.ZodLiteral<"protobuf">, z.ZodLiteral<"boolean[]">, z.ZodLiteral<"double[]">, z.ZodLiteral<"int[]">, z.ZodLiteral<"float[]">, z.ZodLiteral<"string[]">]>;
        properties: z.ZodObject<{
            persistent: z.ZodOptional<z.ZodBoolean>;
            retained: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid: number;
    }, {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid: number;
    };
    method: "publish";
}, {
    params: {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid: number;
    };
    method: "publish";
}>;
/** Schema for an unpublish message in the NT protocol. */
export declare const unpublishMessageSchema: z.ZodObject<{
    method: z.ZodLiteral<"unpublish">;
    params: z.ZodObject<{
        pubuid: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        pubuid: number;
    }, {
        pubuid: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        pubuid: number;
    };
    method: "unpublish";
}, {
    params: {
        pubuid: number;
    };
    method: "unpublish";
}>;
/** Schema for a setproperties message in the NT protocol. */
export declare const setPropertiesMessageSchema: z.ZodObject<{
    method: z.ZodLiteral<"setproperties">;
    params: z.ZodObject<{
        name: z.ZodString;
        update: z.ZodObject<{
            persistent: z.ZodOptional<z.ZodBoolean>;
            retained: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        update: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
    }, {
        name: string;
        update: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        name: string;
        update: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
    };
    method: "setproperties";
}, {
    params: {
        name: string;
        update: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
    };
    method: "setproperties";
}>;
/** Schema for a subscribe message in the NT protocol. */
export declare const subscribeMessageSchema: z.ZodObject<{
    method: z.ZodLiteral<"subscribe">;
    params: z.ZodObject<{
        topics: z.ZodArray<z.ZodString, "many">;
        subuid: z.ZodNumber;
        options: z.ZodObject<{
            periodic: z.ZodOptional<z.ZodNumber>;
            all: z.ZodOptional<z.ZodBoolean>;
            topicsonly: z.ZodOptional<z.ZodBoolean>;
            prefix: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        }, {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        options: {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        };
        topics: string[];
        subuid: number;
    }, {
        options: {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        };
        topics: string[];
        subuid: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        options: {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        };
        topics: string[];
        subuid: number;
    };
    method: "subscribe";
}, {
    params: {
        options: {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        };
        topics: string[];
        subuid: number;
    };
    method: "subscribe";
}>;
/** Schema for an unsubscribe message in the NT protocol. */
export declare const unsubscribeMessageSchema: z.ZodObject<{
    method: z.ZodLiteral<"unsubscribe">;
    params: z.ZodObject<{
        subuid: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        subuid: number;
    }, {
        subuid: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        subuid: number;
    };
    method: "unsubscribe";
}, {
    params: {
        subuid: number;
    };
    method: "unsubscribe";
}>;
/** Schema for an announce message in the NT protocol. */
export declare const announceMessageSchema: z.ZodObject<{
    method: z.ZodLiteral<"announce">;
    params: z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"boolean">, z.ZodLiteral<"double">, z.ZodLiteral<"int">, z.ZodLiteral<"float">, z.ZodLiteral<"string">, z.ZodLiteral<"json">, z.ZodLiteral<"raw">, z.ZodLiteral<"rpc">, z.ZodLiteral<"msgpack">, z.ZodLiteral<"protobuf">, z.ZodLiteral<"boolean[]">, z.ZodLiteral<"double[]">, z.ZodLiteral<"int[]">, z.ZodLiteral<"float[]">, z.ZodLiteral<"string[]">]>;
        name: z.ZodString;
        id: z.ZodNumber;
        properties: z.ZodObject<{
            persistent: z.ZodOptional<z.ZodBoolean>;
            retained: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }>;
        pubuid: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        id: number;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid?: number | undefined;
    }, {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        id: number;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid?: number | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        id: number;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid?: number | undefined;
    };
    method: "announce";
}, {
    params: {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        id: number;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid?: number | undefined;
    };
    method: "announce";
}>;
/** Schema for an unannounce message in the NT protocol. */
export declare const unannounceMessageSchema: z.ZodObject<{
    method: z.ZodLiteral<"unannounce">;
    params: z.ZodObject<{
        name: z.ZodString;
        id: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        name: string;
        id: number;
    }, {
        name: string;
        id: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        name: string;
        id: number;
    };
    method: "unannounce";
}, {
    params: {
        name: string;
        id: number;
    };
    method: "unannounce";
}>;
/** Schema for a properties message in the NT protocol. */
export declare const propertiesMessageSchema: z.ZodObject<{
    method: z.ZodLiteral<"properties">;
    params: z.ZodObject<{
        name: z.ZodString;
        ack: z.ZodBoolean;
    }, "strict", z.ZodTypeAny, {
        name: string;
        ack: boolean;
    }, {
        name: string;
        ack: boolean;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        name: string;
        ack: boolean;
    };
    method: "properties";
}, {
    params: {
        name: string;
        ack: boolean;
    };
    method: "properties";
}>;
/** Schema for a text frame message in the NT protocol. */
export declare const messageSchema: z.ZodArray<z.ZodDiscriminatedUnion<"method", [z.ZodObject<{
    method: z.ZodLiteral<"publish">;
    params: z.ZodObject<{
        name: z.ZodString;
        pubuid: z.ZodNumber;
        type: z.ZodUnion<[z.ZodLiteral<"boolean">, z.ZodLiteral<"double">, z.ZodLiteral<"int">, z.ZodLiteral<"float">, z.ZodLiteral<"string">, z.ZodLiteral<"json">, z.ZodLiteral<"raw">, z.ZodLiteral<"rpc">, z.ZodLiteral<"msgpack">, z.ZodLiteral<"protobuf">, z.ZodLiteral<"boolean[]">, z.ZodLiteral<"double[]">, z.ZodLiteral<"int[]">, z.ZodLiteral<"float[]">, z.ZodLiteral<"string[]">]>;
        properties: z.ZodObject<{
            persistent: z.ZodOptional<z.ZodBoolean>;
            retained: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid: number;
    }, {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid: number;
    };
    method: "publish";
}, {
    params: {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid: number;
    };
    method: "publish";
}>, z.ZodObject<{
    method: z.ZodLiteral<"unpublish">;
    params: z.ZodObject<{
        pubuid: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        pubuid: number;
    }, {
        pubuid: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        pubuid: number;
    };
    method: "unpublish";
}, {
    params: {
        pubuid: number;
    };
    method: "unpublish";
}>, z.ZodObject<{
    method: z.ZodLiteral<"setproperties">;
    params: z.ZodObject<{
        name: z.ZodString;
        update: z.ZodObject<{
            persistent: z.ZodOptional<z.ZodBoolean>;
            retained: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        name: string;
        update: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
    }, {
        name: string;
        update: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        name: string;
        update: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
    };
    method: "setproperties";
}, {
    params: {
        name: string;
        update: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
    };
    method: "setproperties";
}>, z.ZodObject<{
    method: z.ZodLiteral<"subscribe">;
    params: z.ZodObject<{
        topics: z.ZodArray<z.ZodString, "many">;
        subuid: z.ZodNumber;
        options: z.ZodObject<{
            periodic: z.ZodOptional<z.ZodNumber>;
            all: z.ZodOptional<z.ZodBoolean>;
            topicsonly: z.ZodOptional<z.ZodBoolean>;
            prefix: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        }, {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        options: {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        };
        topics: string[];
        subuid: number;
    }, {
        options: {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        };
        topics: string[];
        subuid: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        options: {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        };
        topics: string[];
        subuid: number;
    };
    method: "subscribe";
}, {
    params: {
        options: {
            periodic?: number | undefined;
            all?: boolean | undefined;
            topicsonly?: boolean | undefined;
            prefix?: boolean | undefined;
        };
        topics: string[];
        subuid: number;
    };
    method: "subscribe";
}>, z.ZodObject<{
    method: z.ZodLiteral<"unsubscribe">;
    params: z.ZodObject<{
        subuid: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        subuid: number;
    }, {
        subuid: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        subuid: number;
    };
    method: "unsubscribe";
}, {
    params: {
        subuid: number;
    };
    method: "unsubscribe";
}>, z.ZodObject<{
    method: z.ZodLiteral<"announce">;
    params: z.ZodObject<{
        type: z.ZodUnion<[z.ZodLiteral<"boolean">, z.ZodLiteral<"double">, z.ZodLiteral<"int">, z.ZodLiteral<"float">, z.ZodLiteral<"string">, z.ZodLiteral<"json">, z.ZodLiteral<"raw">, z.ZodLiteral<"rpc">, z.ZodLiteral<"msgpack">, z.ZodLiteral<"protobuf">, z.ZodLiteral<"boolean[]">, z.ZodLiteral<"double[]">, z.ZodLiteral<"int[]">, z.ZodLiteral<"float[]">, z.ZodLiteral<"string[]">]>;
        name: z.ZodString;
        id: z.ZodNumber;
        properties: z.ZodObject<{
            persistent: z.ZodOptional<z.ZodBoolean>;
            retained: z.ZodOptional<z.ZodBoolean>;
        }, "strict", z.ZodTypeAny, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }, {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        }>;
        pubuid: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        id: number;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid?: number | undefined;
    }, {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        id: number;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid?: number | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        id: number;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid?: number | undefined;
    };
    method: "announce";
}, {
    params: {
        type: "string" | "boolean" | "float" | "double" | "int" | "json" | "raw" | "rpc" | "msgpack" | "protobuf" | "boolean[]" | "double[]" | "int[]" | "float[]" | "string[]";
        name: string;
        id: number;
        properties: {
            persistent?: boolean | undefined;
            retained?: boolean | undefined;
        };
        pubuid?: number | undefined;
    };
    method: "announce";
}>, z.ZodObject<{
    method: z.ZodLiteral<"unannounce">;
    params: z.ZodObject<{
        name: z.ZodString;
        id: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        name: string;
        id: number;
    }, {
        name: string;
        id: number;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        name: string;
        id: number;
    };
    method: "unannounce";
}, {
    params: {
        name: string;
        id: number;
    };
    method: "unannounce";
}>, z.ZodObject<{
    method: z.ZodLiteral<"properties">;
    params: z.ZodObject<{
        name: z.ZodString;
        ack: z.ZodBoolean;
    }, "strict", z.ZodTypeAny, {
        name: string;
        ack: boolean;
    }, {
        name: string;
        ack: boolean;
    }>;
}, "strict", z.ZodTypeAny, {
    params: {
        name: string;
        ack: boolean;
    };
    method: "properties";
}, {
    params: {
        name: string;
        ack: boolean;
    };
    method: "properties";
}>]>, "many">;
/** Schema for a value in the msgpack format. */
export declare const msgPackValueSchema: z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodArray<z.ZodBoolean, "many">, z.ZodArray<z.ZodString, "many">, z.ZodArray<z.ZodNumber, "many">, z.ZodArray<z.ZodNumber, "many">]>;
/** Schema for a binary message in the msgpack format. */
export declare const msgPackSchema: z.ZodTuple<[z.ZodUnion<[z.ZodNumber, z.ZodLiteral<-1>]>, z.ZodNumber, z.ZodUnion<[z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<16>, z.ZodLiteral<17>, z.ZodLiteral<18>, z.ZodLiteral<19>, z.ZodLiteral<20>]>, z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodType<ArrayBuffer, z.ZodTypeDef, ArrayBuffer>, z.ZodArray<z.ZodBoolean, "many">, z.ZodArray<z.ZodString, "many">, z.ZodArray<z.ZodNumber, "many">, z.ZodArray<z.ZodNumber, "many">]>], null>;
