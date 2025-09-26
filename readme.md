# AlgoBot

AlgoBot is an **AI-powered learning companion** focused on Data Structures and Algorithms (DSA). It provides interactive explanations, coding solutions, and step-by-step guidance for students and enthusiasts looking to master DSA concepts.

## Features

- **Conversational AI Instructor**: Ask questions about algorithms, data structures, complexity analysis, and coding problems.
- **Quick Start Topics**: Instantly learn about arrays, linked lists, stacks, queues, sorting, searching, hashing, and more.
- **Interactive Chat UI**: Modern web interface for seamless interaction.
- **AI Model**: Powered by Google Gemini AI (`gemini-2.5-flash`), tailored for DSA education.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- Google Gemini API Key ([Get yours here](https://ai.google.dev/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ashwan1-yadav/AlgoBot.git
   cd AlgoBot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory.
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_google_gemini_api_key
     ```

4. **Run the application**
   ```bash
   npm start
   ```
   The server will start on [http://localhost:3000](http://localhost:3000) (or the port you set in `.env`).

### Usage

- Open your browser and go to `http://localhost:3000`.
- Type your questions or select a topic to begin learning.
- Example queries:
  - "Explain quicksort with time complexity"
  - "What is a stack and where is it used?"
  - "Compare arrays and linked lists"
  - "Show me a sample coding problem for binary search"

## Project Structure

- `/views/chat.ejs` – Main chat UI (EJS template)
- `/llm_gemini.js` – Gemini AI integration and backend logic
- `/public/` – Static assets (CSS, JS, images)

## Technologies Used

- Node.js & Express.js
- EJS (Embedded JavaScript Templates)
- Google GenAI (Gemini)
- Modern CSS (Responsive, gold-themed UI)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project does not yet specify a license. Please contact the owner for usage details.

## Author

Made with ❤️ by [Ashwan1-yadav](https://github.com/Ashwan1-yadav)

---

*Start your DSA journey now with AlgoBot!*