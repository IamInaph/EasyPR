import { collapseSection } from "@/contexts/OrderFormContext";
import useOrderFormContext from "@/hooks/useOrderFormContext";
import { countries } from "@/utils/country-list";
import { Icon } from "@iconify/react";
import { useFormContext } from "react-hook-form";

const CardWrapper = ({ children, onEdit }) => {
  return (
    <div className="flex items-start justify-between p-3 mb-5 border rounded-md">
      <div className="flex flex-col w-full">{children}</div>
      <button
        type="button"
        onClick={onEdit}
        className="text-gray-500 underline hover:text-slate-900"
      >
        Change
      </button>
    </div>
  );
};

const OrderReview = (orderPageProps) => {
  const { getValues } = useFormContext();

  const { gotoOrderForm, gotoPayment, setActiveCollapseSection } =
    useOrderFormContext();

  const selectedNetwork = orderPageProps.publishingNetworks?.data?.find(
    (p) => String(p.id) === getValues("publishingNetwork")
  );

  const selectedWriting = orderPageProps.writingPackages?.data?.find(
    (p) => String(p.id) === getValues("writingPackage")
  );

  const selectedCountry = countries.find(
    (country) => String(country.code) === getValues("country")
  );

  const isFreePackage = selectedWriting?.attributes.price === 0;

  const uploadedDocName =
    getValues("newsStoryDoc")[0]?.name || "File to be sent later";

  const images = getValues("newsStoryImages");

  const uploadedImages = images[0]?.name ? [...images] : [];

  const backToOrderForm = () => {
    gotoOrderForm();
  };

  const proceedToPaymentMethods = () => {
    gotoPayment();
  };

  const onWritingEdit = () => {
    gotoOrderForm();
    setActiveCollapseSection(collapseSection.writing);
  };

  const onNetworkEdit = () => {
    gotoOrderForm();
    setActiveCollapseSection(collapseSection.network);
  };

  const onBrandEdit = () => {
    gotoOrderForm();
    setActiveCollapseSection(collapseSection.brand);
  };

  const onNewsStoryEdit = () => {
    gotoOrderForm();
    setActiveCollapseSection(collapseSection.newsStory);
  };

  return (
    <div>
      <div className="p-4 bg-white rounded-md">
        {/* packages */}
        <div className="grid grid-cols-2 gap-4">
          <CardWrapper onEdit={onWritingEdit}>
            <div className="mb-4">Writing Package</div>
            <strong className="text-xl mb-3 text-slate-900">
              {selectedWriting?.attributes.name}
            </strong>
          </CardWrapper>
          <CardWrapper onEdit={onNetworkEdit}>
            <div className="mb-4">Publishing Network</div>
            <strong className="text-xl mb-3  text-slate-900">
              {selectedNetwork?.attributes.name}
            </strong>
          </CardWrapper>
        </div>
        <CardWrapper onEdit={onBrandEdit}>
          <h3 className="text-xl mb-3">Brand Details</h3>
          <div>
            <div className="grid-cols-2 grid gap-2">
              <span className="text-gray-500">Brand Name:</span>
              <strong className="text-slate-900 text-lg">
                {getValues("brandName")}
              </strong>
              <span className="text-gray-500">Representative Name:</span>
              <strong className="text-slate-900 text-lg">
                {getValues("representativeName")}
              </strong>
              <span className="text-gray-500">Contact Email:</span>
              <strong className="text-slate-900 text-lg">
                {getValues("representativeEmail")}
              </strong>
              <span className="text-gray-500">Contact Phone:</span>
              <strong className="text-slate-900 text-lg">
                {getValues("phoneNumber")}
              </strong>
              <span className="text-gray-500">Address: </span>
              <strong className="text-slate-900 text-lg">
                {getValues("address")}
              </strong>
              <span className="text-gray-500">Country: </span>
              <strong className="text-slate-900 text-lg">
                {selectedCountry?.name}
              </strong>
              <span className="text-gray-500"> Website & Links: </span>
              <strong className="text-slate-900 text-lg">
                {getValues("websiteLinks")
                  ?.map((link) => link.href)
                  ?.toString()}
              </strong>
            </div>
          </div>
        </CardWrapper>
        <CardWrapper onEdit={onNewsStoryEdit}>
          <h3 className="text-xl mb-3">News Story Details</h3>
          <div className="grid-cols-2 grid gap-2">
            <span className="text-gray-500"> Topic: </span>
            <strong className="text-slate-900 text-lg">
              {getValues("newsStoryTopicAndAngle")}
            </strong>
            <span className="text-gray-500">Description:</span>
            <strong className="text-slate-900 text-lg">
              {getValues("newsStoryDescription")}
            </strong>
            <span className="text-gray-500">Article Goal:</span>
            <strong className="text-slate-900 text-lg">
              {getValues("newsStoryArticleGoal")}
            </strong>
            <span className="text-gray-500"> Search Terms: </span>
            <strong className="text-slate-900 text-lg">
              {getValues("newsStorySearchTerms")}
            </strong>
            <span className="text-gray-500"> Quotes: </span>
            <strong className="text-slate-900 text-lg">
              {getValues("newsStoryQuotes")}
            </strong>
            <span className="text-gray-500"> Youtube Embed Link: </span>
            <strong className="text-slate-900 text-lg">
              {getValues("newsStoryYoutubeEmbedLink")}
            </strong>
          </div>
        </CardWrapper>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
        <button
          type="button"
          onClick={backToOrderForm}
          className="btn btn-secondary"
        >
          <Icon icon="heroicons:arrow-left" height={20} /> Back to Order Form
        </button>
        <button
          type="button"
          onClick={proceedToPaymentMethods}
          className="btn btn-primary"
        >
          Proceed to payment methods
          <Icon icon="heroicons:arrow-right" height={20} />
        </button>
      </div>
    </div>
  );
};

export default OrderReview;
