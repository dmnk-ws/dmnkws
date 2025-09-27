import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Link,
} from '@react-email/components';
import {
  CONTAINER,
  EMAIL_LINK,
  FIELD,
  FOOTER,
  FOOTER_TEXT,
  HEADER,
  HEADER_TEXT,
  HEADER_TITLE,
  LABEL,
  MAIN,
  MESSAGE_FIELD,
  MESSAGE_VALUE,
  VALUE,
} from '@/constants/email/styles';

export interface Email {
  name: string;
  emailAddress: string;
  subject: string;
  message: string;
}

export default function Template(email: Email) {
  const { name, emailAddress, subject, message } = email;

  return (
    <Html>
      <Head />
      <Body style={MAIN}>
        <Container style={CONTAINER}>
          <Section style={HEADER}>
            <Heading style={HEADER_TITLE}>New Contact Form Submission</Heading>
            <Text style={HEADER_TEXT}>
              You have received a new message through your website contact form.
            </Text>
          </Section>
          <Section style={FIELD}>
            <Text style={LABEL}>Name</Text>
            <Text style={VALUE}>{name}</Text>
          </Section>
          <Section style={FIELD}>
            <Text style={LABEL}>Email</Text>
            <Text style={VALUE}>
              <Link href={`mailto:${emailAddress}`} style={EMAIL_LINK}>
                {emailAddress}
              </Link>
            </Text>
          </Section>
          <Section style={FIELD}>
            <Text style={LABEL}>Subject</Text>
            <Text style={VALUE}>{subject}</Text>
          </Section>
          <Section style={MESSAGE_FIELD}>
            <Text style={LABEL}>Message</Text>
            <Text style={MESSAGE_VALUE}>
              {message.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < message.split('\n').length - 1 && <br />}
                </span>
              ))}
            </Text>
          </Section>
          <Section style={FOOTER}>
            <Text style={FOOTER_TEXT}>
              This email was sent from your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
