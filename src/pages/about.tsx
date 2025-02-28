import { Article, H1, H2, Li, P, Ul } from "@/components/common/ArticleUtils";
import Ahref from "@/components/common/buttons/Ahref";
import HeadSetter from "@/components/common/HeadSetter";
import { CONS_IMG_PATH_OGP, CONS_APP_URL } from "@/constants/basic.cons";

export default function About() {
  return (
    <div className="border-t border-border pt-4 pb-7">
      <HeadSetter
        title="About Page | How We Got Here"
        description="Learn more about How We Got Here, an AI-generated world history timeline. Discover the creation process and features of our interactive timeline."
        image={CONS_IMG_PATH_OGP}
        url={CONS_APP_URL}
      />

      <Article>
        <H1>A World History Timeline</H1>
        <P>
          "How We Got Here" is an experimental world history timeline using
          AI-generated illustrations. This project explores new ways to present
          historical events through artificial intelligence. While we aim for an
          interesting overview of human civilization, it's important to note
          that this is primarily an experiment and should be complemented with
          established historical sources for a more comprehensive understanding.
        </P>

        <H2>Features</H2>
        <P>Our world history timeline is designed to:</P>
        <Ul>
          <Li>Provide a chronological overview of major historical events</Li>
          <Li>Connect past and present through visual storytelling</Li>
          <Li>
            Highlight the interconnectedness of global cultures and societies
          </Li>
          <Li>Inspire curiosity about different periods in world history</Li>
        </Ul>

        <H2>Creation Process</H2>
        <P>Our world history timeline is crafted using AI technologies:</P>
        <Ul>
          <Li>Events are created using GPT-4 by OpenAI</Li>
          <Li>Illustrations are generated using DALLE-3 by OpenAI</Li>
          <Li>
            The each events are reviewed by other AI models (Claude AI, etc.)
          </Li>
          <Li>The selection of events are not influenced by any indivisuals</Li>
        </Ul>

        <P>
          For a more detailed information about its technical aspects, please
          visit our{" "}
          <Ahref href="https://github.com/uzura89/how-we-got-here" blank>
            GitHub repository
          </Ahref>
        </P>

        <H2>Disclaimer</H2>
        <P>
          The events and illustrations presented are AI-generated and should not
          be considered definitive historical accounts. While our world history
          timeline serves as an excellent starting point for historical
          exploration, we encourage users to verify information through
          reputable historical sources.
        </P>

        <H2>Contact Us</H2>
        <P>
          We value your feedback on our world history timeline. Get in touch
          with us:
          <br />
          Email: yuya.uzu@gmail.com
          <br />
          Twitter:{" "}
          <Ahref href="https://twitter.com/uzu1989" blank>
            @uzu1989
          </Ahref>
        </P>
      </Article>
    </div>
  );
}
