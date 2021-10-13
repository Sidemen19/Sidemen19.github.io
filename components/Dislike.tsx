export default function Dislike({ dislike }: { dislike: string }) {
	return (
		<div className="p-2 mt-3 mr-2 rounded-md text-dislike-text bg-dislike-bg dark:bg-dislike-dbg dark:text-dislike-dtext">
			{dislike}
		</div>
	);
}
