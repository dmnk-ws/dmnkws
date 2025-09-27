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
  container,
  emailLink,
  field,
  footer,
  footerText,
  header,
  headerText,
  headerTitle,
  label,
  main,
  messageField,
  messageValue,
  value,
} from '@/components/email/styles';

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
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>New Contact Form Submission</Heading>
            <Text style={headerText}>
              You have received a new message through your website contact form.
            </Text>
          </Section>
          <Section style={field}>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
          </Section>
          <Section style={field}>
            <Text style={label}>Email</Text>
            <Text style={value}>
              <Link href={`mailto:${emailAddress}`} style={emailLink}>
                {emailAddress}
              </Link>
            </Text>
          </Section>
          <Section style={field}>
            <Text style={label}>Subject</Text>
            <Text style={value}>{subject}</Text>
          </Section>
          <Section style={messageField}>
            <Text style={label}>Message</Text>
            <Text style={messageValue}>
              {message.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < message.split('\n').length - 1 && <br />}
                </span>
              ))}
            </Text>
          </Section>
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
