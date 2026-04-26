# 🩺 Diagnose AI

> An intelligent AI-powered platform that helps developers understand codebases and analyze meetings through advanced RAG (Retrieval Augmented Generation) and audio transcription.

🌐 **Live Demo:** [diagnose-ai.vercel.app](https://diagnose-ai.vercel.app)

---

## 📖 Overview

Diagnose AI is a full-stack SaaS application that bridges the gap between developers and their codebases. Onboard onto any GitHub repository in minutes by asking natural language questions about the code, get AI-generated commit summaries, and analyze team meetings through intelligent transcription and issue extraction.

---

## ✨ Features

### 🔍 Codebase Intelligence
- **GitHub Repository Indexing** — Index any public GitHub repo with file-level summaries
- **Vector Embeddings** — Store code embeddings using pgvector for semantic search
- **Q&A System** — Ask natural language questions and get AI-generated answers with file references
- **Saved Questions** — Save important Q&A sessions for future reference

### 📝 Commit Analysis
- **Auto Commit Summarization** — AI analyzes commit diffs and generates human-readable summaries
- **Author Tracking** — See who made each commit with timestamps
- **GitHub Integration** — Direct links to original commits

### 🎙️ Meeting Analysis (Project-Scoped)
- **Audio Upload** — Upload meeting recordings (MP3, WAV, M4A) up to 50MB
- **Whisper Transcription** — Powered by Groq Whisper for fast, accurate transcription
- **Issue Extraction** — LLM extracts key topics, action items, and decisions with timestamps
- **Project-Linked** — Meetings are exclusive to projects, keeping discussions contextual to specific codebases

### 👥 Team Collaboration
- **Invite Members** — Generate shareable invite links for team projects
- **Multi-User Projects** — Multiple users can collaborate on the same project

### 💳 Credit System
- **Pay-Per-Use** — 1 credit = 1 file indexed
- **Razorpay Integration** — Secure Indian payment gateway with UPI/Card support
- **Credit Tracking** — Monitor credit usage and balance in real-time

---

## 🏗️ Architecture

The application follows a modern serverless architecture with type-safe communication between layers.

**Frontend Layer (Next.js 15 App Router)**
- Dashboard, Q&A, Meetings, Billing pages
- Server and Client components for optimal performance
- Real-time updates via TanStack Query

**API Layer (tRPC)**
- Type-safe procedures for all queries and mutations
- End-to-end type safety from server to client
- Protected procedures with Clerk authentication

**Data Layer**
- PostgreSQL (Neon) with pgvector extension for vector similarity search
- Prisma ORM for type-safe database access
- 384-dimensional embeddings for semantic search

**External Services**
- Groq for LLM inference and audio transcription
- HuggingFace for embedding generation
- Uploadthing for file storage
- Razorpay for payment processing

### Data Flow

**Repository Indexing:**
GitHub URL → Load Files → Filter Code Files → Summarize each file (Groq Llama) → Generate embedding (HF BGE) → Store in pgvector

**Q&A System:**
User Question → Generate query embedding → Vector similarity search (pgvector) → Top 10 relevant files → Build context → Generate answer (Groq Llama) → Display with file references

**Meeting Processing:**
Audio Upload (Uploadthing) → Save to DB → Transcribe (Groq Whisper) → Extract issues (Groq Llama) → Save issues to DB → Display on meeting detail page

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **State Management:** TanStack Query
- **Forms:** React Hook Form
- **Markdown:** react-md-editor

### Backend
- **API Layer:** tRPC
- **ORM:** Prisma
- **Database:** PostgreSQL (Neon) with pgvector
- **Authentication:** Clerk

### AI / ML
- **LLM:** Groq Cloud (Llama 3.1 8B Instant)
- **Audio Transcription:** Groq Whisper Large V3
- **Embeddings:** HuggingFace BGE Small EN v1.5 (384 dimensions)

### Storage & Infrastructure
- **File Storage:** Uploadthing
- **Hosting:** Vercel
- **Payments:** Razorpay

---

## 📊 Database Schema

The application uses a relational schema with the following key models:

- **User** — Authenticated users with credit balance
- **Project** — GitHub repositories linked to users
- **UserToProject** — Many-to-many relationship for team collaboration
- **SourceCodeEmbedding** — Vector embeddings (384 dim) of code files
- **Commit** — AI-summarized git commits
- **Question** — Saved Q&A sessions with file references
- **Meeting** — Audio meetings linked to a specific project
- **Issue** — Extracted topics from meetings with timestamps

**Relationships:**
- A User can have multiple Projects (via UserToProject)
- A Project has many Commits, SourceCodeEmbeddings, Questions, and Meetings
- A Meeting has many Issues
- Each Question belongs to a User and a Project

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL with pgvector extension (or Neon account)
- API keys for: Clerk, Groq, HuggingFace, Uploadthing, Razorpay, GitHub

### Installation

```bash
# Clone the repository
git clone https://github.com/yash600/diagnose_ai.git
cd diagnose_ai

# Install dependencies
npm install --legacy-peer-deps

# Setup environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/sync-user

# AI APIs
GROQ_API_KEY=
HUGGINGFACE_API_KEY=
GITHUB_TOKEN=

# File Storage
UPLOADTHING_TOKEN=

# Payments
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
NEXT_PUBLIC_RAZORPAY_KEY_ID=

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📱 Application Flow

### 1. User Onboarding
Users sign up via Clerk authentication. On first sign-in, a database record is automatically created via the sync-user route, and 150 free credits are allocated to get started.

### 2. Create Project
- Enter a GitHub URL and project name
- The system checks how many files the repo has
- User is prompted to confirm credit deduction
- Repository is indexed in the background with a real-time progress bar
- Commits are also fetched and summarized

### 3. Ask Questions
- Type a natural language question about the codebase
- Vector similarity search retrieves the top 10 most relevant files
- AI generates a contextual answer with file references
- Important Q&A sessions can be saved for future reference

### 4. Upload Meeting (Project-Specific)
**Important:** Meetings are exclusive to a specific project. This design choice ensures that meeting context is always relevant to the codebase being discussed.

The flow is:
- Select an active project
- Upload an audio file (MP3, WAV, M4A)
- File is uploaded to Uploadthing storage
- Background job transcribes audio with Groq Whisper
- LLM extracts key topics and action items
- Issues are saved with timestamps and shown on the meeting detail page

### 5. Buy Credits
- Use the slider to select credit amount
- Click buy to open Razorpay checkout
- Pay via UPI, Card, or Netbanking
- Credits are added instantly after payment verification

---

## 🎯 Key Design Decisions

### Why Groq over OpenAI?
- **Speed:** 10x faster inference times
- **Cost:** Generous free tier sufficient for development
- **Whisper Support:** Built-in audio transcription with the same API

### Why HuggingFace for Embeddings?
- **Free:** No cost for inference API on free tier
- **BGE Models:** Industry-leading embedding quality
- **384 dimensions:** Smaller storage footprint compared to OpenAI's 1536 dimensions

### Why Uploadthing over S3?
- **Next.js Native:** Built specifically for Next.js applications
- **Simpler Setup:** No AWS configuration needed
- **Generous Free Tier:** 2GB storage included

### Why Project-Scoped Meetings?
Meetings are tied to specific projects because:
- Different projects have different contexts and codebases
- Team members often work across multiple repositories
- Issues from meetings frequently reference specific code in that project
- Keeps Q&A context relevant to the project being discussed
- Prevents information overload from unrelated meetings

### Why tRPC over REST?
- **Type Safety:** End-to-end type safety from database to UI
- **Developer Experience:** Auto-completion for all API calls
- **No Code Generation:** Types are inferred automatically
- **Smaller Bundle:** No need for OpenAPI schemas or generated clients

---

## 🔮 Future Enhancements

- Real-time collaborative Q&A sessions
- Slack integration for direct meeting uploads
- Custom domain support for production Clerk instance
- Multi-language support for transcription
- Advanced commit analytics dashboard
- Meeting search across all projects
- Export meetings to PDF or Markdown
- Webhook integrations with Linear and Jira
- Larger repository support with chunked indexing
- Code change suggestions powered by AI

---

## 🐛 Known Limitations

- **File Limit:** 30 files per repository on free tier
- **Audio Size:** 50MB maximum per meeting upload
- **Rate Limits:** Groq has 6000 tokens-per-minute limit on free tier
- **Payment Region:** Razorpay test mode supports Indian payments only
- **Clerk Production:** Requires custom domain for production instance

---

## 📝 License

MIT License — Feel free to use this project for learning and portfolio purposes.

---

## 👨‍💻 Author

**Yash Vardhan Malik**
- Email: yash60066@gmail.com
- GitHub: [@yash600](https://github.com/yash600)

---

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) — Hosting platform
- [Neon](https://neon.tech) — Serverless PostgreSQL
- [Groq](https://groq.com) — Fast LLM inference
- [Clerk](https://clerk.com) — Authentication
- [shadcn/ui](https://ui.shadcn.com) — UI components
- [Uploadthing](https://uploadthing.com) — File storage
- [HuggingFace](https://huggingface.co) — Embedding models

---

⭐ If you found this project helpful, please give it a star on GitHub!
