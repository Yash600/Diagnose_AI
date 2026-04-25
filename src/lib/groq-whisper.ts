import Groq from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

function msToTime(ms: number) {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}

export const processMeeting = async (meetingUrl: string) => {
    // Step 1: Download audio and transcribe
    const response = await fetch(meetingUrl)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const file = new File([buffer], 'meeting.mp3', { type: 'audio/mpeg' })

    console.log("Starting transcription...")
    
    const transcription = await groq.audio.transcriptions.create({
        file,
        model: 'whisper-large-v3',
        response_format: 'verbose_json',
        timestamp_granularities: ['segment']
    })

    console.log("Transcription done:", transcription.text.slice(0, 100))

    if (!transcription.text) throw new Error("No transcript found")

    // Step 2: Extract chapters/issues using LLM
    const summaryResponse = await groq.chat.completions.create({
        model: 'llama-3.1-8b-instant',
        messages: [{
            role: 'user',
            content: `You are an expert meeting analyst. Analyze this meeting transcript and extract 3-5 key topics, issues or action items discussed.

For each topic provide these exact fields:
- start: timestamp when topic started (format "MM:SS")
- end: timestamp when topic ended (format "MM:SS")  
- gist: one sentence summary (max 10 words)
- headline: short title (max 5 words)
- summary: detailed explanation (2-3 sentences)

Return ONLY a valid JSON array, no markdown, no explanation:
[
  {
    "start": "00:00",
    "end": "01:30",
    "gist": "one sentence summary",
    "headline": "short title",
    "summary": "detailed explanation"
  }
]

Transcript:
${transcription.text.slice(0, 6000)}`
        }]
    })

    const content = summaryResponse.choices[0]?.message?.content ?? '[]'
    console.log("LLM response:", content.slice(0, 200))

    try {
        const clean = content.replace(/```json|```/g, '').trim()
        const summaries = JSON.parse(clean)
        return { transcript: transcription.text, summaries }
    } catch (error) {
        console.error("Failed to parse summaries:", error)
        return { transcript: transcription.text, summaries: [] }
    }
}




