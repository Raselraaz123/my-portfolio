import React from 'react';

const ContactMe = () => {

  return (
    <div className="flex justify-center items-center  min-h-screen">
      <div class="card w-1/2  shadow-2xl">
        <form
      
          action="https://formsubmit.co/raselraaz91@gmail.com"
          method="POST"
          target='_blank'
          className="p-10"
        >
          <fieldset>
            <legend>Contact Me</legend>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-white">Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs text-black"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-white">Email</span>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs text-black"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-white">Country</span>
              </label>
              <select required name="country" className="text-black">
                <option> Afghanistan</option>
                <option> Albania</option>
                <option>Bangladesh</option>
                <option> Belgium</option>
                <option> Benin</option>
                <option> Botswana</option>
                <option> Burundi</option>
                <option> Cambodia</option>
                <option> Canada</option>
                <option> Chile</option>
                <option> China</option>
                <option>Denmark</option>
                <option> Dominican Republic</option>
                <option> Equatorial Guinea</option>
                <option> Eritrea</option>
                <option> Finland</option>
                <option> Germany</option>
                <option>Ghana</option>
                <option> Iceland</option>
                <option> Iraq</option>
                <option> Indonesia</option>
                <option>Japan</option>
                <option>Malaysia</option>
                <option> Pakistan</option>
                <option> Philippines</option>
                <option>Russia</option>
                <option>Syria</option>
                <option> Turkey</option>
                <option>United Arab Emirates</option>
                <option>United States of America</option>
                <option> Yemen</option>
              </select>
              {/* <input
                required
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs text-black"
              /> */}
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-white">Your message</span>
              </label>
              <textarea
                name="message"
                required
                class="textarea textarea-bordered h-24 text-black"
                placeholder="Enter Your message"
              ></textarea>
            </div>
            <div class="form-control w-full max-w-xs">
              <input
                type="submit"
                value="Send"
                class=" btn btn-primary font-bold text-xl mt-4 w-full max-w-xs"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;

 