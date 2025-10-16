"use client";

import Logo from "@/components/Svg/Logo";
import OrderFormContextProvider, {
  orderSteps,
} from "@/contexts/OrderFormContext";
import useOrderFormContext from "@/hooks/useOrderFormContext";
import { createOrder } from "@/services/order";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import OrderForm from "./OrderForm";
import OrderPayment from "./OrderPayment";
import OrderReview from "./OrderReview";
import OrderSummary from "./OrderSummary";

const FormProviderContent = (orderPageProps) => {
  const { activeStep } = useOrderFormContext();

  switch (activeStep) {
    case orderSteps.orderForm:
      return <OrderForm {...orderPageProps} />;

    case orderSteps.review:
      return <OrderReview {...orderPageProps} />;

    case orderSteps.payment:
      return <OrderPayment {...orderPageProps} />;

    default:
      return null;
  }
};

const BreadCrumbs = () => {
  const { creatingOrder, activeStep, gotoOrderForm, gotoReview, gotoPayment } =
    useOrderFormContext();

  const activeClass = (step) =>
    activeStep === step ? "text-primary-400 font-semibold" : "";

  const handleBreadCrumbClick = async (step) => {
    switch (step) {
      case orderSteps.orderForm:
        gotoOrderForm();
        break;
      case orderSteps.review:
        gotoReview();
        break;

      case orderSteps.payment:
        gotoPayment();

        break;
      default:
        break;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={creatingOrder}
        type="button"
        onClick={() => handleBreadCrumbClick(orderSteps.orderForm)}
        className={`font-normal underline ${activeClass(orderSteps.orderForm)}`}
      >
        Order Form
      </button>
      <Icon icon="heroicons:chevron-right" height={20} />
      <button
        type="button"
        className={` underline ${activeClass(orderSteps.review)}`}
      >
        Review
      </button>
      <Icon icon="heroicons:chevron-right" height={20} />
      <button
        type="button"
        className={`text-gray-500 cursor-default ${activeClass(
          orderSteps.payment
        )}`}
      >
        Payment
      </button>
    </div>
  );
};

const FormContainer = (orderPageProps) => {
  const { activeSchema, setCreatingOrder } = useOrderFormContext();
  const form = useForm({
    defaultValues: {
      fullName: "",
      emailAddress: "",
      writingPackage: "",
      writingUpgrades: [],
      publishingNetwork: "",
      extraNewsOutlets: [],
      brandName: "",
      country: "",
      websiteLinks: [],
      representativeName: "",
      representativeEmail: "",
      address: "",
      phoneNumber: "",
      newsStoryTopicAndAngle: "",
      newsStoryDescription: "",
      newsStoryArticleGoal: "",
      newsStorySearchTerms: "",
      newsStoryQuotes: "",
      newsStoryYoutubeEmbedLink: "",
      newsStoryDoc: {},
      newsStoryImages: {},
      paymentMethod: "",
    },
    resolver: zodResolver(activeSchema),
  });
  console.log("form error", form.formState.errors);
  const handleSubmit = async (data) => {
    const { newsStoryDoc, newsStoryImages, ...other } = data;

    const websiteLinks = [
      ...data.websiteLinks.map((link) => ({
        text: "",
        href: link.label,
      })),
    ];

    const orderPayload = {
      ...other,
      writingPackage: {
        connect: [data.writingPackage],
      },
      writingUpgrades: {
        connect: [...data.writingUpgrades],
      },
      publishingNetwork: {
        connect: [data.publishingNetwork],
      },
      extraNewsOutlets: {
        connect: [...data.extraNewsOutlets],
      },
      paymentMethod: {
        connect: [data.paymentMethod],
      },
      websiteLinks,
    };

    try {
      setCreatingOrder(true);

      const formData = new FormData();

      if (newsStoryDoc && newsStoryDoc[0]?.name) {
        const docFile = newsStoryDoc[0];

        formData.append(`newsStoryDoc`, docFile, docFile.name);
      }

      if (newsStoryImages && newsStoryImages[0]?.name) {
        const images = [...newsStoryImages];

        images.forEach((image) => {
          formData.append(`newsStoryImages`, image, image.name);
        });
      }

      formData.append("data", JSON.stringify(orderPayload));

      await createOrder(formData)
        .then((response) => {
          const success = response.data.success;

          if (success) {
            const checkoutUrl = response.data.data.checkoutUrl;

            window.location.href = checkoutUrl;
          }

          setCreatingOrder(false);
        })
        .catch((error) => {
          setCreatingOrder(false);
        });
    } catch (error) {
      console.log(error);
      setCreatingOrder(false);
    }
  };
  return (
    <form className="" onSubmit={form.handleSubmit(handleSubmit)}>
      <FormProvider {...form}>
        <div className="flex flex-col lg:w-3/5 gap-6 lg:p-10 p-4 bg-slate-50 min-h-screen mb-12 lg:mb-0">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div>
            <h1 className="text-3xl">{orderPageProps.pageData.title}</h1>
            <p>{orderPageProps.pageData.description}</p>
          </div>
          <BreadCrumbs />

          <FormProviderContent {...orderPageProps} />
        </div>

        <OrderSummary {...orderPageProps} />
      </FormProvider>
    </form>
  );
};

const OrderPage = (orderPageProps) => {
  return (
    <section className="pt-0 pb-4 overflow-x-hidden">
      <div className="container-fluid">
        <OrderFormContextProvider>
          <FormContainer {...orderPageProps} />
        </OrderFormContextProvider>
      </div>
    </section>
  );
};

export default OrderPage;
