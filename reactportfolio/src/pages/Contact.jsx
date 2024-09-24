import { React, useRef } from "react";
import formDatas from "../fileupload/formdetails";

const contact = () => {
  const nameref = useRef(null);
  const emailref = useRef(null);
  const subjectref = useRef(null);
  const messegeref = useRef(null);

  const handleform = (e) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const subject = subjectref.current.value;
    const messege = messegeref.current.value;
    console.log(name, email, subject, messege);
    formDatas(name, email, subject, messege);
  };

  return (
    <div className="h-screen flex justify-center items-center w-[100%]">
      <div className="h-[85%] w-[80%] flex justify-center items-center">
        <div className="h-[95%] w-[50%] quack1 rounded-lg flex flex-col justify-start items-center">
          <form
            onSubmit={handleform}
            className="w-[80%] text-white bg-transparent h-full flex justify-center text-base items-center flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              ref={nameref}
              required
              autoComplete="hello"
              className="h-[14%] rounded-md w-full bg-transparent active:border-black/20 active:border-2 border-black/20 border-2"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your e-mail"
              ref={emailref}
              autoComplete="hello"
              required
              className="h-[14%] rounded-md w-full bg-transparent border-black/20 border-2"
            />
            <input
              type="text"
              name="sub"
              id="sub"
              placeholder="Enter subject"
              autoComplete="hello"
              ref={subjectref}
              className="h-[14%] rounded-md w-full bg-transparent border-black/20 border-2"
            />
            <textarea
              placeholder="Enter your messege"
              id="messege"
              autoComplete="hello"
              rows={6}
              required
              ref={messegeref}
              className="rounded-md w-full bg-transparent border-black/20 border-2"
            />
            <button
              type="submit"
              onClick={handleform}
              className="w-full h-[10%] border-black/20 bg-blue-400 active:bg-transparent active:scale-75 rounded-md border-2"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
