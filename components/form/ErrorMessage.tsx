interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return <p className="mt-1 text-sm text-red-600">{message}</p>;
}
