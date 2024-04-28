import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          HAMSA Technocare is a startup company with multiple hands of technical experts of Wireless Communications, Networking, Security, Data Center Solution, WAN Optimization, IOT, Automation, Asset Tracking and Surveillance Solutions.

HAMSA Technocare have multiple strong hands and having PAN India Support/Pre Sales Network coveringIndia as: Delhi & NCR, Rajasthan, Punjab, Haryana, Uttar Pradesh, Madhya Pradesh, Maharastra, North East Region, Tamilnadu, Karnataka and Kerala states..

We are working closely with multiple Principle directly as their major stocking partner and working transparently with our partners and clients and providing them best pricing and support services.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
