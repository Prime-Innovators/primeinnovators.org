import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/AboutPage";
import BlogIndexPage from "../pages/BlogIndexPage";
import BlogPostPage from "../pages/BlogPostPage";
import BlogTagPage from "../pages/BlogTagPage";
import COCPage from "../pages/COCPage";
import ContactPage from "../pages/ContactPage";
import FAQPage from "../pages/FAQPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";

async function getBlogSlugs() {
	const { getAllSlugs } = await import("../utils/blog-meta");
	return getAllSlugs();
}

async function getAllTags() {
	const { getAllTags: tags } = await import("../utils/blog-meta");
	return tags();
}

export const routes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, Component: HomePage },
			{ path: "about", Component: AboutPage },
			{ path: "faq", Component: FAQPage },
			{ path: "contact", Component: ContactPage },
			{ path: "privacy", Component: PrivacyPage },
			{ path: "terms", Component: TermsPage },
			{ path: "coc", Component: COCPage },
			{ path: "blog", Component: BlogIndexPage },
			{
				path: "blog/tag/:tag",
				Component: BlogTagPage,
				getStaticPaths: async () => {
					const tagList = await getAllTags();
					return tagList.map((tag) => `/blog/tag/${encodeURIComponent(tag)}`);
				},
			},
			{
				path: "blog/:slug",
				Component: BlogPostPage,
				getStaticPaths: async () => {
					const slugs = await getBlogSlugs();
					return slugs.map((slug) => `/blog/${slug}`);
				},
			},
			{ path: "*", Component: NotFoundPage },
		],
	},
];
