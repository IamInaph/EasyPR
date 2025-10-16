"use client";
import { collapseSection } from "@/contexts/OrderFormContext";
import useOrderFormContext from "@/hooks/useOrderFormContext";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Icon } from "@iconify/react";

const WritingPackage = ({
  writingPackage,
  register,
  isTabOpen,
  setIsActivePack,
  index,
}) => {
  return (
    <li
      className={`package-card relative ${isTabOpen ? "package-active" : ""}`}
    >
      <div className="package-block">
        <label
          className="flex gap-3 items-center"
          onClick={() => {
            setIsActivePack(index);
          }}
        >
          <input
            type={"radio"}
            {...register("writingPackage")}
            value={writingPackage.id}
            className="w-5 h-5 radio checked:bg-primary-300 "
          />
          <div>
            <strong className="package-title ">
              {writingPackage.attributes.name}
            </strong>
            <span>{writingPackage.attributes.description}</span>
          </div>
        </label>
        <div>
          <span className="package-price lg:relative absolute top-2 right-2">
            {writingPackage.attributes.price === 0
              ? "Free"
              : `$${writingPackage.attributes.price}`}
          </span>
        </div>
      </div>
    </li>
  );
};
const WritingUpgrade = ({ writingUpgrade, register }) => {
  const [isUpgrade, setIsUpgrade] = useState(false);

  return (
    <div
      className={`package-card items-start p-3 ${
        isUpgrade ? "border-slate-900" : " "
      }`}
    >
      <label
        className="cursor-pointer label gap-2 w-full"
        onClick={() => {
          setIsUpgrade((prevState) => !prevState);
        }}
      >
        <input
          type={"checkbox"}
          {...register("writingUpgrades")}
          value={writingUpgrade.id}
          className="w-5 h-5 checkbox border-gray-300 rounded-md   [--chkbg:theme(colors.black)] [--chkfg:white]"
        />
        <div>
          <h4 className="label-text">{writingUpgrade.attributes.name}</h4>
          <span>{writingUpgrade.attributes.description}</span>
        </div>
        <div className="ml-auto package-price">
          ${writingUpgrade.attributes.price}
        </div>
      </label>
    </div>
  );
};

const WritingPackageAndUpgrades = ({
  writingPackages,
  writingUpgrades,
  pageData,
}) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const { activeCollapseSection, toggleActiveCollapseSection } =
    useOrderFormContext();

  const handleNextStep = async () => {
    const isValid = await trigger("writingPackage");

    if (isValid) {
      toggleActiveCollapseSection(collapseSection.brand);
    }
  };
  const [isActivePack, setIsActivePack] = useState(false);

  return (
    <div>
      <div
        tabIndex={0}
        className={`bg-white border rounded-lg collapse collapse-arrow border-slate-200 ${
          activeCollapseSection === collapseSection.writing
            ? "collapse-open"
            : "collapse-close"
        }`}
      >
        <div
          onClick={() => {
            toggleActiveCollapseSection(collapseSection.writing);
          }}
          className="collapse-title"
        >
          Writing Package
        </div>
        <div className="collapse-content">
          <p>{pageData.writingPackagesDescription}</p>
          <div>
            <ul className="flex flex-col gap-3 writing-package">
              {writingPackages?.data.map((writingPackage, index) => {
                const isTabOpen = isActivePack === index;
                return (
                  <WritingPackage
                    key={index}
                    writingPackage={writingPackage}
                    register={register}
                    isTabOpen={isTabOpen}
                    index={index}
                    setIsActivePack={setIsActivePack}
                  />
                );
              })}
            </ul>
            <span className="mt-2 text-red-500">
              {errors["writingPackage"]?.message}
            </span>
          </div>
          <h3 className="my-3 font-semibold text-lg mt-10">Writing Upgrades</h3>
          <div>
            <ul>
              {writingUpgrades?.data.map((writingUpgrade, index) => {
                return (
                  <WritingUpgrade
                    key={index}
                    writingUpgrade={writingUpgrade}
                    register={register}
                  />
                );
              })}
            </ul>
            <span className="mt-2 text-red-500">
              {errors["writing_upgrade"]?.message}
            </span>
          </div>
          <div className="mt-10 flex justify-end">
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

export default WritingPackageAndUpgrades;
