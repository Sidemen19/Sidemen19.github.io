import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/Container';
import useSWR from 'swr';
import { statusCodes } from '../data/statuses';
import fetcher from 'lib/fetcher';

export default function NotFound() {
	const { data } = useSWR<{ status: keyof typeof statusCodes }>('/api/status', fetcher);

	return (
		<Container title="404 - Lav">
			<div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
				<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
					404
				</h1>
				<p className="mb-8 text-gray-600 dark:text-gray-400">
					This page doesn&apos;t exist. You&apos;ve either followed a link to a page that has since been deleted or misspelled the URL.
					Is the spelling 💯?
				</p>

				<Link href="/">
					<a className="w-40 p-1 mb-8 font-bold text-center text-black bg-gray-200 rounded-md sm:p-4 dark:bg-gray-600 dark:text-white">
						Go back home
					</a>
				</Link>

				<p className="mb-8 text-gray-600 dark:text-gray-400">
					For your entertainment, here&apos;s a random HTTP catus code.
				</p>
				<Image
					alt={`Image for HTTP status code ${data?.status || 404}`}
					src={`https://http.cat/${data?.status || 404}.jpg`}
					width={732}
					height={586}
				/>
			</div>
		</Container>
	);
}