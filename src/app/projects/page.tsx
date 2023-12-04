import { RepositoryCard } from "~/components/RepositoryCard";
import { UnderConstructionWarn } from "~/components/UnderConstructionWarn";
import { getGithubProfile, getPinnedRepos } from "~/utils/requests";

async function ProjectsPage() {
  const userProfile = await getGithubProfile();
  const pinnedRepositories = await getPinnedRepos(userProfile.repos_url);

  return (
    <div className="min-height mx-auto flex max-w-5xl flex-col items-center">
      <h1 className="py-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
        What I&apos;m building!
      </h1>
      <p className="px-10 pb-3 text-gray-700 dark:text-gray-300">
        Here, you gonna find web development with Javascript, Typescript,
        React/Nextjs and Java. Some shells script plugins. Maybe in the future
        some game development just for fun.
      </p>
      <div className="grid grid-cols-1 gap-4 px-10 md:grid-cols-2">
        {pinnedRepositories.map((repo) => {
          return (
            <RepositoryCard key={repo.id} repo={repo} cardType="complete" />
          );
        })}
      </div>
      <UnderConstructionWarn />
    </div>
  );
}

export default ProjectsPage;
