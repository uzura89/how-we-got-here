# AI Prompts Used in "How We Got Here"

This document outlines the prompts used to generate and refine the content for our AI-generated human history timeline. We use multiple prompts to ensure a comprehensive and accurate representation of historical events.

## 1. Event Overview Generation

This prompt is used to generate an initial overview of historical events for a given time period.

```
Please list up important events in human history from 10,000 B.C.E. to the last century.
Plese select the events that are significant and interesting to all people around the world.
The output format should be a yaml format like below:

Timeline:
  - from: -10,000
    to: -4,001
    events:
      - title: "Invention of Agriculture" // 5 events for each group (10 for the last century)

Divide them into groups of centuries like this:
10000 B.C.E. ~ 4001 B.C.E.
4000 B.C.E. ~ 3001 B.C.E
3000 B.C.E. ~ 2001 B.C.E.
2000 B.C.E. ~ 1201 B.C.E.
12th century B.C.E
11th century B.C.E
10th century B.C.E
...
the last century
```

## 2. Event Comparison and Extraction

This prompt is used to compare overviews from different AI models and extract the most prominent events.

```

```

## 3. Detailed Information Addition

This prompt is used to add more detailed information to each event, including a longer description and a potential Wikipedia link.

```

```

## 4. Wikipedia Comparison (Review Process)

This prompt is used to compare the AI-generated event description with the content from the suggested Wikipedia page.

```

```

## 5. Image Generation

This prompt is used to generate an image representing the historical event.

```

```
