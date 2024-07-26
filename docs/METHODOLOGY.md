# Methodology of "How We Got Here"

This document outlines the methodology used in our project to create an AI-generated timeline of human history.

## Overview

Our methodology consists of five main steps:

1. Event Generation
2. Detail Addition
3. Review
4. Image Generation

## Detailed Process

### 1. Event Generation

- We use one AI model (GPT-4) to generate important historical events.
- For this step, we only generate titles of each events.

### 2. Detail Addition

- For each event, we prompt an AI model (GPT-4) to provide:
  - A more detailed description (around 300 characters)
  - A suggested relevant Wikipedia page title
  - Approximate year of the events (index)

### 3. Review

- The generated events and descriptions are reviewed by multiple AI models (ClaudeAI and Gemini)
- This comparison involves:
  - Let AIs check the accuracy of the event's description and the time frame
  - If any false information is detected, the content will be fixed manually

### 4. Image Generation

- Using DALL-E 3, we generate an image to represent each historical event.
- The image generation is based on the event description and aims to capture the essence of the event.

## Continuous Improvement

Our methodology includes a feedback loop for continuous improvement:

1. Community members can report inaccuracies or suggest improvements.
2. Regular reviews of the content are conducted, incorporating new information and corrections.
3. AI prompts and methodologies are refined based on the results and feedback.

## Data Storage and Presentation

- All text content, including events, descriptions is stored in a structured format (YAML) [timeline.yaml](/src/data/timeline/timeline.yaml)
- All image content is stored in [img/event](/public/img/event)
- The website dynamically renders this content to create the interactive timeline.

## Limitations

- While we use Wikipedia as a reference, it may itself contain inaccuracies or biases.
- AI models, despite their capabilities, can make mistakes or have gaps in knowledge.
- Historical interpretations can vary, and our content may not represent all perspectives.

We encourage users to approach the information critically and to consult multiple sources for important historical facts.
