import React from 'react'
import '../styles/docs.css';

const Documentation = () => {
  return (
    <div className="documentation-container">
  <h1>Documentation</h1>
  <nav>
    <ul>
      <li><a href="#getting-started">Getting Started</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#api-reference">API Reference</a></li>
      <li><a href="#faq">FAQ</a></li>
    </ul>
  </nav>
  <section id="getting-started">
    <h2>Getting Started</h2>
    <p>To get started with our application, you need to do the following:</p>
    <ol>
      <li>Sign up for an API key from OpenAI</li>
      <li>Install the necessary dependencies</li>
      <li>Run the application</li>
    </ol>
    <p>For more detailed instructions, please refer to our <a href="https://github.com/yourusername/yourrepo">GitHub repository</a>.</p>
  </section>
  <section id="features">
    <h2>Features</h2>
    <ul>
      <li>Real-time conversation with AI</li>
      <li>Clear conversation history</li>
      <li>Easy to use interface</li>
    </ul>
  </section>
  <section id="api-reference">
    <h2>API Reference</h2>
    <p>Our application uses the OpenAI API for generating answers. For more information on the API and its capabilities, please refer to the <a href="https://beta.openai.com/docs/api-reference/completions/create">OpenAI API documentation</a>.</p>
  </section>
  <section id="faq">
    <h2>FAQ</h2>
    <ul>
      <li>
        <p><strong>Q: Can I use this application for commercial purposes?</strong></p>
        <p>A: Yes, you can use this application for commercial purposes.</p>
      </li>
      <li>
        <p><strong>Q: Do I need to pay for using the OpenAI API?</strong></p>
        <p>A: Yes, you will need to pay for using the OpenAI API. Please refer to their pricing page for more information: <a href="https://beta.openai.com/pricing/">https://beta.openai.com/pricing/</a></p>
      </li>
    </ul>
  </section>
</div>

  )
}

export default Documentation