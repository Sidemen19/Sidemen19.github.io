import Container from 'components/Container';
import BlogPost from 'components/BlogPost';

import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';

export default function Tag(
	{ posts, tag }: {
		posts: Blog[],
		tag: string
	}
) {
	const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);

	return (
		<Container
			title={`${tag} - Lav`}
			description={`See all posts filtered under the ${tag} tag.`}
		>
			<div className='flex flex-col justify-center items-start max-w-4xl mx-auto mb-16'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight'>
					{title}
				</h1>
				<h2 className='font-bold text-2xl md:text-4xl tracking-tight mt-6'>
					All posts
				</h2>
				<hr className='w-full border-1 border-gray-200 dark:border-gray-800 mt-4 mb-8' />
				{posts.map(post => (
					<BlogPost
						key={post.title}
						title={post.title}
						description={post.description}
						slug={post.slug}
						tags={post.tags}
					/>
				))}
			</div>
		</Container>
	);
}

interface Params {
	params: { tag: string }
}

export async function getStaticPaths() {
	const tags: string[] = [];
	allBlogs.forEach(post =>
		tags.push(...post.tags)
	);

	return {
		paths: [...new Set(tags)].map(tag => ({
			params: {
				tag: tag
			}
		})),
		fallback: false
	};
}

export async function getStaticProps({ params }: Params) {
	const filteredPosts = allBlogs.filter(
		post => post.tags.map(t => t.includes(params.tag))
	);

	return { props: { posts: filteredPosts, tag: params.tag } };
}
