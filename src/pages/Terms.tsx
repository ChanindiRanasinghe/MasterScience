import { Card, CardContent } from '../components/ui/card';

export function Terms() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Terms of Service</h1>
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
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using ExpertLearn ("we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                ExpertLearn provides an online educational platform that connects students with expert tutors for advanced mathematics, physics, chemistry, and science subjects. Our services include:
              </p>
              <ul>
                <li>One-on-one and group tutoring sessions via virtual classroom</li>
                <li>Access to micro-lesson video library</li>
                <li>Downloadable cheat sheets and study materials</li>
                <li>Practice exams and exam preparation resources</li>
                <li>Progress tracking and analytics</li>
              </ul>

              <h2>3. User Accounts</h2>
              <h3>3.1 Registration</h3>
              <p>
                To use certain features of our service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>

              <h3>3.2 Account Security</h3>
              <p>
                You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party.
              </p>

              <h3>3.3 Account Types</h3>
              <ul>
                <li><strong>Student Accounts:</strong> For individuals seeking tutoring and educational resources</li>
                <li><strong>Tutor Accounts:</strong> For qualified educators providing tutoring services (subject to approval and verification)</li>
                <li><strong>Parent/Guardian Accounts:</strong> For monitoring student progress and managing student accounts</li>
              </ul>

              <h2>4. Tutor Requirements and Verification</h2>
              <p>
                To become a tutor on ExpertLearn, applicants must:
              </p>
              <ul>
                <li>Hold at least a Bachelor's degree in a relevant field (Master's or PhD preferred)</li>
                <li>Pass background checks and credential verification</li>
                <li>Complete our tutor training program</li>
                <li>Maintain a minimum average rating of 4.0 stars</li>
                <li>Adhere to our code of conduct and teaching standards</li>
              </ul>

              <h2>5. Payments and Billing</h2>
              <h3>5.1 Subscription Plans</h3>
              <p>
                ExpertLearn offers various subscription plans with different features and pricing. Subscription fees are billed in advance on a monthly or annual basis.
              </p>

              <h3>5.2 Tutoring Sessions</h3>
              <p>
                Tutoring sessions are charged based on the tutor's hourly rate. Payment is processed at the time of booking. Subscriptions may include a certain number of tutoring hours per month.
              </p>

              <h3>5.3 Refund Policy</h3>
              <p>
                We offer refunds under the following conditions:
              </p>
              <ul>
                <li>Full refund if tutoring session is cancelled by the tutor within 24 hours of scheduled time</li>
                <li>Partial refund (50%) if student cancels with at least 24 hours notice</li>
                <li>No refund for cancellations with less than 24 hours notice</li>
                <li>14-day money-back guarantee on first subscription purchase</li>
                <li>Refunds for technical issues preventing session completion (subject to verification)</li>
              </ul>

              <h3>5.4 Tutor Payments</h3>
              <p>
                Tutors receive payment for completed sessions minus our platform fee (typically 10-15%). Payments are processed monthly via direct deposit or PayPal.
              </p>

              <h2>6. Cancellation and Rescheduling</h2>
              <p>
                Students may cancel or reschedule tutoring sessions with the following policies:
              </p>
              <ul>
                <li>Reschedule free of charge up to 24 hours before scheduled session</li>
                <li>Cancellation with full refund up to 24 hours before session</li>
                <li>Late cancellations (less than 24 hours) forfeit payment</li>
                <li>No-shows forfeit payment and may result in account restrictions</li>
              </ul>

              <h2>7. Code of Conduct</h2>
              <h3>7.1 Student Conduct</h3>
              <p>Students agree to:</p>
              <ul>
                <li>Treat tutors with respect and professionalism</li>
                <li>Arrive on time for scheduled sessions</li>
                <li>Come prepared with materials and questions</li>
                <li>Not share account credentials with others</li>
                <li>Not record sessions without tutor consent</li>
              </ul>

              <h3>7.2 Tutor Conduct</h3>
              <p>Tutors agree to:</p>
              <ul>
                <li>Provide high-quality, professional instruction</li>
                <li>Arrive on time and prepared for sessions</li>
                <li>Maintain professional boundaries with students</li>
                <li>Protect student privacy and confidentiality</li>
                <li>Not solicit students for outside tutoring</li>
              </ul>

              <h2>8. Intellectual Property</h2>
              <h3>8.1 Platform Content</h3>
              <p>
                All content on the ExpertLearn platform, including but not limited to text, graphics, logos, videos, cheat sheets, and software, is the property of ExpertLearn or its content suppliers and is protected by intellectual property laws.
              </p>

              <h3>8.2 User Content</h3>
              <p>
                By uploading or submitting content to ExpertLearn, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in connection with the service.
              </p>

              <h3>8.3 Usage Restrictions</h3>
              <p>Users may not:</p>
              <ul>
                <li>Download or redistribute platform content for commercial purposes</li>
                <li>Remove copyright or proprietary notices from materials</li>
                <li>Use content in a manner that infringes on intellectual property rights</li>
              </ul>

              <h2>9. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information. By using ExpertLearn, you consent to our Privacy Policy.
              </p>

              <h2>10. Prohibited Activities</h2>
              <p>You may not use ExpertLearn to:</p>
              <ul>
                <li>Violate any laws or regulations</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the service</li>
                <li>Use the service for any fraudulent or unlawful purpose</li>
                <li>Share or distribute inappropriate or offensive content</li>
              </ul>

              <h2>11. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the service will immediately cease.
              </p>

              <h2>12. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, ExpertLearn shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>

              <h2>13. Disclaimer of Warranties</h2>
              <p>
                The service is provided on an "AS IS" and "AS AVAILABLE" basis. ExpertLearn makes no warranties, expressed or implied, regarding the service, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>

              <h2>14. Educational Outcomes</h2>
              <p>
                While we strive to provide high-quality tutoring services, ExpertLearn does not guarantee specific educational outcomes, test scores, or academic achievements. Student success depends on multiple factors including individual effort, aptitude, and engagement.
              </p>

              <h2>15. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Your continued use of the service after changes become effective constitutes acceptance of the revised Terms.
              </p>

              <h2>16. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Massachusetts, United States, without regard to its conflict of law provisions.
              </p>

              <h2>17. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or your use of ExpertLearn shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the American Arbitration Association rules.
              </p>

              <h2>18. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <ul>
                <li>Email: legal@expertlearn.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Education Ave, Boston, MA 02115</li>
              </ul>

              <h2>19. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>

              <h2>20. Entire Agreement</h2>
              <p>
                These Terms constitute the entire agreement between you and ExpertLearn regarding the use of the service and supersede all prior agreements and understandings, whether written or oral.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
