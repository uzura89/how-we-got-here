import { Article, H1, H2, Li, P, Ul } from "@/components/common/ArticleUtils";
import Ahref from "@/components/common/buttons/Ahref";

export default function About() {
  return (
    <div className="border-t border-border pt-4 pb-7">
      <Article>
        <H1>About How We Got Here</H1>
        <P>
          "How We Got Here" is a captivating timeline of human historical
          events, offering an intriguing journey through time with engaging
          illustrations. Our project presents history in a way that sparks
          curiosity and encourages further exploration.
        </P>

        <H2>Our Mission</H2>
        <P>
          We aim to provide a sense of "connection" through the exploration of
          human history: connecting past to present, different cultures and
          societies, and individuals to the broader human experience. By
          presenting history in an accessible and visually appealing format, we
          hope to inspire curiosity and appreciation for the rich tapestry of
          human history.
        </P>

        <H2>Creation Process</H2>
        <P>
          The content for "How We Got Here" is created using advanced language
          models and image generation tools, primarily ChatGPT. The selection of
          events is unbiased and not influenced by any individual, including the
          developer. This method ensures a collective view of history, generated
          directly from a primary LLM (Large Language Model), rather than
          reflecting a single perspective from one person or a group of
          individuals.
        </P>

        <H2>Disclaimer</H2>
        <P>
          The events and illustrations presented are generated using AI tools
          and should be viewed as a starting point for historical exploration
          rather than definitive historical accounts. We encourage users to
          verify information through reputable historical sources.
        </P>

        <H2>Contact Us</H2>
        <P>
          For inquiries, feedback, or more information, please reach out to us:{" "}
          <br />
          Email: yuya.uzu@gmail.com <br />
          Twitter:{" "}
          <Ahref href="https://twitter.com/uzu1989" blank>
            @uzu1989
          </Ahref>
        </P>

        <P>
          We welcome your thoughts and suggestions as we continue to explore new
          ways of presenting and engaging with history.
        </P>
      </Article>
    </div>
  );
}
