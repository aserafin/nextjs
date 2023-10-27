import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();
  const ipAddress = headersList.get('x-real-ip');

  return (
    <div>Real IP Address: { ipAddress }</div>
  )
}
