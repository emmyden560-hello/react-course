import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/startupcard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 120,
    author: { _id: 1 },
    _id: '1',
    description: 'connecting startups with investors.',
    image: 'https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHxAf&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHxAf&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHxAf&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHxAf&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHxAf&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHxA',
    category: 'Robots',
    title: 'We Robot'
  }];
  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch Your Startup, <br />Connect With Entrepreneurs
        </h1>

        <p className="sub-heading max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : 'Discover Startups'}
        </p>

        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="text-center text-lg">No startups found.</p>
          )}
        </ul>
      </section>
    </>
  )
}