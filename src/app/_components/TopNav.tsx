import Link from "next/link";

export default function TopNav() {
	return (
		<nav className="w-full h-full flex justify-around items-center text-lg font-semibold py-2">
			<Link href="/" prefetch={true}>
				<button>Home</button>
			</Link>
			<Link href="/special_sessions" prefetch={true}>
				<button>Special Sessions</button>
			</Link>
			<button>Travel and Visa</button>
		</nav>
	);
}
