export interface FaqItem {
    question: string
    answer: string
  }
  
  export interface FaqCategory {
    category: string
    icon: string
    items: FaqItem[]
  }
  
  export const faqData: FaqCategory[] = [
    {
      category: "Buying",
      icon: "shopping-cart",
      items: [
        {
          question: "How do I purchase an item?",
          answer:
            "To purchase an item, simply navigate to the product page, click the 'Add to Cart' button, and proceed to checkout. You can pay using various payment methods including credit/debit cards, PayPal, or store credit.",
        },
        {
          question: "Can I make an offer on an item?",
          answer:
            "Yes, on many items you can make an offer to the seller. Look for the 'Make an Offer' button on the product page. The seller can then accept, decline, or counter your offer.",
        },
        {
          question: "How can I be sure the item is as described?",
          answer:
            "All sellers are required to provide accurate descriptions and photos of their items. Additionally, our platform has a buyer protection policy. If an item arrives significantly different from its description, you can initiate a return or request a refund.",
        },
        {
          question: "What if the item I receive is damaged or not as described?",
          answer:
            "If you receive an item that is damaged or significantly different from its description, you can report the issue within 48 hours of delivery. Go to your order history, select the problematic order, and click 'Report a Problem'.",
        },
        {
          question: "Can I cancel my order?",
          answer:
            "You can cancel an order before it has been shipped. Once the seller has marked the item as shipped, you'll need to contact the seller directly to arrange a return if you no longer want the item.",
        },
      ],
    },
    {
      category: "Selling",
      icon: "tag",
      items: [
        {
          question: "How do I list an item for sale?",
          answer:
            "To list an item, click on the 'Sell' button in the navigation bar, then fill out the listing form with details about your item including title, description, condition, price, and photos. Once submitted, your listing will be reviewed and published.",
        },
        {
          question: "What fees are associated with selling?",
          answer:
            "We charge a 10% commission on the final sale price of your item. There are no listing fees or monthly subscription fees. The commission is automatically deducted when the sale is completed.",
        },
        {
          question: "How do I price my items?",
          answer:
            "We recommend researching similar items on our platform to get an idea of market value. Consider factors like the item's condition, original retail price, age, and demand. You can also use our 'Price Suggestion' tool for guidance.",
        },
        {
          question: "How do I ship items to buyers?",
          answer:
            "After a sale, you'll receive the buyer's shipping information. You can choose to use our integrated shipping labels (with discounted rates) or arrange shipping on your own. Be sure to add tracking information to the order and ship within the timeframe specified in your listing.",
        },
        {
          question: "When do I get paid for my sales?",
          answer:
            "Payments are processed 3 days after delivery confirmation or 7 days after shipping (if no delivery confirmation is available). This waiting period helps ensure buyer satisfaction. Funds are then transferred to your connected bank account or available as store credit.",
        },
      ],
    },
    {
      category: "Payments",
      icon: "credit-card",
      items: [
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and store credit. Payment options may vary by region.",
        },
        {
          question: "Is it safe to use my credit card on your platform?",
          answer:
            "Yes, all payment information is encrypted using industry-standard SSL technology. We never store your full credit card details on our servers. Our payment processing is PCI DSS compliant for maximum security.",
        },
        {
          question: "Can I use multiple payment methods for a single purchase?",
          answer:
            "Currently, we only support using one payment method per transaction. However, you can use store credit in combination with another payment method.",
        },
        {
          question: "When am I charged for my purchase?",
          answer:
            "Your payment method is authorized when you place an order but you're only charged when the seller confirms and ships your item. If a seller cannot fulfill your order, the authorization is released.",
        },
        {
          question: "Do you offer installment payment options?",
          answer:
            "Yes, we partner with services like Affirm, Klarna, and Afterpay to offer installment payment options on eligible purchases over $50. These options will be displayed at checkout if available.",
        },
      ],
    },
    {
      category: "Shipping",
      icon: "truck",
      items: [
        {
          question: "How much does shipping cost?",
          answer:
            "Shipping costs vary based on the item's size, weight, and your location. Each listing displays the estimated shipping cost before you checkout. Some sellers offer free shipping or local pickup options.",
        },
        {
          question: "How long will it take to receive my order?",
          answer:
            "Delivery times depend on the seller's processing time (typically 1-3 business days) and the shipping method selected. Standard shipping usually takes 3-7 business days after processing. Expedited options may be available at checkout.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we support international shipping to most countries. International shipping costs and delivery times will be calculated at checkout. Please note that you may be responsible for import duties and taxes for international orders.",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes, once your order ships, you'll receive a confirmation email with tracking information. You can also view tracking details in your order history on your account dashboard.",
        },
        {
          question: "What if my package is lost or stolen?",
          answer:
            "If your tracking information shows the package was delivered but you haven't received it, please check with neighbors and your local delivery office. If you believe the package was stolen, contact our support team within 48 hours of the delivery date.",
        },
      ],
    },
    {
      category: "Account & Security",
      icon: "shield",
      items: [
        {
          question: "How do I create an account?",
          answer:
            "Click the 'Sign Up' button in the top right corner of the homepage. You can register using your email address, or through Google, Facebook, or Apple accounts. Follow the prompts to complete your profile setup.",
        },
        {
          question: "How can I reset my password?",
          answer:
            "Click on 'Login', then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you a password reset link. For security reasons, this link expires after 24 hours.",
        },
        {
          question: "How is my personal information protected?",
          answer:
            "We use industry-standard encryption and security measures to protect your data. We never share your personal information with third parties without your consent. For more details, please review our Privacy Policy.",
        },
        {
          question: "Can I have multiple accounts?",
          answer:
            "Our terms of service allow one account per person. Multiple accounts may be flagged and suspended. If you need to manage both personal and business sales, please contact our support team for assistance.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "To delete your account, go to Account Settings, scroll to the bottom, and click 'Delete Account'. Note that this action is permanent and will remove all your data, including listing history and reviews.",
        },
      ],
    },
  ]
  
  