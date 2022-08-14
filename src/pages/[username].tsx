import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";

import Link, { LinkProps } from "../components/Link";
import EditButton from "../components/EditButton";
import NewLinkButton from "../components/NewLinkButton";

const data: LinkProps[] = [
  {
    id: 1,
    text: 'aaaaaaaa aaaaaaaa aaaaaaaaaaag aaaaaaaaaaaaaaa',
    url: 'https://twitter.com/',
    icon: 'https://cdn-icons-png.flaticon.com/512/124/124021.png',
    textColor: '#fff',
    font: 'Verdana',
    bgColor: '#000'
  },
  {
    id: 2,
    text: 'Youtube',
    url: 'https://www.youtube.com/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png',
    textColor: '#fff',
    font: 'Verdana',
    bgColor: '#000'
  },
  {
    id: 3,
    text: 'Discord',
    url: 'https://discord.com/',
    icon: 'https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png',
    textColor: '#fff',
    font: 'Verdana',
    bgColor: '#000'
  }
]

const Links: NextPage = () => {
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();
  const username = router.asPath.slice(1).charAt(0).toUpperCase() + router.asPath.slice(2);
  //const userId = "1";
  //const links = trpc.useQuery(["links.getLinksFromUserId", {userId: userId}]);

  return (
    <>
      <Head>
        <title>Poly Link</title>
        <meta name="description" content="Poly Link User Linkes Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-right p-4">
        <EditButton editMode={editMode} setEditMode={setEditMode} />
      </div>

      {editMode ? (
        <div className="container mx-auto flex flex-col items-center justify-center p-4">
          <div>editing mode on</div>
          <h1 className="text-5xl font-semibold pt-24">{username} Links</h1>
          <div className="py-8">
            {data.map((link) => {
              return (
                <Link key={link.id} id={link.id} text={link.text} url={link.url} icon={link.icon} textColor={link.textColor} font={link.font} bgColor={link.bgColor} />
              )
            })}
            <NewLinkButton editMode={editMode} />
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex flex-col items-center justify-center p-4">
          <h1 className="text-5xl font-semibold pt-24">{username} Links</h1>
          <div className="py-8">
            {data.map((link) => {
              return (
                <Link key={link.id} id={link.id} text={link.text} url={link.url} icon={link.icon} textColor={link.textColor} font={link.font} bgColor={link.bgColor} />
              )
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
