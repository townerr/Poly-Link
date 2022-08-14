import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import Link, { LinkProps } from "../components/Link";
import { useRouter } from "next/router";

const data: LinkProps[] = [
  {
    text: 'aaaaaaaa aaaaaaaa aaaaaaaaaaag aaaaaaaaaaaaaaa',
    url: 'https://twitter.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/124/124021.png',
    textColor: '#fff',
    font: 'Verdana',
    bgColor: '#000'
  },
  {
    text: 'Youtube',
    url: 'https://www.youtube.com/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png',
    textColor: '#fff',
    font: 'Verdana',
    bgColor: '#000'
  },
  {
    text: 'Discord',
    url: 'https://discord.com/',
    icon: 'https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png',
    textColor: '#fff',
    font: 'Verdana',
    bgColor: '#000'
  }
]

const Links: NextPage = () => {
  const router = useRouter();
  const username = router.asPath.slice(1).charAt(0).toUpperCase() + router.asPath.slice(2);

  return (
    <>
      <Head>
        <title>Poly Link</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-semibold pt-24">{username} Links</h1>
        <div className="py-8">
          {data.map((link) => {
            return (
              <Link text={link.text} url={link.url} icon={link.icon} textColor={link.textColor} font={link.font} bgColor={link.bgColor} />
            )
          })}
        </div>
      </main>
    </>
  );
};

export default Links;
