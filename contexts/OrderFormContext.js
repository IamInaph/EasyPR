import { CreateOrderSchema, OrderFormSchema } from '@/schemas/order-schema';
import { createContext, useState } from 'react';

export const orderSteps = {
  orderForm: 'order',
  review: 'review',
  payment: 'payment',
};

export const collapseSection = {
  account: 'account',
  network: 'network',
  writing: 'writing',
  upgrades: 'upgrades',
  brand: 'brand',
  newsStory: 'newsStory',
}; 

export const schema = {
  withoutPayment: OrderFormSchema,
  withPayment: CreateOrderSchema,
};

export const OrderFormContext = createContext({
  country: {},
  setCountry: () => {},
  links: [],
  setLinks: () => {},
  uploadedDoc: {},
  uploadedImages: [],
  handleDocChange: () => {},
  handleImagesChange: () => {},
  handleImageRemove: () => {},
  handleDocRemove: () => {},
  activeSchema: OrderFormSchema,
  setActiveSchema: (schema) => {},
  activeStep: '',
  setActiveStep: (step) => {},
  activeCollapseSection: '',
  setActiveCollapseSection: (sectionId) => {},
  toggleActiveCollapseSection: (sectionId) => {},
  gotoOrderForm: () => {},
  gotoReview: () => {},
  gotoPayment: () => {},
  creatingOrder: false,
  setCreatingOrder: (creatingOrder) => {},
});

const OrderFormContextProvider = ({ children }) => {
  const [activeSchema, setActiveSchema] = useState(schema.withoutPayment);
  const [activeStep, setActiveStep] = useState(orderSteps.orderForm);
  const [links, setLinks] = useState([]);
  const [country, setCountry] = useState();
  const [activeCollapseSection, setActiveCollapseSection] = useState(
    collapseSection.account
  );
  const [uploadedDoc, setUploadedDoc] = useState({});
  const [uploadedImages, setUploadedImages] = useState([]);

  const [creatingOrder, setCreatingOrder] = useState(false);

  const handleDocChange = (event) => {
    const file = event.target.files[0];

    setUploadedDoc(file);
  };

  const handleImagesChange = (event) => {
    const files = event.target.files;

    if (files[0]?.name) {
      const uploadedFiles = [...files];

      if (uploadedFiles.length > 10) {
        alert('You can only upload 10 files');
      } else {
        setUploadedImages(uploadedFiles);
      }
    }
  };

  const handleDocRemove = (cb) => {
    setUploadedDoc({});
    cb();
  };

  const handleImageRemove = (image, cb) => {
    const filteredImages = uploadedImages.filter(
      (img) => img.name !== image.name
    );

    setUploadedImages(filteredImages);

    cb(filteredImages);
  };

  const toggleActiveCollapseSection = (sectionId) => {
    const activeSection = sectionId === activeCollapseSection;
    setActiveCollapseSection(activeSection ? null : sectionId);
  };

  const gotoOrderForm = () => {
    setActiveStep(orderSteps.orderForm);
    setActiveSchema(schema.withoutPayment);
  };

  const gotoReview = () => {
    setActiveStep(orderSteps.review);
    setActiveSchema(schema.withoutPayment);
  };

  const gotoPayment = () => {
    setActiveStep(orderSteps.payment);
    setActiveSchema(schema.withPayment);
  };

  return (
    <OrderFormContext.Provider
      value={{
        country,
        setCountry,
        links,
        setLinks,
        activeSchema,
        setActiveSchema,
        activeStep,
        setActiveStep,
        activeCollapseSection,
        setActiveCollapseSection,
        toggleActiveCollapseSection,
        gotoOrderForm,
        gotoReview,
        gotoPayment,
        uploadedDoc,
        uploadedImages,
        handleDocChange,
        handleImagesChange,
        handleImageRemove,
        handleDocRemove,
        creatingOrder,
        setCreatingOrder,
      }}
    >
      {children}
    </OrderFormContext.Provider>
  );
};

export default OrderFormContextProvider;
