import React from 'react'
import testimonials from "@/styles/Testimonials.module.css";

function Testimonials() {
  return (
    <div>
      <div className={testimonials.whatPeopleSay}>
          <p className={testimonials.subTitle}>
            <b>TESTIMONIALS</b>
          </p>
          <h6>What People Say</h6>
          <div className={testimonials.testimonials}>
            <figure className={testimonials.snip1192}>
              <blockquote>
                We have been trying to put together a functional website and
                affordable price. I am happy to say we finally hired the Edxweb
                team and they have worked closely with us throughout the
                process, staying on task, on target, and on budget. I also
                appreciate their quick and courteous responses. I highly
                recommend their service!
              </blockquote>
              <div className={testimonials.author}>
                {/* <Image
                  src={alexBryce}
                  alt="testimonial image"
                  width="100%"
                  height="100%"
                /> */}

                <p>Alexander Bryce</p>
              </div>
            </figure>
            <figure className={testimonials.snip1192}>
              <blockquote>
                Our agency have been using Edxweb services for the last four
                months. They have been a professional and committed partner who
                have taken responsibility for the partnership. Under tight
                deadlines and with high expectations, Edxweb was a pleasure to
                partner with. I would not hesitate in recommending them to other
                agencies.
              </blockquote>
              <div className={testimonials.author}>
                {/* <Image
                  src={Jane}
                  alt="testimonial image"
                  width="100%"
                  height="100%"
                /> */}
                <p>Jordana Jane</p>
              </div>
            </figure>
          </div>
        </div>
    </div>
  )
}

export default Testimonials
