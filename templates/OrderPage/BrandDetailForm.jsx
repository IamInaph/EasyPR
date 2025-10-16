"use client";
import CountrySelect from "@/components/Elements/CountrySelect";
import MultiSelectTextInput from "@/components/Elements/MultiSelectTextInput";
import { collapseSection } from "@/contexts/OrderFormContext";
import useOrderFormContext from "@/hooks/useOrderFormContext";
import { Icon } from "@iconify/react";
import { useFormContext } from "react-hook-form";

const BrandDetailForm = ({ pageData }) => {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useFormContext();

  const {
    country,
    setCountry,
    links,
    setLinks,
    toggleActiveCollapseSection,
    activeCollapseSection,
  } = useOrderFormContext();

  const handleNextStep = async () => {
    const isValid = await trigger([
      "brandName",
      "country",
      "websiteLinks",
      "representativeName",
      "representativeEmail",
    ]);

    if (isValid) {
      toggleActiveCollapseSection(collapseSection.newsStory);
    }
  };

  const handleCountryChange = (country) => {
    setCountry(country);
    setValue("country", country?.value || "", {
      shouldValidate: true,
    });
  };

  const handleWebsiteLinksChange = (links) => {
    setLinks(links);
    const websiteLinks = links.map((link) => ({
      text: "",
      href: link.label,
    }));
    setValue("websiteLinks", websiteLinks, {
      shouldValidate: true,
    });
  };

  return (
    <div
      tabIndex={0}
      className={`bg-white border rounded-lg collapse collapse-arrow border-slate-200 ${
        activeCollapseSection === collapseSection.brand
          ? "collapse-open"
          : "collapse-close"
      }`}
    >
      <div
        onClick={() => {
          toggleActiveCollapseSection(collapseSection.brand);
        }}
        className="text-xl font-medium collapse-title"
      >
        Brand Details
      </div>
      <div className="collapse-content">
        <p>{pageData.brandDescription}</p>

        <div className="grid lg:grid-cols-2 gap-3 lg:mt-2">
          <div className="form-control">
            <label>Brand Name</label>
            <input
              {...register("brandName")}
              type="text"
              className="input"
              placeholder="MediaX Agency..."
            />
            <span className="text-red-500">{errors["brandName"]?.message}</span>
          </div>
          <div className="form-control">
            <label>Country</label>
            <CountrySelect
              defaultValue={country}
              className="input"
              handleCountryChange={handleCountryChange}
            />
            <span className="text-red-500">{errors["country"]?.message}</span>
          </div>
        </div>
        <div>
          <div className="form-control">
            <label>
              Website & Links{" "}
              <span className="text-gray-400">
                (Enter website URL & press Enter)
              </span>
            </label>
            <MultiSelectTextInput
              className="input"
              defaultValue={links}
              onChange={handleWebsiteLinksChange}
            />
            <span className="text-red-500">
              {errors["websiteLinks"]?.message}
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-3 lg:mt-2">
          <div className="form-control">
            <label>Representative Name</label>
            <input
              {...register("representativeName")}
              type="text"
              className="input"
              placeholder="Support team..."
            />
            <span className="text-red-500">
              {errors["representativeName"]?.message}
            </span>
          </div>
          <div className="form-control">
            <label>Representative Email</label>
            <input
              {...register("representativeEmail")}
              type="text"
              className="input"
              placeholder="support@mediax.agency"
            />
            <span className="text-red-500">
              {errors["representativeEmail"]?.message}
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-3 lg:mt-2">
          <div className="form-control">
            <label>Address</label>
            <input
              {...register("address")}
              type="text"
              className="input"
              placeholder="Address..."
            />
            <span className="text-red-500">{errors["address"]?.message}</span>
          </div>
          <div className="form-control">
            <label>Phone</label>
            <input
              {...register("phoneNumber")}
              type="text"
              className="input"
              placeholder="Number..."
            />
            <span className="text-red-500">
              {errors["phoneNumber"]?.message}
            </span>
          </div>
        </div>

        <div className="flex justify-end mt-10">
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
  );
};

export default BrandDetailForm;
