import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Special Sessions - MRCN 2025",
	description: "Special Sessions at MRCN 2025 by UIET Kurukshetra and Springer",
};
export default function layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col gap-4 pt-4">
			<h1>List of Confirmed Special Sessions</h1>
			<p>
				Papers submitted for special sessions will be peer reviewed in the same
				way as submissions to the regular sessions.
			</p>
			{children}
		</div>
	);
}
