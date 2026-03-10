import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { generateOgImage } from "../utils/generateOgImage";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function getStaticPaths() {
    const posts = await getCollection('blog');

    // Base static pages
    const staticPages = [
        { params: { route: 'og' }, props: { title: SITE_TITLE, subtitle: SITE_DESCRIPTION } },
        { params: { route: 'about' }, props: { title: 'About', subtitle: SITE_TITLE } },
        { params: { route: 'projects' }, props: { title: 'Projects', subtitle: SITE_TITLE } },
        { params: { route: 'publications' }, props: { title: 'Publications', subtitle: SITE_TITLE } },
        { params: { route: 'team' }, props: { title: 'Team', subtitle: SITE_TITLE } },
        { params: { route: 'blog' }, props: { title: 'Blog', subtitle: SITE_TITLE } },
    ];

    // Dynamic blog posts
    const blogPages = posts.map((post) => ({
        params: { route: `blog/${post.id}` },
        props: { title: post.data.title, subtitle: 'Blog Post' },
    }));

    return [...staticPages, ...blogPages];
}

export const GET: APIRoute = async ({ props }) =>
    new Response(await generateOgImage(props.title as string, props.subtitle as string), {
        headers: { "Content-Type": "image/png" },
    });
