# MockWise

**MockWise** is an AI-powered mock interview platform that helps job seekers practice and ace their interviews with real-time voice conversations and instant, detailed feedback.

## What is MockWise?

MockWise uses advanced AI technology to simulate realistic job interviews across various roles and experience levels. The platform provides:

- **AI-Generated Interview Questions**: Customized questions based on your target role, experience level, and tech stack
- **Real-Time Voice Interviews**: Natural conversation flow with an AI interviewer using voice interaction
- **Instant AI Feedback**: Comprehensive performance analysis with scores across multiple categories
- **Interview History**: Track your progress and review past interview performances

## Why Use MockWise?

### Key Features

🎯 **Personalized Interview Practice**
- Choose your role (Frontend Developer, Full Stack Developer, etc.)
- Select experience level (Junior, Mid-level, Senior)
- Customize tech stack focus areas
- Control interview type (Technical, Behavioral, or Mixed)

🗣️ **Voice-Powered AI Interviews**
- Real-time voice conversation with AI interviewer
- Natural language processing for seamless interaction
- Professional interview simulation experience

📊 **Detailed Performance Analytics**
- Overall score out of 100
- Category-specific scores:
  - Communication Skills
  - Technical Knowledge
  - Problem Solving
  - Cultural Fit
  - Confidence and Clarity
- Personalized strengths and areas for improvement
- Final assessment and recommendations

🔄 **Track Your Progress**
- View all past interviews
- Compare performance over time
- Identify improvement patterns

## Technology Stack

MockWise is built with modern technologies:

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **AI/ML**: 
  - Google Generative AI (Gemini 2.0)
  - Vapi.ai for voice interactions
  - Deepgram for transcription
  - ElevenLabs for voice synthesis
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun
- Firebase account
- Google Generative AI API key
- Vapi.ai account

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Firebase Admin SDK
FIREBASE_ADMIN_CREDENTIALS=your_firebase_admin_service_account_json

# Google Generative AI
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key

# Vapi.ai
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rahulhanje/MockWise.git
cd MockWise
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your environment variables (see above)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## How to Use

### 1. Sign Up / Sign In
Create an account or sign in to access the platform.

### 2. Generate an Interview
- Navigate to the "Start an Interview" section
- Specify your target role (e.g., "Frontend Developer")
- Choose your experience level
- Select the tech stack you want to focus on
- Pick the interview type (Technical, Behavioral, or Mixed)
- Set the number of questions

### 3. Take the Interview
- Click "Start Interview" to begin the voice conversation
- Speak naturally with the AI interviewer
- Answer questions as you would in a real interview
- The conversation is transcribed in real-time

### 4. Review Feedback
- After completing the interview, receive instant AI-generated feedback
- Review your scores across different categories
- Read personalized strengths and areas for improvement
- Use insights to prepare for your next interview

## Project Structure

```
MockWise/
├── app/                      # Next.js app directory
│   ├── (auth)/              # Authentication routes
│   │   ├── sign-in/         # Sign in page
│   │   ├── sign-up/         # Sign up page
│   │   └── forgotpassword/  # Password reset
│   ├── (root)/              # Main application routes
│   │   ├── interview/       # Interview pages
│   │   └── page.tsx         # Dashboard/home page
│   └── api/                 # API routes
│       ├── feedback/        # Feedback generation
│       └── vapi/            # Interview generation
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── Agent.tsx            # Voice AI agent component
│   ├── AuthForm.tsx         # Authentication forms
│   ├── InterviewCard.tsx    # Interview card display
│   └── ...
├── firebase/                # Firebase configuration
│   ├── admin.ts             # Firebase Admin SDK
│   └── client.ts            # Firebase client SDK
├── lib/                     # Utility functions and actions
│   └── actions/             # Server actions
├── types/                   # TypeScript type definitions
├── constants/               # App constants and configurations
└── public/                  # Static assets
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Support and Documentation

### Getting Help

- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/Rahulhanje/MockWise/issues)
- **Discussions**: Join conversations in [GitHub Discussions](https://github.com/Rahulhanje/MockWise/discussions)

### Related Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vapi.ai Documentation](https://docs.vapi.ai)
- [Google AI Documentation](https://ai.google.dev/docs)

## Contributing

We welcome contributions from the community! Whether it's:

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements

Please feel free to open issues and pull requests.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Maintainers

- **Rahul Hanje** - [@Rahulhanje](https://github.com/Rahulhanje)

## License

This project is private and proprietary.

---

**Built with ❤️ to help you ace your next interview!**
