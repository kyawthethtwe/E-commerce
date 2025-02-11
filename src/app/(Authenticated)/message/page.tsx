import MessageList from "@/components/ui/message/message-list";

export default function MessagesPage() {
    return (
        <div className="space-y-8">
        <h1 className="text-2xl font-semibold">Messages</h1>
        <MessageList />
        </div>
    )
    }