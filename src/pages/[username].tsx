import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import type { LinkType, Links } from "../server/router/links"; 

import Link from "../components/Link";
import EditButton from "../components/EditButton";
import NewLinkButton from "../components/NewLinkButton";

const Links: NextPage = () => {
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();
  const username = router.asPath.slice(1).charAt(0).toUpperCase() + router.asPath.slice(2);
  const links = trpc.useQuery(["links.getLinksFromUserId", {userId: "1"}]);

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
            {links.data?.map((link) => {
              return (
                <Link 
                  key={link.id}
                  id={link.id}
                  userId={link.userId}
                  text={link.text}
                  url={link.url}
                  icon={link.icon}
                  textColor={link.textColor}
                  font={link.font}
                  bgColor={link.bgColor}
                  editMode={editMode} 
                />
              )
            })}
            <NewLinkButton />
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex flex-col items-center justify-center p-4">
          <h1 className="text-5xl font-semibold pt-24">{username} Links</h1>
          <div className="py-8">
            {links.data?.map((link) => {
              return (
                <Link 
                  key={link.id}
                  id={link.id}
                  userId={link.userId}
                  text={link.text}
                  url={link.url}
                  icon={link.icon}
                  textColor={link.textColor}
                  font={link.font}
                  bgColor={link.bgColor}
                  editMode={editMode}
                />
              )
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
