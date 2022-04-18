import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h1>Q1.Difference between authorization and authentication</h1>
        <p>
          Authentication verifies who the user is.Authorization determines what
          resources a user can access.Authentication works through passwords,
          one-time pins, biometric information, and other information provided
          or entered by the user.Authorization works through settings that are
          implemented and maintained by the organization.Authentication is the
          first step of a good identity and access management
          process.Authorization always takes place after authentication.
        </p>
      </div>
      <div>
        <h1>
          Q2.Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. <br />
        </p>
      </div>
      <div>
        <h1>
          Q3. What other services does firebase provide other than
          authentication
        </h1>
        <p>
          There are many services which Firebase provides, Most useful of them
          are: Cloud Firestore. Cloud Functions. Authentication. Hosting. Cloud
          Storage. Google Analytics. Predictions. Cloud Messaging.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
