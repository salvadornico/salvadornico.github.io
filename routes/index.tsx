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
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans"
          rel="stylesheet"
        />
        <link
          href="css/base.css"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-blue-800">
        <div className="card w-3/5">
          <Image file="portrait.png" alt="That's me!" />
          <div className="bg-gray-100 p-4">
            <h1 className="text-2xl mb-3">Nico Salvador</h1>
            <h3>Mandaluyong, Philippines 🇵🇭</h3>
            <span className="text-xs text-slate-300">(current)</span>
            <h3>Quezon City, Philippines 🇵🇭</h3>
            <span className="text-xs text-slate-300">(from)</span>
            <div className="link-icons mt-3">
              <a
                className="inline-block"
                href={"mailto:salvador.nico@gmail.com"}
              >
                <IconMail className="w-6 h-6" />
              </a>
              <a
                className="inline-block"
                href="https://github.com/salvadornico"
              >
                <IconBrandGithub className="w-6 h-6" />
              </a>
              <a
                className="inline-block"
                href="https://www.linkedin.com/in/salvadornico"
              >
                <IconBrandLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
