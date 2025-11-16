import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Perfect for exploring the platform',
    features: [
      { name: 'Access to Micro-Lesson Library (limited)', included: true },
      { name: 'Download 5 Cheat Sheets per month', included: true },
      { name: 'Browse Tutor Marketplace', included: true },
      { name: 'Community Forums Access', included: true },
      { name: '1-on-1 Tutoring Sessions', included: false },
      { name: 'Exam Prep Lab Access', included: false },
      { name: 'Virtual Classroom', included: false },
      { name: 'Progress Analytics', included: false }
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Student',
    price: 14700,
    period: 'month',
    description: 'For serious learners',
    features: [
      { name: 'Full Micro-Lesson Library Access', included: true },
      { name: 'Unlimited Cheat Sheet Downloads', included: true },
      { name: '4 Hours of 1-on-1 Tutoring per month', included: true },
      { name: 'Full Exam Prep Lab Access', included: true },
      { name: 'Virtual Classroom Access', included: true },
      { name: 'Progress Analytics & Reports', included: true },
      { name: 'Session Recording Access', included: true },
      { name: 'Priority Tutor Booking', included: false }
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Pro',
    price: 29700,
    period: 'month',
    description: 'For competitive exam preparation',
    features: [
      { name: 'Everything in Student plan', included: true },
      { name: '10 Hours of 1-on-1 Tutoring per month', included: true },
      { name: 'Priority Tutor Booking', included: true },
      { name: 'Personalized Study Plan', included: true },
      { name: 'Weekly Progress Reviews', included: true },
      { name: 'Advanced Analytics Dashboard', included: true },
      { name: 'Group Study Sessions', included: true },
      { name: 'Dedicated Academic Advisor', included: false }
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Elite',
    price: 59700,
    period: 'month',
    description: 'Ultimate learning experience',
    features: [
      { name: 'Everything in Pro plan', included: true },
      { name: '20 Hours of 1-on-1 Tutoring per month', included: true },
      { name: 'Dedicated Academic Advisor', included: true },
      { name: 'Custom Curriculum Design', included: true },
      { name: 'College Application Support', included: true },
      { name: 'Monthly Parent Progress Calls', included: true },
      { name: 'Unlimited Group Sessions', included: true },
      { name: '24/7 Priority Support', included: true }
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const addOns = [
  { name: 'Additional Tutoring Hour', price: 4500 },
  { name: 'Exam Prep Intensive (per exam)', price: 29700 },
  { name: 'College Application Package', price: 89700 },
  { name: 'Summer Bootcamp Access', price: 149700 }
];

export function Pricing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#020C35] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your learning goals. All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-[#020C35] shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#020C35]">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="pt-6">
                  <h3 className="text-2xl mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl">LKR {plan.price.toLocaleString()}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <Button 
                    className={`w-full mb-6 ${plan.popular ? 'bg-[#020C35]' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${!feature.included ? 'text-gray-400' : ''}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Add-Ons & Extras</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <h3 className="mb-2">{addon.name}</h3>
                  <div className="text-3xl text-[#020C35] mb-4">LKR {addon.price.toLocaleString()}</div>
                  <Button variant="outline" className="w-full">Add to Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-600">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2">What happens to unused tutoring hours?</h3>
                <p className="text-gray-600">
                  Unused hours roll over for one month. After that, they expire. However, you can always purchase additional hours as needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">
                  Yes! All paid plans include a 14-day free trial. No credit card required. Cancel anytime during the trial period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2">Do you offer student discounts?</h3>
                <p className="text-gray-600">
                  Yes! We offer a 20% discount for students with a valid .edu email address. We also have special rates for group enrollments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers for annual subscriptions. All payments are secured and encrypted.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#020C35] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help you choose the perfect plan for your needs
          </p>
          <Button size="lg" className="bg-white text-[#020C35] hover:bg-gray-100">
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
}
