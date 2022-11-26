import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nico Salvador</title>
        <link rel="shortcut icon" type="image/png" href="https://res.cloudinary.com/salvadornico/image/upload/v1507347645/Portfolio/icon.png"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans" rel="stylesheet"></link>
      </Head>

      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
