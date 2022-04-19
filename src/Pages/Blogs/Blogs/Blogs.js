import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h3>Q1.Difference between authorization and authentication.</h3>
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
        <h3>
          Q2.Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. <br /> There are some website that provides authentication
          support like Parse,Back4App,AWS
          Amplify,Kuzzle,Couchbase,NativeScript,RxDB.
        </p>
      </div>
      <div>
        <h3>
          Q3. What other services does firebase provide other than
          authentication.
        </h3>
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
