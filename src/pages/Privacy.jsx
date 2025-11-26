import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Your Blog</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you subscribe to our newsletter, fill out a contact form, or leave a comment. This may include your name, email address, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Google AdSense</h2>
            <p className="text-gray-600 mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense may collect and use information about your visits to this and other websites to provide relevant advertisements about goods and services.
            </p>
            <p className="text-gray-600 mb-4">
              Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google's Ads Settings.
            </p>
            <p className="text-gray-600 mb-4">
              For more information about how Google collects and uses data, please see Google's Privacy & Terms at: https://policies.google.com/privacy
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Collection and Cookies</h2>
            <p className="text-gray-600 mb-4">
              We and our partners use cookies and similar technologies to analyze trends, administer the website, track users' movements around the website, and to gather demographic information about our user base as a whole.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except trusted third parties who assist us in operating our website, conducting our business, or serving our users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to our processing of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "effective date" at the top.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;