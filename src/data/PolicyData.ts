export interface PolicySection {
    title: string
    content: {
      heading: string
      text: string | string[]
    }[]
  }
  
  export interface PolicyData {
    id: string
    title: string
    description: string
    sections: PolicySection[]
  }
  
  export const policyData: PolicyData[] = [
    {
      id: "terms",
      title: "Terms of Service",
      description: "The rules and guidelines for using our platform",
      sections: [
        {
          title: "Acceptance of Terms",
          content: [
            {
              heading: "Agreement to Terms",
              text: "By accessing or using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
            },
            {
              heading: "Eligibility",
              text: "You must be at least 18 years old to use our services. By using our platform, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into a binding agreement.",
            },
          ],
        },
        {
          title: "User Accounts",
          content: [
            {
              heading: "Account Creation",
              text: "To use certain features of our platform, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
            },
            {
              heading: "Account Security",
              text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.",
            },
            {
              heading: "Account Termination",
              text: "We reserve the right to suspend or terminate your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.",
            },
          ],
        },
        {
          title: "User Conduct",
          content: [
            {
              heading: "Prohibited Activities",
              text: [
                "You agree not to engage in any of the following prohibited activities:",
                "Violating any applicable laws or regulations",
                "Infringing on the intellectual property rights of others",
                "Posting or transmitting unauthorized commercial communications",
                "Uploading or transmitting viruses, malware, or other malicious code",
                "Collecting user information without their consent",
                "Impersonating another person or entity",
                "Interfering with the proper functioning of the platform",
              ],
            },
            {
              heading: "Content Guidelines",
              text: "You are solely responsible for the content you post on our platform. Content must not be illegal, deceptive, misleading, defamatory, obscene, or otherwise objectionable. We reserve the right to remove any content that violates these guidelines.",
            },
          ],
        },
        {
          title: "Intellectual Property",
          content: [
            {
              heading: "Platform Content",
              text: "Unless otherwise stated, we own or license all intellectual property rights in the platform and the material published on it. These works are protected by copyright laws and treaties around the world.",
            },
            {
              heading: "User Content",
              text: "By posting content on our platform, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, modify, publicly display, and distribute such content on our platform.",
            },
          ],
        },
        {
          title: "Limitation of Liability",
          content: [
            {
              heading: "Disclaimer of Warranties",
              text: "Our platform is provided 'as is' and 'as available' without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.",
            },
            {
              heading: "Limitation of Liability",
              text: "To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your use of our platform.",
            },
          ],
        },
        {
          title: "Changes to Terms",
          content: [
            {
              heading: "Modifications",
              text: "We reserve the right to modify these Terms of Service at any time. We will provide notice of significant changes by posting the updated terms on our platform with a new effective date. Your continued use of our platform after such changes constitutes your acceptance of the new terms.",
            },
          ],
        },
      ],
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      sections: [
        {
          title: "Information We Collect",
          content: [
            {
              heading: "Personal Information",
              text: "We collect personal information that you voluntarily provide to us when you register on our platform, express interest in obtaining information about us or our products, or otherwise contact us. This information may include your name, email address, postal address, phone number, and payment information.",
            },
            {
              heading: "Automatically Collected Information",
              text: "When you visit our platform, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse our platform, we collect information about the individual web pages that you view, what websites or search terms referred you to our platform, and information about how you interact with our platform.",
            },
          ],
        },
        {
          title: "How We Use Your Information",
          content: [
            {
              heading: "Provide and Maintain Our Platform",
              text: "We use the information we collect to provide, maintain, and improve our platform and to develop new services.",
            },
            {
              heading: "Process Transactions",
              text: "We use your information to process transactions and send you related information, including confirmations and receipts.",
            },
            {
              heading: "Send Administrative Information",
              text: "We may use your information to send you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.",
            },
            {
              heading: "Marketing and Promotional Communications",
              text: "With your consent, we may use your information for marketing purposes, such as sending you promotional emails about new products, special offers, or other information which we think you may find interesting.",
            },
          ],
        },
        {
          title: "Information Sharing",
          content: [
            {
              heading: "Third-Party Service Providers",
              text: "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.",
            },
            {
              heading: "Business Transfers",
              text: "If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.",
            },
            {
              heading: "Legal Requirements",
              text: "We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.",
            },
          ],
        },
        {
          title: "Data Security",
          content: [
            {
              heading: "Security Measures",
              text: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.",
            },
          ],
        },
        {
          title: "Your Rights",
          content: [
            {
              heading: "Access and Update",
              text: "You have the right to access and update the personal information we hold about you. You can do this by accessing your account settings.",
            },
            {
              heading: "Data Deletion",
              text: "You have the right to request that we delete your personal information. Please note that in some cases, we may be legally required to retain certain information.",
            },
            {
              heading: "Opt-Out",
              text: "You can opt-out of receiving marketing communications from us by following the unsubscribe instructions included in our marketing communications.",
            },
          ],
        },
        {
          title: "Cookies Policy",
          content: [
            {
              heading: "What Are Cookies",
              text: "Cookies are small pieces of text sent to your web browser by a website you visit. They help that website remember information about your visit, like your preferred language and other settings.",
            },
            {
              heading: "How We Use Cookies",
              text: "We use cookies for various purposes, including to understand and save user preferences, keep track of advertisements, and compile aggregate data about site traffic and site interaction.",
            },
            {
              heading: "Your Choices",
              text: "Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.",
            },
          ],
        },
      ],
    },
    {
      id: "refunds",
      title: "Refund & Return Policy",
      description: "Our policies for returns, refunds, and exchanges",
      sections: [
        {
          title: "Return Eligibility",
          content: [
            {
              heading: "Eligible Items",
              text: "Most items purchased on our platform can be returned within 14 days of delivery, provided they are in the same condition as when you received them. Certain categories of items, such as personalized goods, digital products, and intimate items, are not eligible for return due to health and hygiene reasons.",
            },
            {
              heading: "Condition of Returns",
              text: "Items must be returned in their original packaging, with all tags and labels attached, and in the same condition as when you received them. Items that are damaged, used, or missing parts may not be eligible for a full refund.",
            },
          ],
        },
        {
          title: "Return Process",
          content: [
            {
              heading: "Initiating a Return",
              text: "To initiate a return, go to your order history, select the order containing the item you wish to return, and follow the return instructions. You will need to specify the reason for the return and may be required to provide photos of the item.",
            },
            {
              heading: "Return Shipping",
              text: "You are responsible for the cost of return shipping unless the item was received damaged, defective, or if we sent you the wrong item. In these cases, we will provide a prepaid return shipping label.",
            },
            {
              heading: "Processing Time",
              text: "Once we receive your return, we will inspect the item and process your refund within 5-7 business days. You will receive an email notification when your refund has been processed.",
            },
          ],
        },
        {
          title: "Refund Policy",
          content: [
            {
              heading: "Refund Methods",
              text: "Refunds will be issued to the original payment method used for the purchase. If the original payment method is no longer available, we may issue the refund as store credit.",
            },
            {
              heading: "Partial Refunds",
              text: "We may issue partial refunds for items that are returned with signs of use, damage, or missing parts. The refund amount will be determined based on the condition of the returned item.",
            },
            {
              heading: "Refund Processing Time",
              text: "After your refund is processed, it may take an additional 5-10 business days for the funds to appear in your account, depending on your payment provider's policies.",
            },
          ],
        },
        {
          title: "Exchanges",
          content: [
            {
              heading: "Exchange Process",
              text: "If you wish to exchange an item for a different size, color, or variant, you can request an exchange instead of a return. The exchange process follows the same steps as the return process, but you will need to specify the item you want in exchange.",
            },
            {
              heading: "Availability",
              text: "Exchanges are subject to the availability of the requested item. If the item is not available, we will process a refund instead.",
            },
          ],
        },
        {
          title: "Damaged or Defective Items",
          content: [
            {
              heading: "Reporting Damage",
              text: "If you receive a damaged or defective item, please report it within 48 hours of delivery by contacting our customer support team with photos of the damage.",
            },
            {
              heading: "Resolution Options",
              text: "For damaged or defective items, we offer the following options: full refund, replacement (if available), or store credit with an additional 10% bonus.",
            },
          ],
        },
      ],
    },
    {
      id: "shipping",
      title: "Shipping Policy",
      description: "Information about shipping methods, times, and costs",
      sections: [
        {
          title: "Shipping Methods",
          content: [
            {
              heading: "Standard Shipping",
              text: "Standard shipping typically takes 3-7 business days for domestic orders and 10-20 business days for international orders. This is our most economical shipping option.",
            },
            {
              heading: "Expedited Shipping",
              text: "Expedited shipping typically takes 2-3 business days for domestic orders and 5-10 business days for international orders. This option is available at an additional cost.",
            },
            {
              heading: "Express Shipping",
              text: "Express shipping typically takes 1-2 business days for domestic orders and 3-5 business days for international orders. This is our fastest shipping option and is available at a premium cost.",
            },
          ],
        },
        {
          title: "Shipping Costs",
          content: [
            {
              heading: "Domestic Shipping",
              text: "Shipping costs for domestic orders are calculated based on the weight, dimensions, and destination of the package. Standard shipping starts at $4.99, expedited shipping starts at $9.99, and express shipping starts at $14.99.",
            },
            {
              heading: "International Shipping",
              text: "Shipping costs for international orders are calculated based on the weight, dimensions, destination, and shipping method. International shipping starts at $14.99 for standard shipping.",
            },
            {
              heading: "Free Shipping",
              text: "We offer free standard shipping on domestic orders over $50 and international orders over $100. Free shipping promotions may be available during special sales events.",
            },
          ],
        },
        {
          title: "Order Processing",
          content: [
            {
              heading: "Processing Time",
              text: "Orders are typically processed within 1-2 business days after payment confirmation. During high-volume periods, such as holidays or special promotions, processing times may be longer.",
            },
            {
              heading: "Shipping Confirmation",
              text: "You will receive a shipping confirmation email with tracking information once your order has been shipped. You can also track your order by logging into your account and viewing your order history.",
            },
          ],
        },
        {
          title: "International Shipping",
          content: [
            {
              heading: "Customs and Import Duties",
              text: "International orders may be subject to customs fees, import duties, taxes, or other charges imposed by the destination country. These fees are the responsibility of the recipient and are not included in the shipping cost.",
            },
            {
              heading: "Delivery Times",
              text: "International delivery times can vary significantly depending on the destination country, customs processing, and local postal service. The estimated delivery times provided are approximate and not guaranteed.",
            },
          ],
        },
        {
          title: "Shipping Restrictions",
          content: [
            {
              heading: "Restricted Locations",
              text: "We may not be able to ship to certain locations due to shipping carrier restrictions, international regulations, or other limitations. If we are unable to ship to your location, we will notify you and provide a refund.",
            },
            {
              heading: "Restricted Items",
              text: "Certain items may be restricted from shipping to specific locations due to local laws and regulations. If an item in your order cannot be shipped to your location, we will notify you and provide a refund for that item.",
            },
          ],
        },
        {
          title: "Delivery Issues",
          content: [
            {
              heading: "Lost or Delayed Packages",
              text: "If your package is lost or significantly delayed, please contact our customer support team with your order number and tracking information. We will work with the shipping carrier to locate your package or provide an appropriate resolution.",
            },
            {
              heading: "Incorrect Address",
              text: "If you provide an incorrect shipping address and the package is returned to us, you will be responsible for the cost of reshipping. If the package is not returned to us, we cannot provide a refund or replacement.",
            },
          ],
        },
      ],
    },
    {
      id: "seller",
      title: "Seller Guidelines",
      description: "Rules and best practices for selling on our platform",
      sections: [
        {
          title: "Seller Eligibility",
          content: [
            {
              heading: "Account Requirements",
              text: "To sell on our platform, you must have a verified account with a valid email address, phone number, and payment method. Depending on your location and the volume of sales, you may also be required to provide additional information for tax purposes.",
            },
            {
              heading: "Seller Performance Standards",
              text: "We expect sellers to maintain high standards of customer service, including prompt communication, accurate item descriptions, and timely shipping. Sellers who consistently fail to meet these standards may have their selling privileges restricted or revoked.",
            },
          ],
        },
        {
          title: "Listing Guidelines",
          content: [
            {
              heading: "Prohibited Items",
              text: [
                "The following items are prohibited from being listed on our platform:",
                "Illegal items or services",
                "Counterfeit or replica items",
                "Hazardous materials",
                "Recalled items",
                "Weapons and ammunition",
                "Adult content or services",
                "Prescription drugs or medical devices",
                "Personal information",
                "Items that infringe on intellectual property rights",
              ],
            },
            {
              heading: "Item Condition",
              text: "You must accurately describe the condition of your items using our condition categories: New, Like New, Very Good, Good, Acceptable, or For Parts/Not Working. Misrepresenting the condition of an item may result in returns, refunds, and potential account restrictions.",
            },
            {
              heading: "Listing Content",
              text: "Listings must include clear, accurate descriptions, high-quality photos from multiple angles, appropriate categorization, and reasonable pricing. Misleading titles, descriptions, or images are not permitted.",
            },
          ],
        },
        {
          title: "Pricing and Fees",
          content: [
            {
              heading: "Setting Prices",
              text: "You have full control over the pricing of your items, but prices must be reasonable and competitive. Artificially inflating prices to compensate for our fees is discouraged and may affect your sales performance.",
            },
            {
              heading: "Platform Fees",
              text: "We charge a commission of 10% on the final sale price (including shipping) for each successful transaction. This fee is automatically deducted from your payout. There are no listing fees or monthly subscription fees.",
            },
            {
              heading: "Payment Processing Fees",
              text: "Payment processing fees of 2.9% + $0.30 per transaction apply to all sales. These fees are in addition to the platform commission and are also deducted from your payout.",
            },
          ],
        },
        {
          title: "Shipping and Fulfillment",
          content: [
            {
              heading: "Shipping Options",
              text: "You can choose to use our integrated shipping labels with discounted rates or arrange shipping on your own. If you use our shipping labels, the cost will be deducted from your payout.",
            },
            {
              heading: "Shipping Timeframes",
              text: "You must ship items within the timeframe specified in your listing, typically within 1-3 business days after receiving payment. Failure to ship items on time may result in order cancellations and negative feedback.",
            },
            {
              heading: "Tracking Information",
              text: "You must provide valid tracking information for all shipments. This helps protect both you and the buyer by documenting the delivery process.",
            },
          ],
        },
        {
          title: "Customer Service",
          content: [
            {
              heading: "Communication",
              text: "You must respond to buyer inquiries within 24 hours. Prompt, professional communication is essential for maintaining a positive seller rating.",
            },
            {
              heading: "Returns and Refunds",
              text: "You must honor our platform's return and refund policies. If a buyer requests a return within the eligible timeframe and the item meets the return criteria, you must accept the return and process the refund promptly.",
            },
            {
              heading: "Dispute Resolution",
              text: "In case of disputes with buyers, we encourage you to work towards an amicable resolution. If a resolution cannot be reached, our support team will review the case and make a final decision based on our policies and the evidence provided.",
            },
          ],
        },
        {
          title: "Seller Protection",
          content: [
            {
              heading: "Fraud Prevention",
              text: "We have systems in place to detect and prevent fraudulent buyer activity. If you suspect a buyer is engaging in fraud, report it to our support team immediately.",
            },
            {
              heading: "Payment Guarantee",
              text: "When a sale is completed successfully and the buyer confirms receipt of the item in the described condition, we guarantee that you will receive your payment according to our payout schedule.",
            },
          ],
        },
      ],
    },
  ]
  
  