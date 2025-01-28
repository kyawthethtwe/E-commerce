

export default function ContactForm() {
    return(
        <section className="w-full bg-background p-4 shadow-lg ">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <label htmlFor="name" className="text-sm font-semibold">Name</label>
                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="space-y-4">
                    <label htmlFor="email" className="text-sm font-semibold">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="space-y-4 col-span-2">
                    <label htmlFor="phone" className="text-sm font-semibold">Phone</label>
                    <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="space-y-4 col-span-2">
                    <label htmlFor="subject" className="text-sm font-semibold">Subject</label>
                    <input type="text" id="subject" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="space-y-4 col-span-2">
                    <label htmlFor="message" className="text-sm font-semibold">Message</label>
                    <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" rows={4}></textarea>
                </div>
            </form>
        </section>
    )
}