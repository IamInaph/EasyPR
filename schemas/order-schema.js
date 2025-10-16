import * as z from 'zod';
import { requiredValidation } from './common';

export const OrderFormSchema = z.object({
  fullName: requiredValidation('Full name'),
  emailAddress: requiredValidation('Email Address').email(
    'Email Address should be valid'
  ),
  writingPackage: requiredValidation('Writing Package'),
  writingUpgrades: z.any().optional(),
  publishingNetwork: requiredValidation('Publishing Network'),
  extraNewsOutlets: z.any().optional(),
  brandName: requiredValidation('Brand Name'),
  country: requiredValidation('Country'),
  websiteLinks: z
    .array(
      z.object({
        text: z.string(),
        href: z.string(),
      })
    )
    .min(1, 'Website Links must have at least one link'),
  representativeName: requiredValidation('Representative Name'),
  representativeEmail: requiredValidation('Representative Email'),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
  newsStoryTopicAndAngle: z.string().optional(),
  newsStoryDescription: z.string().optional(),
  newsStoryArticleGoal: z.string().optional(),
  newsStorySearchTerms: z.string().optional(),
  newsStoryQuotes: z.string().optional(),
  newsStoryYoutubeEmbedLink: z.string().optional(),
  newsStoryDoc: z.any().optional(),
  newsStoryImages: z.any().optional(),
});

export const CreateOrderSchema = z
  .object({
    paymentMethod: requiredValidation('Payment Method'),
  })
  .and(OrderFormSchema);
