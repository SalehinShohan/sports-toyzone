

const ContactUs = () => {
  return (
    <section className="py-8 mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block  font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block  font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your message"></textarea>
            </div>
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
