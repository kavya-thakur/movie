// import React from "react";

// const Contact = () => {
//   const handleFormSubmit = (formData) => {
//     // console.log(formData.entries());
//     const forminput = Object.fromEntries(formData.entries());
//     console.log(forminput);
//   };
//   return (
//     <div className="flex flex-col  mt-10 w-[70%] items-center text-center mx-auto ">
//       <h2 className="text-2xl font-semibold mb-10 ">Contact Us</h2>
//       <form
//         className="flex flex-col w-full items-center"
//         action={handleFormSubmit}
//       >
//         <input
//           className="w-[50%] bg-zinc-700 placeholder:text-zinc-800 text-zinc-200  outline-0 mb-5 rounded px-5 py-2 "
//           required
//           type="text"
//           placeholder="Enter Your Name"
//           autoComplete="false"
//           name="username"
//         />
//         <input
//           className="w-[50%] bg-zinc-700 placeholder:text-zinc-800 text-zinc-200  outline-0 mb-5 rounded px-5 py-2"
//           required
//           type="email"
//           placeholder="Enter Your Email"
//           autoComplete="false"
//           name="email"
//         />
//         <textarea
//         required
//           className="w-[50%] bg-zinc-700 placeholder:text-zinc-800  text-zinc9200  outline-0  mb-5 rounded px-5 p2-1"
//           autoComplete="false"
//           name="message"
//           placeholder="Enter your Message"
//           rows={10}
//           id=""
//         ></textarea>
//         <button
//           className="capitalize mx-auto bg-purple-600 font-semibold px-5 py-1 rounded-lg hover:rounded-xl  flex items-center gap-2 justify-center hover:px-6 hover:text-zinc-200 hover:ease-linear hover:duration-150"
//           type="submit"
//           value="send"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
import React from "react";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInput = Object.fromEntries(formData.entries());
    console.log(formInput);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-5 py-5">
      <div className="w-full max-w-lg bg-zinc-800 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
          <input
            className="w-full bg-zinc-700 placeholder:text-sm placeholder:text-zinc-400 text-zinc-200 outline-none rounded-lg px-4 py-2"
            required
            type="text"
            placeholder="Enter Your Name"
            name="username"
          />
          <input
            className="w-full bg-zinc-700 placeholder:text-sm placeholder:text-zinc-400 text-zinc-200 outline-none rounded-lg px-4 py-2"
            required
            type="email"
            placeholder="Enter Your Email"
            name="email"
          />
          <textarea
            className="w-full bg-zinc-700 placeholder:text-sm placeholder:text-zinc-400 text-zinc-200 outline-none rounded-lg px-4 py-2 resize-none"
            required
            name="message"
            placeholder="Enter your Message"
            rows={6}
          ></textarea>
          <button
            className="w-full bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-200"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
