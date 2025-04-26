import MdxContent from '@/components/MdxContent';
import Header from '@/components/Header';

export default async function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <Header />
      <h1 className="mb-6 text-center text-4xl font-bold">AI Coding</h1>
      <div className="mx-auto max-w-3xl">
        <MdxContent
          filePath="coding.mdx"
          className="prose-headings:text-blue-700 prose-a:text-blue-600 prose-a:hover:text-blue-500 prose-img:rounded-xl prose-blockquote:border-l-blue-500"
        />
      </div>
    </main>
  );
}
