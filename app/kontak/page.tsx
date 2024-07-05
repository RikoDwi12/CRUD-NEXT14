import React, { Suspense } from "react";
import { CreateButton } from "@/components/button";
import { ContactTable } from "@/components/kontak-table";
import Search from "@/components/search";
import skeleton from "@/components/skeleton";

const Contacts = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className=" max max-w-screen-md mx-auto mt-5">
      <div className=" flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <Suspense fallback={skeleton()}>
        <ContactTable query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default Contacts;
