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
    <main className="relative overflow-hidden mb-20 md:mb-0">
      <Nav />
      <SliceZone slices={page.data.slices} components={components} />
      <Toaster />
      <footer className="h-20 bg-slate-950 flex flex-col justify-center items-center text-slate-100 font-lexend">
        <p>© 2024 Danila Mandrabura. All rights reserved.</p>
        <p className="text-slate-300">danilamandrabura@gmail.com</p>
      </footer>
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
