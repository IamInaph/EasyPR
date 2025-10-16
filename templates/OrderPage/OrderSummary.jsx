import { orderSteps, schema } from "@/contexts/OrderFormContext";
import useOrderFormContext from "@/hooks/useOrderFormContext";
import { Icon } from "@iconify/react";
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import React, { useState } from "react";
import { format } from "date-fns";

const SelectedPackage = (pkg) => {
  return (
    <li className="flex items-center justify-between py-1">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Icon
            icon="teenyicons:tick-circle-outline"
            height={18}
            className="text-green-500"
          />
          <span>{pkg.attributes.name}</span>
        </div>
        <span>{`$${pkg.attributes.price}` || "FREE"}</span>
      </div>
    </li>
  );
};

const OrderSummary = ({
  writingPackages,
  writingUpgrades,
  publishingNetworks,
  newsOutlets,
}) => {
  const {
    formState: { isValid },
    watch,
  } = useFormContext();

  const { gotoReview, gotoPayment, activeStep, activeSchema, creatingOrder } =
    useOrderFormContext();

  const writing_package_id = watch("writingPackage");
  const publishing_network_id = watch("publishingNetwork");
  const writing_upgrade_ids = watch("writingUpgrades");
  const newsOutlet_ids = watch("extraNewsOutlets");

  const selectedWritingPackage = useMemo(() => {
    return writingPackages?.data.find((pkg) => pkg.id === +writing_package_id);
  }, [writing_package_id, writingPackages]);

  const selectedPublishingNetwork = useMemo(() => {
    return publishingNetworks?.data.find(
      (network) => network.id === +publishing_network_id
    );
  }, [publishing_network_id, publishingNetworks]);

  const selectedWritingUpgrades = useMemo(() => {
    return writingUpgrades?.data.filter((upgrade) =>
      writing_upgrade_ids.includes(String(upgrade.id))
    );
  }, [writingUpgrades, writing_upgrade_ids]);

  const selectedNewsOutlets = useMemo(() => {
    return newsOutlets?.data?.filter((outlet) =>
      newsOutlet_ids.includes(String(outlet.id))
    );
  }, [newsOutlets, newsOutlet_ids]);

  const hasNoPackageSelected = useMemo(
    () =>
      !selectedWritingPackage &&
      !selectedPublishingNetwork &&
      !selectedNewsOutlets?.length &&
      !selectedWritingUpgrades?.length,
    [
      selectedWritingPackage,
      selectedPublishingNetwork,
      selectedNewsOutlets,
      selectedWritingUpgrades,
    ]
  );

  const totalAmount = useMemo(() => {
    let total = 0;

    total += selectedWritingPackage?.attributes.price || 0;
    total += selectedPublishingNetwork?.attributes.price || 0;

    selectedWritingUpgrades?.map((upgrade) => {
      total += upgrade?.attributes.price || 0;
    });

    selectedNewsOutlets?.map((newsOutlet) => {
      total += newsOutlet?.attributes.price || 0;
    });

    return total;
  }, [
    selectedNewsOutlets,
    selectedPublishingNetwork,
    selectedWritingPackage,
    selectedWritingUpgrades,
  ]);

  const buttonText = useMemo(() => {
    switch (activeStep) {
      case orderSteps.orderForm:
        if (!isValid) return "Fill the form to proceed";

        return "Review Order";

      case orderSteps.review:
        return "Proceed to Payment Methods";

      case orderSteps.payment:
        return "Continue to Payment";

      default:
        break;
    }
  }, [activeStep, isValid]);

  const handleClick = (e) => {
    e.preventDefault();

    switch (activeStep) {
      case orderSteps.orderForm:
        gotoReview();
        break;
      case orderSteps.review:
        gotoPayment();
        break;
      default:
        break;
    }
  };
  const [isNavOpen, setIsNavOpen] = useState(false);

  function addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }
  const threeDays = addDays(new Date(), 1);
  const twoDays = addDays(threeDays, 2);
  const oneDay = addDays(twoDays, 1);
  const onethirdDay = addDays(threeDays, 1);

  // console.log("selectedWritingPackage", selectedWritingPackage);
  return (
    <div
      className={`order-overview border-t-4 border-primary-300 ${
        isNavOpen ? "active" : " "
      }`}
    >
      <div
        className="flex justify-between"
        onClick={() => {
          setIsNavOpen((prevState) => !prevState);
        }}
      >
        <h2 className="lg:text-3xl text-2xl font-medium lg:mb-0 mb-8 ">
          Order Overview
        </h2>

        <div className={`lg:hidden ${isNavOpen ? "hidden" : " "}`}>
          {hasNoPackageSelected ? (
            <span className="text-xl text-gray-900 ">$0</span>
          ) : (
            <span className="text-xl text-gray-900 ">${totalAmount}</span>
          )}
        </div>

        <div className={`lg:hidden ${isNavOpen ? "" : "hidden"}`}>
          <Icon icon="radix-icons:cross-2" height={36} />
        </div>
      </div>
      <div className="h-full flex flex-col justify-between ">
        <div>
          <div className="flex justify-between">
            <strong className="block text-lg text-gray-900 ">
              Order Summary
            </strong>

            <div>
              <button
                className="btn-link text-sm flex items-center gap-1"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <Icon icon="ph:question" height={20} />
                What to expect?
              </button>
              <dialog id="my_modal_3" className="modal ">
                <div className="bg-white modal-box max-w-4xl">
                  <form method="dialog" className="modal-backdrop">
                    <button className="absolute w-10 h-10 p-2 bg-white border-0 rounded-full btn btn-icon btn-sm  right-2 top-2 ">
                      <Icon icon="radix-icons:cross-2" height={24} />
                    </button>
                  </form>
                  <h3 className="text-2xl">What to expect</h3>
                  <p>
                    When using our PR distribution service, here’s what you can
                    expect throughout the process:
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4>Content Accuracy and Rights:</h4>
                      <p>
                        It&apos;s essential that you share the correct and final
                        version of your content with us. Please be aware that
                        media outlets reserve the right to decline any
                        submission that doesn&apos;t meet their guidelines or
                        standards. If this happens, we will work professionally
                        to resolve any issues and ensure your content gets the
                        attention it deserves.
                      </p>
                    </div>
                    <div>
                      <h4>Possible Delays:</h4>
                      <p>
                        While we aim to adhere to our estimated timelines,
                        please expect some delays, especially if revisions are
                        required or if news sites request additional changes to
                        meet their publishing standards. These factors can add
                        extra time to the process, but we&apos;re committed to
                        ensuring quality and accuracy.
                      </p>
                    </div>
                    <div>
                      <h4>Writing Terms:</h4>
                      <p>
                        The writing terms, including deadlines and revisions,
                        are based on the terms we&apos;ve shared with you. We
                        strive to adhere to these terms while ensuring the
                        highest quality for your press release.
                      </p>
                    </div>
                  </div>
                  <p>
                    Thank you for your understanding and collaboration
                    throughout this process as we work to deliver the best
                    results for your business.
                  </p>
                </div>
              </dialog>
            </div>
          </div>
          <div className="mt-4">
            {hasNoPackageSelected ? (
              <div className="text-center flex flex-col gap-6 py-10">
                <strong className="text-3xl block">
                  Get guaranteed publicity on
                  <br />{" "}
                  <span className="text-4xl text-primary-300">
                    400+ News Sites
                  </span>
                </strong>
                <span className="text-xl text-gray-400">
                  Please select the desire packages.
                </span>
              </div>
            ) : (
              <ul className="flex flex-col gap-2 divide-y-2">
                {selectedWritingPackage && (
                  <>
                    <SelectedPackage {...selectedWritingPackage} />
                    <li className="flex items-center justify-between py-2">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <Icon
                            icon="teenyicons:tick-circle-outline"
                            height={18}
                            className="text-green-500"
                          />
                          <span> Detailed Report with Links</span>
                        </div>
                        <span>Included</span>
                      </div>
                    </li>
                  </>
                )}
                {selectedPublishingNetwork && (
                  <>
                    <SelectedPackage {...selectedPublishingNetwork} />

                    <li className="flex items-center justify-between py-2">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <Icon
                            icon="teenyicons:tick-circle-outline"
                            height={18}
                            className="text-green-500"
                          />
                          <span>
                            {" "}
                            Publishing on Minyanville & Financial Content
                          </span>
                        </div>
                        <span>Included</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-2">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <Icon
                            icon="teenyicons:tick-circle-outline"
                            height={18}
                            className="text-green-500"
                          />
                          <span>"As Seen On" Trust Badge</span>
                        </div>
                        <span>Included</span>
                      </div>
                    </li>
                  </>
                )}
                {selectedWritingUpgrades?.map((upgrade, index) => (
                  <>
                    <SelectedPackage {...upgrade} key={index} />
                  </>
                ))}
                {selectedNewsOutlets?.map((outlet, index) => (
                  <SelectedPackage {...outlet} key={index} />
                ))}
              </ul>
            )}
            <div className="flex items-center justify-between p-4 bg-slate-50 mt-3">
              <strong className="text-xl text-gray-900">Total Price</strong>
              {hasNoPackageSelected ? (
                <span className="text-xl text-gray-900 ">$0</span>
              ) : (
                <span className="text-xl text-gray-900 ">${totalAmount}</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="mt-4">
            <div className="flex justify-between">
              <div>
                <strong className="block text-lg text-gray-900">
                  Delivery Estimate
                </strong>
                <span>
                  Just an estimate, revisions or problems may lead to delays.
                </span>
              </div>
              <div>
                <button
                  className="btn-link text-sm flex items-center gap-1 "
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  <Icon icon="ph:question" height={20} />
                  <span className="min-w-fit">About Delivery</span>
                </button>
                <dialog id="my_modal_4" className="modal ">
                  <div className="bg-white modal-box max-w-4xl">
                    <form method="dialog" className="modal-backdrop">
                      <button className="absolute w-10 h-10 p-2 bg-white border-0 rounded-full btn btn-icon btn-sm  right-2 top-2 ">
                        <Icon icon="radix-icons:cross-2" height={24} />
                      </button>
                    </form>
                    <h3 className="text-2xl">About Delivery</h3>
                    <div>
                      <div>
                        <p>
                          It's important to note that our delivery estimates are
                          not guaranteed. Many people, teams, and companies are
                          involved in writing and publishing a news story on
                          hundreds of outlets, so our work takes time, but we
                          provide a quality service.
                        </p>
                      </div>
                      <div>
                        <h4>Writing Speed</h4>
                        <p>
                          We usually take 48 hours to write an article, and
                          revisions are typically completed within 24-48 hours.
                        </p>
                      </div>
                      <div>
                        <h4>Publishing & Reporting Speed</h4>
                        <p>
                          Our publishing process usually takes 5 business days,
                          which includes 2-4 business days for publishing and an
                          additional 1-2 days to compile your full report. For
                          the best results, news sites will not publish on
                          weekends.
                        </p>
                      </div>
                      <div>
                        <h4>Possible Delays</h4>
                        <p>
                          If an article needs to be revised, this will add time
                          to the publishing date. We may also require changes to
                          meet our writing guidelines, or the news sites may
                          request an edit before they accept an article.
                        </p>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              {selectedWritingPackage?.attributes.price === 0 ? (
                ""
              ) : (
                <div className="flex items-center gap-2">
                  <Icon
                    icon="gravity-ui:calendar"
                    className="text-blue-500"
                    height={18}
                  />
                  <span>
                    Article Ready on {format(threeDays, " MMMM d, yyy")}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Icon
                  icon="gravity-ui:calendar"
                  className="text-blue-500"
                  height={18}
                />
                {selectedWritingPackage?.attributes.price == 0 ? (
                  <span>Publish on {format(threeDays, " MMMM d, yyy")}</span>
                ) : (
                  <span>Publish on {format(twoDays, " MMMM d, yyy")}</span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon="carbon:report"
                  className="text-blue-500"
                  height={18}
                />
                {selectedWritingPackage?.attributes.price == 0 ? (
                  <span>
                    Full report on {format(onethirdDay, " MMMM d, yyy")}
                  </span>
                ) : (
                  <span>Full report on {format(oneDay, " MMMM d, yyy")}</span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6">
            {activeStep === orderSteps.payment ? (
              <button
                disabled={
                  (!isValid && activeSchema === schema.withPayment) ||
                  creatingOrder
                }
                className="w-full btn btn-primary disabled:text-white"
                type="submit"
              >
                {buttonText}
                <Icon icon="heroicons:arrow-long-right" height={28} />
              </button>
            ) : (
              <button
                disabled={!isValid && activeSchema === schema.withoutPayment}
                onClick={handleClick}
                className="w-full btn btn-primary disabled:text-white"
                type="button"
              >
                {buttonText}
                <Icon icon="heroicons:arrow-long-right" height={28} />
              </button>
            )}
          </div>
          <div className="flex bg-primary-25 mt-4 p-6 gap-2 rounded-md">
            <div>
              <Icon
                icon="mdi:shield-tick-outline"
                height={52}
                className="text-primary-300"
              />
            </div>
            <div>
              <h5>100% Money Back Guarantee</h5>
              <span>Publication Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
