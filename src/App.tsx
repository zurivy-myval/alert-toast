import { Alert } from '@/components/Alert/Alert';

export default function App() {
  return (
    <main className="app">
      <Alert title="Alert heading" moreLink="https://google.com">
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </Alert>
    </main>
  );
}