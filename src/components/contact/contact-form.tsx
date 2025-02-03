import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export default function ContactForm() {
    return (
        <Card className="w-full max-w-2xl mx-auto bg-white">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2 col-span-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input type="tel" id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2 col-span-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input type="text" id="subject" placeholder="Enter subject" />
                    </div>
                    <div className="space-y-2 col-span-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                            id="message" 
                            placeholder="Type your message here" 
                            className="min-h-[120px]"
                        />
                    </div>
                    <div className="text-center mx-auto col-span-2">
                        <Button type="submit" className="w-full">Send Message</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}