import { Head } from "$fresh/runtime.ts";
import IconArrowDown from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/arrow-down.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/mail.tsx";
import { Image } from "../components/Image.tsx";
import { enjoying } from "../data/enjoying.ts";
import CardSection from "../islands/CardSection.tsx";
import Footer from "../islands/Footer.tsx";

const renderEnjoyedObjects = () => {
  return enjoying.map((thing) => (
    <a class="rounded h-[320px] bg-gray-100" href={thing.link}>
      <div class="overflow-y-hidden max-h-[80%]">
        <Image
          file={thing.image}
          path="things"
          alt={thing.name}
        />
      </div>
      <div class="text-center text-lg p-2">
        <span class="pb-2">{thing.name}</span>
      </div>
    </a>
  ));
};

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
        <link href="css/base.css" rel="stylesheet" />
      </Head>

      <main class="bg-blue-800 min-h-screen">
        <section class="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center min-h-screen p-4">
          <div class="card md:max-w-[60vw] md:mr-4">
            <Image
              class="max-h-96"
              height="300"
              file="portrait.png"
              alt="That's me!"
            />
            <div class="bg-gray-100 p-4">
              <h1 class="text-2xl mb-3">Nico Salvador</h1>
              <h3>
                Goes 🇳🇱{" "}
                <span class="text-xs text-slate-300">(current)</span>
              </h3>
              <h3>Quezon City 🇵🇭</h3>
              <div class="link-icons mt-3">
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
          </div>
          <div class="card-text text-white mt-2 md:mt-0">
            <h1 class="text-2xl mb-3">Hi, I'm Nico.</h1>
            <p class="mb-2">
              I'm into all sorts of things. Maybe we can work on something
              together?
            </p>
            <p class="mb-3">
              I've always had a hard time picking what it is I'm most into over
              the course of my life. There are just so many awesome things out
              there in the world to be involved in, why just choose one? I
              believe that incredible things can come out of the most unlikely
              partnerships.
            </p>
            <h3 class="text-2xl">Let's get in touch!</h3>
            <IconArrowDown class="hvr-icon-hang mt-6" />
          </div>
        </section>

        <Image
          class="w-screen max-h-96 object-cover"
          file="clark.jpg"
          alt="Clark International Speedway at sunset"
        />

        <CardSection />

        <section class="flex flex-col p-6 items-center">
          <h1 class="text-2xl text-white">Things I'm Enjoying Lately</h1>
          <div class="grid sm:grid-cols-4 gap-4 p-6 max-w-screen-lg">
            {renderEnjoyedObjects()}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
