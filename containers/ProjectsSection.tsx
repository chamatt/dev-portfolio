import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { Button } from "../components/Button";
import { IGithubRepo } from "../lib/githubRepos";

interface Props {
  title: string;
  subtitle: string;
  repos: IGithubRepo[];
}

const ProjectsSection: React.FC<Props> = ({ title, subtitle, repos }) => {
  return (
    <div className="bg-gray-0 py-10 sm:py-20">
      <Container as="section">
        <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
        <div className="py-10 sm:py-20">
          <div className="flex flex-col sm:flex-row grid grid-cols-12 col-gap-0 row-gap-8 sm:col-gap-8">
            {repos.map((repo, i) => {
              return (
                <div
                  key={repo.name}
                  className="col-span-12 sm:col-span-6 lg:col-span-4"
                  data-aos="fade-up"
                  data-aos-offset="50"
                  data-aos-easing="ease-out"
                  data-aos-delay={(i + 1) * 150}
                >
                  <ProjectCard repo={repo} />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end pt-10">
            <Button
              as="a"
              href={repos[0].owner.url}
              size="small"
              variant="secondary"
              className="h-16 px-8"
            >
              MORE PROJECTS
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
