export enum MessageType {
    CHAT,
    CONNECT,
    DISCONNECT
}
export class ChatMessage {
    messageType: MessageType;
    content: string;
    sender: string;
    time: string;

    constructor(messageType: MessageType,
        content: string,
        sender: string,
        time: string) {
            this.messageType = messageType;
            this.content = content;
            this.sender = sender;
            this.time = time;
        }
}