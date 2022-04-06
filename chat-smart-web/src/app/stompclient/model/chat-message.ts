export enum MessageType {
    CHAT,
    CONNECT,
    DISCONNECT
}

export enum DestinationType {
    USER,
    ROOM
}
export class ChatMessage {
    messageType: MessageType;
    content: string;
    sender: string;
    time: string;
    destinationId: string;
    destinationType: DestinationType;

    constructor(messageType: MessageType,
        content: string,
        sender: string,
        time: string,
        destinationId: string,
        destinationType: DestinationType) {
            this.messageType = messageType;
            this.content = content;
            this.sender = sender;
            this.time = time;
            this.destinationId = destinationId;
            this.destinationType = destinationType;
        }
}