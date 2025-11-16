import { Card, CardContent } from '../components/ui/card';

export function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-300">
            Last Updated: November 15, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6 prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                Welcome to ExpertLearn. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li><strong>Identity Data:</strong> First name, last name, username or similar identifier</li>
                <li><strong>Contact Data:</strong> Email address, telephone number, billing address</li>
                <li><strong>Financial Data:</strong> Payment card details (processed securely through third-party payment processors)</li>
                <li><strong>Transaction Data:</strong> Details about payments to and from you and other details of services you have purchased</li>
                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
                <li><strong>Profile Data:</strong> Username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses</li>
                <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
                <li><strong>Educational Data:</strong> Academic progress, test scores, learning preferences, and tutoring session records</li>
              </ul>

              <h3>How We Collect Your Data</h3>
              <p>We use different methods to collect data from and about you including:</p>
              <ul>
                <li><strong>Direct interactions:</strong> You may give us your Identity, Contact and Financial Data by filling in forms or by corresponding with us</li>
                <li><strong>Automated technologies or interactions:</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns</li>
                <li><strong>Third parties:</strong> We may receive personal data about you from various third parties such as analytics providers and payment processors</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul>
                <li>To register you as a new student or tutor</li>
                <li>To process and deliver your service orders including managing payments, fees and charges</li>
                <li>To manage our relationship with you including notifying you about changes to our terms or privacy policy</li>
                <li>To enable you to participate in competitions, promotions or surveys</li>
                <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)</li>
                <li>To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you</li>
                <li>To use data analytics to improve our website, services, marketing, customer relationships and experiences</li>
                <li>To match students with appropriate tutors based on learning needs and preferences</li>
                <li>To track academic progress and provide personalized learning recommendations</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
              <p>
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>

              <h2>Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              <p>
                To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.
              </p>

              <h2>Your Legal Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul>
                <li><strong>Request access</strong> to your personal data</li>
                <li><strong>Request correction</strong> of your personal data</li>
                <li><strong>Request erasure</strong> of your personal data</li>
                <li><strong>Object to processing</strong> of your personal data</li>
                <li><strong>Request restriction</strong> of processing your personal data</li>
                <li><strong>Request transfer</strong> of your personal data</li>
                <li><strong>Right to withdraw consent</strong></li>
              </ul>

              <h2>Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>

              <h2>Cookies</h2>
              <p>
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us:
              </p>
              <ul>
                <li>Email: privacy@expertlearn.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Education Ave, Boston, MA 02115</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
