import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="text-center">
      <h3 class="font-bold text-3xl">{greeting}! Thank you for visiting! (island)</h3>
      <button class="bg-[#f59e0b] text-[#0d0d1d] font-bold text-xl px-4 py-2 rounded-md mt-4" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}