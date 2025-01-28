
const Contact = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Contact Me</h1>
      <form className="flex flex-col max-w-md mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 border border-gray-300 rounded"
          rows="4"
        ></textarea>
        <button className="p-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
