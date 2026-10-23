// Add real articles here as you write them. Nothing below is "published" —
// each is a draft placeholder using topics you actually want to write about.
// Set `published: true` and a real `date` once an article is finished.

export const articles = [
  {
    slug: "what-happens-when-i-push-to-github",
    title: "What Actually Happens When I Push Code to GitHub?",
    excerpt:
      "A walk through the GitHub Actions pipeline that kicks off the moment a commit lands — build, test, and deploy steps, and what actually triggers each one.",
    category: "CI/CD & Deployment",
    date: "2026-08-08", // [CONFIRM/UPDATE DATE]
    tags: ["GitHub Actions", "CI/CD", "Deployment"],
    published: true,
    content: `When I run \`git push\`, the code leaving my machine is really just the first step in a much longer chain — and for a long time I didn't think much about what happened after that. Here's the version of that chain I actually rely on day to day.

The moment GitHub receives the push, it fires a webhook event. If the repo has a GitHub Actions workflow listening for that event — usually configured with an \`on: push\` trigger scoped to a branch like \`main\` — GitHub spins up a fresh, ephemeral virtual machine (a "runner") to execute it. Nothing persists between runs unless I explicitly cache it, which is intentional: it forces the build to be reproducible instead of quietly depending on whatever state was left on a machine from last time.

The workflow itself is just YAML, and it reads top to bottom as a series of jobs and steps. The first real step is almost always \`actions/checkout\`, which pulls the exact commit that triggered the run onto the runner. From there it's dependency installation — \`npm ci\` rather than \`npm install\`, because I want the exact versions from the lockfile, not whatever satisfies the range that day.

Then come the steps that actually decide whether the pipeline continues: linting, and any automated tests. This is the part that's saved me the most — catching a broken build before it ever reaches a server, instead of finding out from a 2 AM alert. If any step exits non-zero, the whole workflow stops there and nothing downstream runs.

Assuming everything passes, the build step compiles the production bundle — for a frontend that might be a Vite or webpack build; for a backend, it might mean building a Docker image and tagging it with the commit SHA so I always know exactly which build is running where.

The last stage is deployment, and this is the part that varies most depending on the project. Sometimes it's pushing the built image to a container registry and then SSHing into the target server to pull and restart it via Docker Compose. Sometimes it's syncing static build output to a host. Either way, by the time the workflow shows a green checkmark, the code isn't just "on GitHub" anymore — it's built, tested, and (depending on the branch) already running somewhere.

The part I had to unlearn was treating \`git push\` as the finish line. It's really the trigger for a pipeline that's doing most of the actual work.`,
  },
  {
    slug: "why-i-stopped-exposing-docker-ports-directly",
    title:
      "Why I Stopped Exposing Docker Container Ports Directly to the Internet",
    excerpt:
      "Why I moved from mapping container ports straight to the host to routing everything through Nginx instead — and what that changes about how a server gets attacked.",
    category: "Cloud & DevOps",
    date: "2026-08-08", // [CONFIRM/UPDATE DATE]
    tags: ["Docker", "Nginx", "Security"],
    published: true,
    content: `Early on, my Docker Compose files looked something like \`ports: ["3000:3000"]\` and I called it done. The app was reachable, the demo worked, and I moved on. It took running a few things in actual production to understand why that pattern doesn't hold up.

The core issue is that \`-p 3000:3000\` (or its Compose equivalent) binds the container's port directly to the host's network interface, bypassing anything I might assume is standing in front of it. There's no TLS termination happening at that layer, no centralized place to rate-limit or block bad traffic, and no single point where I can see every request hitting every service. If I'm running three or four containers this way, I've effectively opened three or four separate holes in the firewall instead of one.

Certificate management was the first practical pain point. Handling HTTPS inside every individual container — or worse, not handling it at all — doesn't scale past a single toy project. Once I put Nginx in front of everything as a reverse proxy, TLS termination happens in exactly one place, using Certbot for renewal, and every container behind it can stay on plain HTTP internally since that traffic never leaves the Docker network.

The second shift was moving containers onto an internal Docker network with no published ports at all, and letting Nginx be the only thing binding to the host's public interface. Nginx talks to each container by its service name over that internal network — Docker's built-in DNS resolves it — so nothing else needs to be reachable from outside the server at all. If a container has a vulnerability in some dependency, the blast radius is contained to that internal network rather than being directly internet-facing.

That setup also made two things easier that I didn't originally set out to solve: rate limiting and swapping backends without downtime. With Nginx as the single entry point, I can apply rate limits or IP blocks in one config file instead of reimplementing that logic (or not implementing it) in every service. And because Nginx just proxies to an upstream, I can bring up a new container version, point Nginx at it, and drop the old one — without ever closing the port the outside world is actually talking to.

None of this was really about a specific incident — it was realizing that "it's reachable" and "it's the way I want it exposed" aren't the same thing, and Docker's default port mapping optimizes for the first one.`,
  },
  {
    slug: "how-i-set-up-zero-downtime-deploys-with-docker-and-nginx",
    title: "How I Set Up Zero-Downtime Deploys with Docker and Nginx",
    excerpt:
      "The rollout pattern I use to bring a new container version online and swap Nginx's upstream to it, without ever dropping an in-flight request.",
    category: "Cloud & DevOps",
    date: "2026-08-08", // [CONFIRM/UPDATE DATE]
    tags: ["Docker", "Nginx", "CI/CD"],
    published: true,
    content: `Restarting a container to deploy a new version has an obvious problem: for however many seconds it takes the new process to boot, there's nothing listening, and any request that lands in that window just fails. For a demo, that's fine. For anything with real traffic, it isn't.

The pattern I use is simple in concept: never stop the old container until the new one has proven it's healthy, and never let Nginx send traffic to a container until it has. Concretely, that means bringing up the new version alongside the old one under a different container name or tag, running it against a health-check endpoint until it responds correctly, and only then updating the Nginx upstream config to point at the new container. Nginx gets reloaded — not restarted — with \`nginx -s reload\`, which drops in the new config without closing existing connections. Only after traffic has been flowing to the new container for a bit do I stop and remove the old one.

The health check matters more than it sounds like it should. Early on I skipped it and just assumed the container was ready once \`docker start\` returned — which isn't the same as the application inside actually being ready to serve requests, especially anything that needs to connect to a database or run migrations first. A dedicated \`/health\` route that only returns 200 once the app is genuinely serving traffic closes that gap.

The other piece is making sure in-flight requests to the old container aren't cut off mid-response. Because Nginx reload doesn't kill existing connections, requests that started against the old upstream finish there, while new requests go to the new one. That overlap window is short, but it's the difference between "nobody notices a deploy happened" and "a handful of users get a dropped connection."

This isn't a fully automated blue-green setup — I don't have a load balancer doing this for me, it's Nginx config and a couple of deploy-script steps wired into the GitHub Actions pipeline. But it gets the actual property I care about: I can ship a change in the middle of the day without warning anyone, and nobody notices.`,
  },
  {
    slug: "multi-tenant-database-design-lessons",
    title: "Multi-Tenant Database Design: Lessons from a Real SaaS Suite",
    excerpt:
      "What I'd do differently — and what held up — after building a multi-tenant school management platform serving several schools from one codebase.",
    category: "Backend & Architecture",
    date: "2026-08-08", // [CONFIRM/UPDATE DATE]
    tags: ["Multi-Tenancy", "MySQL", "System Design"],
    published: true,
    content: `The core decision in any multi-tenant system is where tenant isolation actually lives, and I went with the approach that's most common for this scale: a shared database with a \`tenant_id\` (or \`school_id\`) column on every tenant-owned table, rather than a separate database per tenant. It's cheaper to operate, easier to run migrations against once instead of N times, and simpler to reason about — as long as the isolation is enforced consistently.

That last part is where most of the actual risk lives. A shared-schema model means every single query that touches tenant data has to be scoped correctly, and it only takes one unscoped query — a forgotten \`WHERE tenant_id = ?\`, or a join that pulls in a table without checking it — to leak one school's data into another's response. The way I've made that harder to get wrong is pushing the scoping into a shared query layer rather than trusting every route handler to remember it. If fetching a resource always goes through a function that requires a tenant context, there's no code path where "just forgetting" is even possible.

Indexing looks different too. Every index that would normally just be on a lookup column needs \`tenant_id\` as the leading column instead, because almost every query is filtered by tenant first and then by whatever else. Getting that ordering wrong doesn't break correctness, but it does mean queries silently scan far more rows than they need to as a tenant's data grows.

Background jobs and scheduled tasks were the thing I underestimated. A cron job that generates end-of-term reports, for instance, naturally wants to iterate "all schools," and it's easy to write that loop in a way that does unbounded work per tenant with no isolation between failures — one school with a large dataset shouldn't be able to slow down or block processing for everyone else.

The tradeoff I'd flag honestly: shared-schema multi-tenancy makes a certain class of mistake catastrophic in a way single-tenant systems don't have to think about, and it puts real weight on tests that specifically check cross-tenant isolation, not just "does the feature work." That's the test suite I've ended up investing in the most as the number of schools has grown.`,
  },
  {
    slug: "setting-up-a-production-ubuntu-server-from-scratch",
    title: "Setting Up a Production Ubuntu Server From Scratch",
    excerpt:
      "The checklist I actually follow the first hour on a fresh Ubuntu box — users, firewall, Docker, and the handful of things I've learned not to skip.",
    category: "Cloud & DevOps",
    date: "2026-08-08", // [CONFIRM/UPDATE DATE]
    tags: ["Linux", "Server Administration", "AWS"],
    published: true,
    content: `Every fresh Ubuntu server — whether it's an AWS EC2 instance or anything else — starts from the same short checklist for me now, mostly built from things I skipped once and regretted.

First is getting off the root account. I create a new user with sudo privileges, copy my SSH public key into its \`~/.ssh/authorized_keys\`, confirm I can log in as that user, and only then disable root SSH login and password authentication entirely in \`sshd_config\`. Key-only auth for a non-root user closes off the most common way these boxes get probed.

Next is the firewall. UFW makes this fast: default-deny incoming, allow SSH, and only open the ports the server actually needs — 80 and 443 if it's going to run web traffic behind Nginx, nothing else. This matters more once Docker is in the picture, since Docker has a habit of rewriting iptables rules in ways that can quietly bypass UFW if you're not careful about how you publish container ports — another reason I route everything through an Nginx reverse proxy on the host instead of publishing container ports directly.

After that: system updates, unattended-upgrades for security patches, and \`fail2ban\` to auto-block IPs hammering SSH with failed login attempts. None of these are exciting, but they're the difference between a server that quietly handles background noise from the internet and one that doesn't.

Then comes the actual stack — Docker and Docker Compose, added to the non-root user's group so I'm not prefixing every command with \`sudo\`, and Nginx as the reverse proxy sitting in front of whatever containers come next, with Certbot for TLS. I also set up swap space on smaller instances, since a memory spike during a build or a bad deploy shouldn't be able to take the whole box down via the OOM killer.

The last step is monitoring basics — disk space and memory alerts, even something as simple as a cron job that checks \`df -h\` and pings me if usage crosses a threshold. Running out of disk space silently is one of the more embarrassing ways I've had something go down, and it's completely avoidable.

None of this is exotic. It's the boring, repeatable first hour that means the next six months on that server are boring too.`,
  },
];

export const getPublishedArticles = () => articles.filter((a) => a.published);
export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);
