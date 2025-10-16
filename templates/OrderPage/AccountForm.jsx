import React from "react";
import { Icon } from "@iconify/react";
import useOrderFormContext from "@/hooks/useOrderFormContext";
import { collapseSection } from "@/contexts/OrderFormContext";
import { useFormContext } from "react-hook-form";

const AccountForm = () => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const { activeCollapseSection, toggleActiveCollapseSection } =
    useOrderFormContext();

  const handleNextStep = async () => {
    const isValid = await trigger(["fullName", "emailAddress"]);

    if (isValid) {
      toggleActiveCollapseSection(collapseSection.network);
    }
  };

  return (
    <div className="mt-5">
      <div
        tabIndex={0}
        className={`bg-white border rounded-lg collapse collapse-arrow border-slate-200 ${
          activeCollapseSection === collapseSection.account
            ? "collapse-open"
            : "collapse-close"
        }`}
      >
        <div
          onClick={() => {
            toggleActiveCollapseSection(collapseSection.account);
          }}
          className="collapse-title"
        >
          Express Checkout
        </div>
        <div className="collapse-content">
          <div className="grid lg:grid-cols-2 gap-3 mt-2">
            <div className="form-control">
              <label>Full Name</label>
              <input
                {...register("fullName")}
                type="text"
                placeholder="Your Full name..."
                className="input"
              />
              {errors["fullName"] && (
                <span className="validate">
                  <Icon icon="mingcute:warning-line" />
                  {errors["fullName"]?.message}!
                </span>
              )}
            </div>

            <div className="form-control">
              <label>Email</label>
              <input
                {...register("emailAddress")}
                type="email"
                placeholder="Your Email..."
                className="input"
              />
              {errors["emailAddress"] && (
                <span className="validate">
                  <Icon icon="mingcute:warning-line" />
                  {errors["emailAddress"]?.message}!
                </span>
              )}
            </div>
          </div>
          <div className="lg:mt-12 mt-2 flex justify-end">
            <button
              type="button"
              onClick={handleNextStep}
              className="btn btn-secondary"
            >
              Next Step
              <Icon icon="heroicons:arrow-long-right" height={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
