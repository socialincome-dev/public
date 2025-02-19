import { buildCollection, buildProperties } from "@camberi/firecms";
import { NewsletterSubscribers } from "./interface";

export const newsletterSubscribersCollection = buildCollection<NewsletterSubscribers>({
  path: "newsletter-subscribers",
  group: "Contributors",
  textSearchEnabled: false,
  name: "Newsletter Subscribers",
  icon: "AlternateEmail",
  description: "Lists all current and past newsletter subscibers",
  permissions: ({ authController }) => ({
    edit: true,
    create: true,
    delete: true,
  }),
  properties: buildProperties<NewsletterSubscribers>({
    mc_status: {
      dataType: "string",
      name: "Mailchimp Status",
      enumValues: {
        subscribed: "subscribed",
        cleaned: "cleaned",
        unsubscribed: "unsubscribed",
      },
    },
    email: {
      dataType: "string",
      name: "Email",
    },
    si_status: {
      dataType: "string",
      name: "Contributor Status",
      enumValues: {
        active: "active",
        canceled: "canceled",
        potential: "potential",
      },
    },
    fname: {
      dataType: "string",
      name: "First Name",
    },
    lname: {
      dataType: "string",
      name: "Last Name",
    },
    gender: {
      dataType: "string",
      name: "Gender",
    },
    language: {
      dataType: "string",
      name: "Language",
    },
    country: {
      dataType: "string",
      name: "Country",
    },
    currency: {
      dataType: "string",
      name: "Currency",
    },
  }),
});
