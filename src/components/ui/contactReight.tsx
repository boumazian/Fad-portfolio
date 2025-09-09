// components/contact/ContactForm.tsx

export default function ContactReight() {
  return (
    <form className="space-y-4">
      <h3 className="text-xl font-bold text-gray-800">Send Us Message</h3>
     
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">Your Name</label>
          <div className="mt-2.5">
            <input
              id="name"
              type="text"
              placeholder="karmin locia"
              name="name"
              autoComplete="name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Your Email</label>
          <div className="mt-2.5">
            <input
              id="email"
              type="text"
              placeholder="karminlocia@gmail.com"
              name="email"
              autoComplete="family-name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm/6 font-semibold text-gray-900">Subject</label>
        <div className="mt-2.5">
          <input
            id="subject"
            type="text"
            placeholder="project Inquiry"
            name="subject"
            autoComplete="subject"
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          />
        </div>
      </div>
      
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea
            id="message"
            placeholder="Tell me about your project ..."
            name="message"
            className="block w-full rounded-md bg-white px-3.5 py-4 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          ></textarea>
        </div>
      </div>
    
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let&apos;s talk
        </button>
      </div>
    </form>
  );
}
