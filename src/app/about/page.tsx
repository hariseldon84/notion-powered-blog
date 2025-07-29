import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About me",
  description: "Learn about Anand Arora",
};

export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-3xl font-bold mb-6">About me</h1>
      
      <Card className="p-6 mb-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">
            I'm Anand Arora, and I have about 18 years of experience in building tech products and innovations. 
            I also founded an education technology company, scaling it to over 100,000 users with a focus on 
            monetization and profitability, achieving $1 million ARR and 20% profitability. Currently, I serve 
            as the Head of Products & Technology at Apeejay Group and Cadence Infotech, an IT company 
            specializing in education software.
          </p>
          
          <p className="mb-4">
            I am passionate about AI and its future impact on humanity. I enjoy writing about AI, technology, 
            science, new mental models, and literature. I'm also the author of the science fiction book, 
            "The Reboot: Nebula Chronicles" (link in menu).
          </p>
          
          <p className="mb-6">
            I hope you enjoy reading my thoughts.
          </p>
          
          <h2 className="text-xl font-bold mt-6 mb-4">Connect with me</h2>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="https://www.linkedin.com/in/aroraanand/" className="text-blue-500 hover:underline">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/decodewithanand/" className="text-blue-500 hover:underline">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@decodewithanand" className="text-blue-500 hover:underline">
                YouTube
              </Link>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
