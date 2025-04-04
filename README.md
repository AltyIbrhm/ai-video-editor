# EditAI - AI-Powered Video Editor

EditAI is a modern web application that leverages artificial intelligence to help users edit and enhance their videos with ease.

## Project Structure

This is a monorepo using Turborepo with the following structure:

```
apps/
  ├── frontend/     # Next.js frontend application
  └── backend/      # Backend API service
packages/           # Shared packages and utilities
```

## Features

- 🔐 Secure authentication system with JWT
- 🎨 Modern, responsive UI built with Tailwind CSS
- 🏗️ Type-safe development with TypeScript
- 🚀 Fast development and build times with Turborepo
- 📱 Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-video-editor.git
   cd ai-video-editor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the frontend directory with the following variables:
   ```
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## Development

- `npm run dev` - Start all applications in development mode
- `npm run build` - Build all applications
- `npm run lint` - Run linting
- `npm run test` - Run tests

## Authentication Flow

The application implements a secure authentication system with the following features:

1. User registration with email verification
2. Secure login with JWT tokens
3. Password reset functionality
4. Protected routes and API endpoints
5. Automatic token refresh

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 