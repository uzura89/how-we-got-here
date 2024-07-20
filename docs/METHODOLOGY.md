# Methodology of "How We Got Here"

This document outlines the methodology used in our project to create an AI-generated timeline of human history. Our approach combines the power of multiple AI models with Wikipedia references and community involvement to produce a comprehensive and evolving historical resource.

## Overview

Our methodology consists of five main steps:

1. Event Generation
2. Event Refinement
3. Detail Addition
4. Wikipedia Comparison
5. Image Generation

## Detailed Process

### 1. Event Generation

- We use three AI models: GPT-4, Claude 3.5 Sonnet, and Gemini.
- Each model is prompted to generate a list of significant historical events for a specific time period.
- The time periods are typically divided into centuries or smaller ranges for more recent history.

### 2. Event Refinement

- The outputs from the three AI models are compared and synthesized.
- An AI model (typically Claude 3.5 Sonnet) is used to identify the most significant and commonly mentioned events across the three lists.
- A refined list of 5-10 key events for each time period is created.

### 3. Detail Addition

- For each event in the refined list, we prompt an AI model to provide:
  - A more detailed description (50-75 words)
  - A suggested relevant Wikipedia page title

### 4. Wikipedia Comparison

- The AI-generated description is compared with the content from the suggested Wikipedia page.
- This comparison involves:
  - Identifying discrepancies
  - Noting additional important information from Wikipedia
  - Suggesting corrections or additions to the AI-generated description
  - Manual modification to the content based on the suggestion

### 5. Image Generation

- Using DALL-E 3, we generate an image to represent each historical event.
- The image generation is based on the event description and aims to capture the essence of the event while maintaining historical accuracy.

## Continuous Improvement

Our methodology includes a feedback loop for continuous improvement:

1. Community members can report inaccuracies or suggest improvements.
2. Regular reviews of the content are conducted, incorporating new information and corrections.
3. AI prompts and methodologies are refined based on the results and feedback.

## Data Storage and Presentation

- All generated content, including events, descriptions, and image references, is stored in a structured format (e.g., YAML).
- The website dynamically renders this content to create the interactive timeline.

## Limitations

- While we use Wikipedia as a reference, it may itself contain inaccuracies or biases.
- AI models, despite their capabilities, can make mistakes or have gaps in knowledge.
- Historical interpretations can vary, and our content may not represent all perspectives.

We encourage users to approach the information critically and to consult multiple sources for important historical facts.

## Future Developments

We are continuously exploring ways to improve our methodology, including:

- Incorporating more diverse AI models and historical sources
- Enhancing the review process with expert historians
- Developing more sophisticated methods for cross-referencing and fact-checking

By combining AI generation, Wikipedia comparison, and community involvement, we aim to create a reliable, comprehensive, and continually improving historical resource.
