# MockWise 🎯

**Ace Your Interviews with AI-Powered Practice & Instant Feedback!**

MockWise is an intelligent interview preparation platform that helps job seekers practice for technical and behavioral interviews using AI-powered voice conversations. Get real-time feedback, improve your communication skills, and boost your confidence before the big day.

## ✨ Features

- **🎙️ AI Voice Interviews**: Practice with realistic AI-powered voice interviews that simulate real interview scenarios
- **📊 Instant Feedback**: Receive detailed performance analysis with scores across multiple categories:
  - Communication Skills
  - Technical Knowledge
  - Problem Solving
  - Cultural Fit
  - Confidence and Clarity
- **🎯 Custom Interview Generation**: Create personalized interview sessions based on:
  - Specific job roles
  - Experience level (Junior, Mid-level, Senior)
  - Technology stack
  - Interview type (Technical, Behavioral, Mixed)
- **📈 Interview History**: Track your progress over time with a complete history of past interviews
- **🔐 Secure Authentication**: Firebase-powered authentication for secure access to your interview data
- **💬 Real-time Transcription**: View conversation transcripts during and after your interviews
- **🎨 Modern UI**: Beautiful, responsive interface built with Tailwind CSS and shadcn/ui components

## 🛠️ Technology Stack

**Frontend:**
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

**Backend & Services:**
- [Firebase](https://firebase.google.com/) - Authentication and Firestore database
- [Vapi AI](https://vapi.ai/) - Voice AI integration for realistic interviews
- [Google Generative AI](https://ai.google.dev/) - AI-powered interview generation and feedback
- [Vercel AI SDK](https://sdk.vercel.ai/) - AI/ML integration utilities

**Development Tools:**
- ESLint - Code linting
- PostCSS - CSS processing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 20.x or higher)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

You'll also need accounts and API keys for:
- [Firebase](https://console.firebase.google.com/) - For authentication and database
- [Vapi AI](https://vapi.ai/) - For voice AI capabilities
- [Google AI](https://ai.google.dev/) - For generative AI features

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rahulhanje/MockWise.git
cd MockWise
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Vapi AI Configuration
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

# Google Generative AI
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key

# Firebase Admin SDK (for server-side)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
```

**Note:** The Firebase client configuration is already set up in `firebase/client.ts`. For production, consider moving these to environment variables as well.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 5. Build for Production

```bash
npm run build
npm run start
```

## 📖 Usage

### Creating an Interview

1. **Sign Up/Sign In**: Create an account or sign in to access the platform
2. **Start New Interview**: Click "Start an Interview" from the homepage
3. **Configure Interview**:
   - Enter the job role (e.g., "Frontend Developer")
   - Select experience level (Junior, Mid-level, Senior)
   - Choose interview type (Technical, Behavioral, Mixed)
   - Specify your technology stack
   - Set the number of questions
4. **Generate Interview**: Let the AI generate personalized interview questions
5. **Start Voice Interview**: Click the call button to begin your AI-powered voice interview
6. **Get Feedback**: After completing the interview, view your detailed performance analysis

### Example Interview Flow

```typescript
// Interview creation happens through the Agent component
// Questions are generated based on your specifications
{
  role: "Frontend Developer",
  level: "Junior",
  type: "Technical",
  techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  questions: [
    "What is React and why is it used?",
    "Explain the difference between props and state",
    // ... more questions
  ]
}
```

## 📁 Project Structure

```
MockWise/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages (sign-in, sign-up)
│   ├── (root)/            # Main application pages
│   │   ├── interview/     # Interview pages
│   │   │   ├── [id]/     # Individual interview detail
│   │   │   │   ├── feedback/  # Feedback page
│   │   │   └── page.tsx  # Interview generation page
│   │   └── page.tsx      # Home page
│   ├── api/              # API routes
│   │   ├── feedback/     # Feedback generation endpoint
│   │   └── vapi/         # Vapi AI integration
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── Agent.tsx        # Voice AI agent component
│   ├── AuthForm.tsx     # Authentication form
│   ├── InterviewCard.tsx # Interview card component
│   └── ...
├── constants/           # Application constants
├── firebase/           # Firebase configuration
│   ├── admin.ts       # Firebase Admin SDK
│   └── client.ts      # Firebase Client SDK
├── lib/               # Utility libraries
│   ├── actions/       # Server actions
│   └── utils.ts       # Utility functions
├── public/            # Static assets
├── types/             # TypeScript type definitions
└── package.json       # Project dependencies
```

## 🎨 Key Components

- **Agent**: Manages the voice AI interview experience using Vapi AI
- **InterviewCard**: Displays interview summaries on the dashboard
- **AuthForm**: Handles user authentication (sign-in/sign-up)
- **DisplayTechIcons**: Shows technology stack icons dynamically
- **InterviewSuggestion**: Provides AI-generated interview suggestions

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🤝 Contributing

We welcome contributions to MockWise! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## 📝 License

This project is private and not currently licensed for public use. Please contact the maintainers for more information.

## 👥 Maintainers

- **Rahul Hanje** - [@Rahulhanje](https://github.com/Rahulhanje)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Rahulhanje/MockWise/issues) page
2. Create a new issue with a detailed description
3. Reach out to the maintainers

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Vapi AI](https://vapi.ai/) for voice AI capabilities
- [Firebase](https://firebase.google.com/) for backend services
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Vercel](https://vercel.com/) for hosting and deployment

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vapi AI Documentation](https://docs.vapi.ai/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with ❤️ by the MockWise Team**
