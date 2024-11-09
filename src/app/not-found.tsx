"use client";
import Link from "next/link";
import React from "react";

export default function error() {
	return (
		<div className="h-full flex flex-col gap-4 justify-center items-center">
			<h1>404 Error: Page Not Found...</h1>
			<p className="text-xl">
				It seems like you've accidently entered a url that doesn't exist...
			</p>
			<Link href="/">
				<p className="bg-black text-white p-4 rounded-xl">Go Back Home</p>
			</Link>
		</div>
	);
}
