"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { chatbotResponses } from "@/lib/data"

interface Message {
  text: string
  isBot: boolean
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm here to help you with questions about Roby Café. Ask me about our hours, menu, location, or anything else!",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()

    for (const response of chatbotResponses) {
      if (response.keywords.some(keyword => lowerInput.includes(keyword))) {
        return response.response
      }
    }

    return "I'd love to help! Try asking about our hours, menu, location, waffles, croffles, or visit us in-store for more information!"
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")

    setTimeout(() => {
      const botMessage: Message = {
        text: findResponse(input),
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-tomato-9 text-white rounded-full p-4 shadow-2xl hover:bg-tomato-10 transition-colors"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md bg-sand-1 rounded-2xl shadow-2xl border border-sand-6 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-tomato-9 text-white p-4">
              <h3 className="font-display font-bold text-lg">Chat with Roby Café</h3>
              <p className="text-sm text-tomato-2">We're here to help!</p>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-sand-2">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? "bg-white text-sand-12 border border-sand-6"
                        : "bg-tomato-9 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-sand-1 border-t border-sand-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask us anything..."
                  className="flex-1 px-4 py-2 rounded-full border border-sand-6 bg-white text-sand-12 placeholder:text-sand-9 focus:outline-none focus:ring-2 focus:ring-tomato-8"
                />
                <button
                  onClick={handleSend}
                  className="bg-tomato-9 text-white rounded-full p-2 hover:bg-tomato-10 transition-colors disabled:opacity-50"
                  disabled={!input.trim()}
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
