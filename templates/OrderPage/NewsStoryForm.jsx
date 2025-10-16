import { collapseSection } from "@/contexts/OrderFormContext";
import useOrderFormContext from "@/hooks/useOrderFormContext";
import { createImageUrl } from "@/utils/media";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const OptionalFormControls = ({ writingPackages }) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();

  const writingPackage = writingPackages?.data?.find(
    (p) => String(p.id) === getValues("writingPackage")
  );

  const isFreePackage = writingPackage?.attributes.price === 0;

  if (isFreePackage) return null;

  return (
    <>
      <div className="form-control">
        <label>Topic</label>
        <input
          {...register("newsStoryTopicAndAngle")}
          type="text"
          className="input"
          placeholder="What should the news be about?"
        />{" "}
        <span className="text-red-500">
          {errors["newsStoryTopicAndAngle"]?.message}
        </span>
      </div>
      <div className="form-control">
        <label>Description</label>
        <textarea
          {...register("newsStoryDescription")}
          type="text"
          className="textarea"
          placeholder="Describe your product & brand, List what you want included, List your features or benefits, provide links to similar articles"
        />
        <span className="text-red-500">
          {errors["newsStoryDescription"]?.message}
        </span>
      </div>
      <div className="form-control">
        <label>Goal of the Article</label>
        <textarea
          {...register("newsStoryArticleGoal")}
          type="text"
          className="textarea"
          placeholder="What's the objective? (eg more sales), asserting authority, etc."
        />
        <span className="text-red-500">
          {errors["newsStoryArticleGoal"]?.message}
        </span>
      </div>
      <div className="form-control">
        <label>Search Terms / Keywords</label>
        <textarea
          {...register("newsStorySearchTerms")}
          type="text"
          className="textarea"
          placeholder="List the search terms (keywords) that are relevant to your project or brand."
        />
        <span className="text-red-500">
          {errors["newsStorySearchTerms"]?.message}
        </span>
      </div>
      <div className="form-control">
        <label>Quotes</label>
        <textarea
          {...register("newsStoryQuotes")}
          type="text"
          className="textarea"
          placeholder="Any quotes would you like us to include?"
        />
        <span className="text-red-500">
          {errors["newsStoryQuotes"]?.message}
        </span>
      </div>
      <div className="form-control">
        <label>Embed Youtube link</label>
        <input
          {...register("newsStoryYoutubeEmbedLink")}
          type="text"
          className="input"
          placeholder="https://www.youtube.com/watch?v=Yuj_wVhpV0Y"
        />
        <span className="text-red-500">
          {errors["newsStoryYoutubeEmbedLink"]?.message}
        </span>
      </div>
    </>
  );
};

const NewsStoryForm = ({ writingPackages, pageData }) => {
  const {
    register,
    formState: { isValid },
    setValue,
  } = useFormContext();

  const {
    uploadedDoc,
    uploadedImages,
    handleDocChange,
    handleImagesChange,
    handleImageRemove,
    handleDocRemove,
    gotoReview,
    activeCollapseSection,
    toggleActiveCollapseSection,
  } = useOrderFormContext();

  const handleImageRemoval = (image) => {
    handleImageRemove(image, (updatedImages) => {
      setValue("newsStoryImages", updatedImages);
    });
  };

  const handleDocRemoval = (doc) => {
    handleDocRemove(() => {
      setValue("newsStoryDoc", {});
    });
  };

  return (
    <div
      tabIndex={0}
      className={`bg-white border rounded-lg collapse collapse-arrow border-slate-200 ${
        activeCollapseSection === collapseSection.newsStory
          ? "collapse-open"
          : "collapse-close"
      }`}
    >
      <div
        onClick={() => {
          toggleActiveCollapseSection(collapseSection.newsStory);
        }}
        className="text-xl font-medium collapse-title"
      >
        News Story{" "}
        <span className="text-base font-normal text-gray-400">(Optional) </span>
      </div>
      <div className="collapse-content">
        <p>{pageData.newsStoryDescription}</p>
        <div>
          <OptionalFormControls writingPackages={writingPackages} />

          <div className="form-control">
            <label>Upload your Doc (Optional)</label>
            <div className="file-upload" type="button">
              {uploadedDoc && uploadedDoc.name ? (
                <div className="relative z-50 h-[80%] w-64 shadow-lg flex items-center justify-center rounded-lg p-4">
                  {uploadedDoc.name}
                  <Icon
                    icon="heroicons:x-mark"
                    height={24}
                    className="absolute top-0 right-0 text-white bg-red-500 rounded-full cursor-pointer"
                    onClick={handleDocRemoval}
                  />
                </div>
              ) : (
                <>
                  <Icon
                    icon="ion:image-outline"
                    height={44}
                    className="text-gray-300"
                  />

                  <strong className="text-xl text-gray-900 ">
                    Drop your news story here or click to upload
                  </strong>
                  <span className="text-sm text-gray-400">
                    (Use Microsoft Word DOCX for best compatibility)
                  </span>
                </>
              )}
              <input
                type="file"
                accept=".doc, .pdf, .docx"
                {...register("newsStoryDoc")}
                className="doc"
                onChange={handleDocChange}
              />
            </div>

            <small className="mt-2 text-base text-right text-gray-400 ">
              Allowed file type: .doc, .pdf and .docx
            </small>
          </div>
          <div className="form-control">
            <label>Upload your Images(Optional - Max 10)</label>
            <div className="file-upload" type="button">
              {uploadedImages.length ? (
                <div className="z-50 flex flex-wrap items-center gap-3">
                  {uploadedImages.map((image) => (
                    <div
                      key={`${image.name}- ${new Date().toString()}`}
                      className="relative w-40 h-40"
                    >
                      <Image
                        src={createImageUrl(image)}
                        alt={image.name}
                        fill
                      />
                      <Icon
                        icon="heroicons:x-mark"
                        height={24}
                        className="absolute top-0 right-0 text-white bg-red-500 rounded-full cursor-pointer"
                        onClick={() => handleImageRemoval(image)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <Icon
                    icon="ion:image-outline"
                    height={44}
                    className="text-gray-300"
                  />

                  <strong className="text-xl text-gray-900 ">
                    Drop images here or click to upload
                  </strong>
                  <span className="text-gray-400">
                    Otherwise our writers will use images from your website or
                    stock sources. Minimum width of 600 pixels is recommended.
                  </span>
                </>
              )}
              <input
                multiple
                type="file"
                accept=".png, .jpeg"
                {...register("newsStoryImages")}
                className="doc"
                onChange={handleImagesChange}
              />
            </div>

            <small className="mt-2 text-base text-right text-gray-400 ">
              Allowed file type: .png, .jpeg
            </small>
          </div>
          <span>
            The story will go live within <strong>3 business days</strong> of
            receiving payment.
          </span>
          <div className="mt-6 text-right ">
            <button
              disabled={!isValid}
              type="button"
              onClick={gotoReview}
              className="btn btn-primary disabled:text-white"
            >
              Review Order
              <Icon icon="heroicons:arrow-long-right" height={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsStoryForm;
