'use client';
import Layout from '@/components/Layout';
import { format } from 'date-fns';
import Link from 'next/link';

export default function SuccessPage({ orderDetail }) {
  // Access the attributes correctly
  const publishingNetwork = orderDetail?.data?.attributes?.publishingNetwork?.data?.attributes;
  const writingPackage = orderDetail?.data?.attributes?.writingPackage?.data?.attributes;
  const writingUpgrades = orderDetail?.data?.attributes?.writingUpgrades?.data || [];
  const extraNewsOutlets = orderDetail?.data?.attributes?.extraNewsOutlets?.data || [];

  const transactionDate = orderDetail?.data?.attributes?.createdAt
    ? format(new Date(orderDetail.data.attributes.createdAt), 'yyyy-MMM-dd-HH:mm:ss')
    : null;

  return (
    <>
      <Layout>
        <section>
          <div className="max-w-3xl mx-auto ">
            <div className="text-center ">
              <h1 className="text-4xl"> Congratulations and Thank You!</h1>
              <p>
                Your press release is on its way to making headlines. We are
                thrilled to confirm that your order has been successfully
                received and is now being processed by our team of experts.
              </p>
            </div>
            <div className="max-w-lg p-8 mx-auto bg-slate-50 ">
              <h3 className="text-xl font-semibold">Order Details:</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>Order Number:</div>
                <div className="font-medium text-slate-900">
                  {orderDetail?.data?.attributes?.orderId}
                </div>
                <div>Transaction Date:</div>
                <div className="font-medium text-slate-900">
                  {transactionDate}
                </div>
                <div className="col-span-2 mt-4">
                  <h4 className="text-lg font-semibold">Package Selected:</h4>
                  <div className="bg-gray-100 p-4 rounded-md mt-2">
                    {/* Display Publishing Network in bullet point format */}
                    <strong>Publishing Network:</strong>
                    <ul className="list-disc ml-5">
                      <li>{publishingNetwork?.name}</li>
                    </ul>

                    {/* Display Extra News Outlets only if data exists */}
                    {extraNewsOutlets?.length > 0 && (
                      <div className="mt-2">
                        <strong>Extra News Outlets:</strong>
                        <ul className="list-disc ml-5">
                          {extraNewsOutlets.map((outlet, index) => (
                            <li key={outlet.id}>{outlet?.attributes?.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-100 p-4 rounded-md mt-4">
                    <div><strong>Writing Package:</strong></div>
                    {/* Display Writing Package in bullet point format */}
                    <ul className="list-disc ml-5">
                      <li>{writingPackage?.name}</li>
                    </ul>

                    {/* Display Writing Upgrades only if there are any */}
                    {writingUpgrades?.length > 0 && (
                      <div className="mt-2">
                        <div><strong>Writing Upgrades:</strong></div>
                        <ul className="list-disc ml-5">
                          {writingUpgrades.map((writingUpgrade, index) => (
                            <li key={writingUpgrade.id}>{writingUpgrade?.attributes?.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl">What Happens Next?</h2>
              <ul className="list">
                <li>
                  <strong>Review Process: </strong>Our editorial team will
                  review your press release to ensure it meets our publishing
                  standards. Should any adjustments be required, we will reach
                  out to you directly via email or phone.
                </li>
                <li>
                  <strong>Distribution Schedule:</strong>Once approved, your
                  press release will be scheduled for distribution based on the
                  timeline of the package you selected. You can expect to
                  receive an email confirmation with the exact release date and
                  time.
                </li>
                <li>
                  <strong>Tracking and Reporting:</strong>After your press
                  release has been distributed, you will receive a comprehensive
                  report detailing its reach, including views, shares, and the
                  list of outlets where it was published.
                </li>
              </ul>
              <h2 className="text-2xl">Need to Make Changes?</h2>
              <p>
                If you need to edit your press release or update any
                information, please contact us within 24 hours at [Your Contact
                Information]. Our team is here to ensure your news is presented
                exactly as you envision.
              </p>
              <h2 className="text-2xl">
                Get the Most Out of Your Press Release:
              </h2>
              <ul className="list">
                <li>
                  <strong>Optimize Your Content: </strong>Consider our
                  professional writing services for future releases to maximize
                  impact.
                </li>
                <li>
                  <strong>Engage on Social Media:</strong>Share your press
                  release across your social media channels to enhance
                  visibility.
                </li>
                <li>
                  <strong>Monitor Your Success:</strong>
                  Use our tracking tools to measure engagement and plan your
                  next big news announcement.
                </li>
              </ul>
              <h2 className="text-2xl">Questions or Concerns?</h2>
              <p>
                Our dedicated customer service team is here to help. Reach out
                to us anytime at{' '}
                <Link href="/contact" className="underline">
                  Help &amp; Support
                </Link>
                , or visit our{' '}
                <Link href="/faq" className="underline">
                  FAQ page
                </Link>{' '}
                for quick answers to common questions.
              </p>
              <h2 className="text-2xl">Thank You for Choosing EasyPR</h2>
              <p>
                We are committed to providing you with the best press release
                distribution service. Your story deserves to be told, and we're
                here to ensure it reaches your target audience effectively. Stay
                tuned for updates on your press release's journey!
              </p>
              <p>EasyPR LLC </p>
              <p>
                1635, 701 Tillery Street Unit 12, Austin, TX, Travis, US, 78702
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
