import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/toaster";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <main className="relative">
      <Nav />
      <SliceZone slices={page.data.slices} components={components} />
      <Toaster />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
