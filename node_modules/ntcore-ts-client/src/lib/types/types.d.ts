import type { typeStringSchema, announceMessageSchema, msgPackSchema, msgPackValueSchema, propertiesMessageSchema, publishMessageSchema, setPropertiesMessageSchema, subscribeMessageSchema, subscriptionOptionsSchema, topicPropertiesSchema, unannounceMessageSchema, unpublishMessageSchema, unsubscribeMessageSchema, typeNumSchema } from './schemas';
import type { z } from 'zod';
export type TypeString = z.infer<typeof typeStringSchema>;
export type TypeNum = z.infer<typeof typeNumSchema>;
export type NetworkTablesTypeInfo = [TypeNum, TypeString];
export type PublishMessage = z.infer<typeof publishMessageSchema>;
export type UnpublishMessage = z.infer<typeof unpublishMessageSchema>;
export type SetPropertiesMessage = z.infer<typeof setPropertiesMessageSchema>;
export type SubscribeMessage = z.infer<typeof subscribeMessageSchema>;
export type SubscribeOptions = z.infer<typeof subscriptionOptionsSchema>;
export type UnsubscribeMessage = z.infer<typeof unsubscribeMessageSchema>;
export type AnnounceMessage = z.infer<typeof announceMessageSchema>;
export type UnannounceMessage = z.infer<typeof unannounceMessageSchema>;
export type PropertiesMessage = z.infer<typeof propertiesMessageSchema>;
export type Message = PublishMessage | UnpublishMessage | SetPropertiesMessage | SubscribeMessage | UnsubscribeMessage | AnnounceMessage | UnannounceMessage | PropertiesMessage;
export type PublishMessageParams = PublishMessage['params'];
export type UnpublishMessageParams = UnpublishMessage['params'];
export type SetPropertiesMessageParams = SetPropertiesMessage['params'];
export type SubscribeMessageParams = SubscribeMessage['params'];
export type UnsubscribeMessageParams = UnsubscribeMessage['params'];
export type AnnounceMessageParams = AnnounceMessage['params'];
export type UnannounceMessageParams = UnannounceMessage['params'];
export type PropertiesMessageParams = PropertiesMessage['params'];
export type NetworkTablesTypes = z.infer<typeof msgPackValueSchema>;
export type BinaryMessage = z.infer<typeof msgPackSchema>;
export type TopicProperties = z.infer<typeof topicPropertiesSchema>;
export declare class NetworkTablesTypeInfos {
    static readonly kBoolean: NetworkTablesTypeInfo;
    static readonly kDouble: NetworkTablesTypeInfo;
    static readonly kInteger: NetworkTablesTypeInfo;
    static readonly kString: NetworkTablesTypeInfo;
    static readonly kArrayBuffer: NetworkTablesTypeInfo;
    static readonly kBooleanArray: NetworkTablesTypeInfo;
    static readonly kDoubleArray: NetworkTablesTypeInfo;
    static readonly kIntegerArray: NetworkTablesTypeInfo;
    static readonly kStringArray: NetworkTablesTypeInfo;
}
/**
 * @deprecated Use {@link NetworkTablesTypeInfos} instead.
 */
export declare class NetworkTableTypeInfos {
    static readonly kBoolean: NetworkTablesTypeInfo;
    static readonly kDouble: NetworkTablesTypeInfo;
    static readonly kInteger: NetworkTablesTypeInfo;
    static readonly kString: NetworkTablesTypeInfo;
    static readonly kArrayBuffer: NetworkTablesTypeInfo;
    static readonly kBooleanArray: NetworkTablesTypeInfo;
    static readonly kDoubleArray: NetworkTablesTypeInfo;
    static readonly kIntegerArray: NetworkTablesTypeInfo;
    static readonly kStringArray: NetworkTablesTypeInfo;
}
export interface BinaryMessageData {
    topicId: number;
    serverTime: number;
    typeInfo: NetworkTablesTypeInfos;
    value: NetworkTablesTypes;
}
