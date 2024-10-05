# Horizon - Financial SaaS Platform

## 📋 Table of Contents
1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Future Improvements](#future-improvements)
5. [Quick Start](#quick-start)

## 🤖 Introduction
Horizon is a financial SaaS platform designed to streamline bank account management and enable users to monitor and manage their finances in a secure, efficient, and user-friendly environment. Horizon provides multiple features like secure bank linking, real-time transaction tracking, and fund transfers, all while maintaining a seamless and responsive user experience across all devices. It leverages modern frameworks and APIs such as Plaid and Dwolla to ensure security and reliability in financial operations.

## ⚙️ Tech Stack
- **Next.js** - Framework for server-side rendering and web app development.
- **TypeScript** - A strongly typed programming language for better development experience and error handling.
- **Appwrite** - Backend as a Service (BaaS) used for authentication and database management.
- **Plaid** - An API for securely linking and fetching data from bank accounts.
- **Dwolla** - An API for handling ACH payments and fund transfers.
- **React Hook Form** - A library for managing forms and input validation.
- **Zod** - A TypeScript-first schema declaration and validation library.
- **TailwindCSS** - Utility-first CSS framework for custom and responsive design.
- **Chart.js** - A powerful charting library used for data visualization.
- **ShadCN** - Component library for maintaining consistent UI design.

## 🔋 Features

### 👉 Authentication
Provides an ultra-secure server-side rendering (SSR) authentication with proper validations and authorization for user security.

### 👉 Connect Banks
Integrates with **Plaid** to enable users to securely link multiple bank accounts to the platform.

### 👉 Home Page
Shows a comprehensive overview of user accounts, including:
- Total balance from all connected banks
- Recent transactions
- Money spent on different categories (visualized using **Chart.js**)

### 👉 My Banks
Displays the complete list of all connected banks, showing the respective balances and account details.

### 👉 Transaction History
Includes pagination and filtering options, allowing users to easily view and filter the transaction history of different banks.

### 👉 Real-time Updates
Reflects changes across relevant pages whenever a user connects or updates bank accounts, ensuring the most up-to-date information.

### 👉 Funds Transfer
Enables users to transfer funds between accounts via **Dwolla**, requiring key details like recipient bank ID and transfer fields.

### 👉 Responsiveness
Ensures a seamless user experience across all device types, including desktops, tablets, and mobile devices, thanks to a fully responsive design using **TailwindCSS**.


## 🛠️ Future Improvements

Here are some potential future enhancements to improve functionality and user experience:

1. **Advanced Analytics and Spending Reports**  
   Provide more in-depth analytics, including category-based spending trends over time, to help users manage their finances better.

2. **Integration with Other Payment APIs**  
   Extend the platform to support additional payment APIs (e.g., Stripe or PayPal) for broader payment options.

3. **Automated Financial Notifications**  
   Notify users about important account activities such as low balance alerts, new transactions, or scheduled payments.

4. **User Customization for Dashboards**  
   Allow users to personalize their home dashboard by choosing which data visualizations or information they want to prioritize.

5. **Mobile App Version**  
   Develop a native mobile app to enhance accessibility and performance for users who prefer mobile over desktop web applications.


## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- **Git**
- **Node.js**
- **npm** (Node Package Manager)

### Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/Rohit61181/horizon.git
cd horizon
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

```plaintext
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](#Appwrite), [Plaid](#Plaid) and [Dwolla](#Dwolla)

### Running the Project

To run the project, use the following command:

```bash
npm run dev
```
