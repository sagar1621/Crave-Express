const Contact=()=>{
    return  <section id="contact">
    <h2 className="font-bold text-xl text-center mt-5">Contact Us</h2>
    <div className="m-5 mb-8 flex flex-col shadow p-4 space-y-7 max-w-full rounded-md">
      <div>
        <h2 className="text-black text-3xl py-1 dark:text-white">Get in Touch</h2>
      </div>
      <form
        action="https://formspree.io/f/xdovzypj"
        method="POST"
        className="flex flex-col space-y-5"
      >
      <label htmlFor="name"><input type="text" id="name" placeholder="Enter your Name*" className="border-gray-300 rounded-md w-full md:w-fit" /></label>
      <label htmlFor="email"><input type="email" id="email" placeholder="Enter your Email*" className="border-gray-300 rounded-md  w-full md:w-fit" /></label>
      <textarea
        name="Message"
        cols="30"
        rows="10"
        required
        autoComplete="off"
        placeholder="Enter you Message*" className="border-gray-300 rounded-md"></textarea>              
      <input type="submit" value="Send" className="bg-pink-100 px-4 py-2 text-black rounded-md"/>
      </form>
    </div>
  </section>;
}

export default Contact;