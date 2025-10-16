import { getStrapiMedia } from '@/utils/media';
import AccountForm from './AccountForm';
import BrandDetailForm from './BrandDetailForm';
import NewsStoryForm from './NewsStoryForm';
import PublishingNetworks from './PublishingNetworks';
import WritingPackageAndUpgrades from './WritingPackageAndUpgrades';

const OrderForm = ({
  writingPackages,
  writingUpgrades,
  publishingNetworks,
  newsOutlets,
  pageData,
}) => {
  const logoUrl = getStrapiMedia(pageData.logo?.src);
  const logoAlt = pageData.logo?.alt;

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Account */}

      <div>
        <AccountForm />
      </div>
      {/* publishing network */}
      <div>
        <PublishingNetworks
          publishingNetworks={publishingNetworks}
          newsOutlets={newsOutlets}
          pageData={pageData}
        />
      </div>

      {/* writing package */}
      <div>
        <WritingPackageAndUpgrades
          writingPackages={writingPackages}
          writingUpgrades={writingUpgrades}
          pageData={pageData}
        />
      </div>

      {/* brand details */}
      <div>
        <BrandDetailForm pageData={pageData} />
      </div>

      {/* news story */}
      <div>
        <NewsStoryForm writingPackages={writingPackages} pageData={pageData} />
      </div>
    </div>
  );
};

export default OrderForm;
