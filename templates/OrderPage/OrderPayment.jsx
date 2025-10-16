import { schema } from "@/contexts/OrderFormContext";
import useOrderFormContext from "@/hooks/useOrderFormContext";
import { Icon } from "@iconify/react";
import { useFormContext } from "react-hook-form";
import { getStrapiMedia } from "@/utils/media";
import Image from "next/image";
import React, { useState } from "react";

const OrderPayment = (orderPageProps) => {
  const paymentMethods = orderPageProps.pageData.paymentMethods.data;

  const {
    formState: { errors, isValid },
    register,
  } = useFormContext();

  const { gotoReview, activeSchema, creatingOrder } = useOrderFormContext();
  const [isPaymentSelected, setIsPaymentSelected] = useState(false);

  return (
    <div className="py-5">
      <h5>Payment Method</h5>
      <p>Choose from the secure payment methods below.</p>
      <ul className="my-6">
        {paymentMethods?.map((paymentMethod, index) => {
          // console.log("paymentMethod", paymentMethod);
          return (
            <li key={paymentMethod.id}>
              <div
                className={`flex items-center gap-2 border p-4 rounded-lg ${
                  isPaymentSelected ? "border-primary-300 border-2" : ""
                }`}
              >
                <label
                  className="flex gap-2 items-center w-full"
                  onClick={() => {
                    setIsPaymentSelected((prevState) => !prevState);
                  }}
                >
                  <input
                    {...register("paymentMethod")}
                    type="radio"
                    value={paymentMethod.id}
                    className="w-5 h-5 radio checked:bg-primary-300 "
                  />
                  <span className="text-slate-900 text-lg">
                    {paymentMethod.attributes.name}
                  </span>
                  {paymentMethod?.attributes?.image && (
                    <figure
                      className="relative min-w-20 lg:min-h-12  block ml-auto"
                      key={index}
                    >
                      <Image
                        src={getStrapiMedia(
                          paymentMethod?.attributes?.image?.media
                        )}
                        fill
                        sizes="100vh"
                        priority
                        className="object-contain"
                        alt={paymentMethod.attributes?.image.alt}
                      />
                    </figure>
                  )}
                </label>
              </div>
            </li>
          );
        })}

        <li className="flex">
          {errors["paymentMethod"] && (
            <span className="validate">
              <Icon icon="mingcute:warning-line" />
              {errors["paymentMethod"]?.message}!
            </span>
          )}
        </li>
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
        <button
          disabled={creatingOrder}
          type="button"
          onClick={gotoReview}
          className="btn btn-secondary disabled:text-white"
        >
          <Icon icon="heroicons:arrow-left" height={20} /> Back to review
        </button>
        <button
          disabled={
            (!isValid && activeSchema === schema.withPayment) || creatingOrder
          }
          className="btn btn-primary disabled:text-white"
        >
          Proceed to payment
          <Icon icon="heroicons:arrow-right" height={20} />
        </button>
      </div>
    </div>
  );
};

export default OrderPayment;
