# Scribeo Frontend

The frontend of **Scribeo**, a user blog management platform, is built with React, Tailwind CSS, and Redux Toolkit. It allows users to interact seamlessly with the blog platform.

---

## Features

1. **Authentication**:
   - User login and registration.
   - Secure session management using Redux and JWT.

2. **Blog Management**:
   - Create, update, delete, and view blog posts.
   - Rich text editor for creating content using **React-Quill**.

3. **Image Handling**:
   - Upload images while creating posts.
   - Optimized for secure and efficient image handling.

4. **State Management**:
   - Centralized state management with **Redux Toolkit**.
   - Persistent state using **Redux-Persist**.

---

## Installation & Setup

### Prerequisites:
- Node.js 16+
- npm or Yarn

### Steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd scribeo-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Configure environment variables:
   Create a `.env` file in the root directory:
   ```env
   VITE_BASE_URL=http://127.0.0.1:8000/
   ```

---

## Dependencies

Refer to `package.json`:
- **React**: Core library for building user interfaces.
- **Tailwind CSS**: For styling.
- **Redux Toolkit**: Simplified state management.
- **React-Quill**: Rich text editor.
- **Axios**: For API communication.
- **Formik & Yup**: For form validation.

---

## Folder Structure

```
src/
├── assets/          # Static assets (e.g., images)
├── components/      # Reusable UI components
├── features/        # Feature-specific components
├── hooks/           # Custom React hooks
├── layouts/         # Page layouts (e.g., headers, footers)
├── lib/             # Utility functions
├── pages/           # Application pages (route components)
├── services/        # API calls and integrations
├── store/           # Redux store configuration
└── utils/           # Miscellaneous utilities
```

---

## Deployment

- **Development**: Local server with `npm start`.
- **Production**: Build the app using:
  ```bash
  npm run build
  ```
  Host the `build/` directory on any static server (e.g., Netlify, Vercel).

---

Both repositories are designed to work seamlessly together, ensuring a smooth development and user experience.