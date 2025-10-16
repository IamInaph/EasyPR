const { OrderFormContext } = require('@/contexts/OrderFormContext');
const { useContext } = require('react');

const useOrderFormContext = () => {
  const ctx = useContext(OrderFormContext);

  return {
    ...ctx,
  };
};

export default useOrderFormContext;
