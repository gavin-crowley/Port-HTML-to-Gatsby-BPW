import React from "react"
import "../styles/style.css"
import Layout from "../components/layout"
// import { graphql } from "gatsby"
import Head from '../components/head'


const Contact = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <div id="content">
      {/* <title>{data.site.siteMetadata.title}</title> */}

        <h1>Contact Us</h1>
        <p>
          Below is an example of how a contact form might look with this
          template:
        </p>
          <form>
          <div className="form_settings">
            <p>
              <span>Name</span>
              <input className="contact" type="text" name="your_name" value="" />
            </p>
            <p>
              <span>Email Address</span>
              <input className="contact" type="text" name="your_email" value="" />
            </p>
            <p>
              <span>Message</span>
              <textarea
                className="contact textarea"
                rows="8"
                cols="50"
                name="your_enquiry"
              ></textarea>
            </p>
            <p style={{paddingTop: '15px'}}>
              <span>&nbsp;</span>
              <input
                className="submit"
                type="submit"
                name="contact_submitted"
                value="submit"
              />
            </p>
          </div>
        </form>
        <p>
          <br />
          <br />
          NOTE: A contact form such as this would require some way of emailing
          the input to an email address.
        </p>
      </div>
    </Layout>
  )

}


export default Contact


// export const query = graphql`
// query {
//   site {
//     siteMetadata {
//       title
//     }
//   }
// }
// `
