import { Head } from "$fresh/runtime.ts";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/mail.tsx";
import { Image } from "../components/Image.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nico Salvador</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://res.cloudinary.com/salvadornico/image/upload/v1507347645/Portfolio/icon.png"
        >
        </link>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans"
          rel="stylesheet"
        >
        </link>
      </Head>

      <main className="bg-blue-800">
        <div class="p-4 mx-auto max-w-screen-md">
          <h1 class="text-2xl mb-3">Nico Salvador</h1>
          <h3>Mandaluyong, Philippines 🇵🇭</h3>
          <span class="text-xs text-slate-300">(current)</span>
          <h3>Quezon City, Philippines 🇵🇭</h3>
          <span class="text-xs text-slate-300">(from)</span>
          <div className="link-icons mt-3">
            <a class="inline-block" href={"mailto:salvador.nico@gmail.com"}>
              <IconMail class="w-6 h-6" />
            </a>
            <a class="inline-block" href="https://github.com/salvadornico">
              <IconBrandGithub class="w-6 h-6" />
            </a>
            <a
              class="inline-block"
              href="https://www.linkedin.com/in/salvadornico"
            >
              <IconBrandLinkedin class="w-6 h-6" />
            </a>
          </div>
        </div>
        <Image file="portrait.png" alt="That's me!" />
      </main>
    </>
  );
}
