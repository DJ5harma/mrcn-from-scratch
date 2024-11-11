import Image from "next/image";

export default function IntroHeader() {
	return (
		<div
			className="relative flex flex-col items-center pt-4 font-semibold gap-4 text-white border-white"
			style={{
				backgroundImage: "linear-gradient(to top left, red, rgb(190, 0, 80))",
			}}
		>
			<div className="flex items-center gap-2 w-full justify-around">
				<a href="https://www.uietkuk.ac.in/">
					<Image
						src={"/images/logo.png"}
						alt="logo.png"
						width={80}
						height={80}
						className="lg:w-28"
					/>
				</a>
				<div className="flex flex-col items-center">
					<h2>6th International Conference on</h2>
					<h2 className="p-4 my-2 bg-white text-black">
						Mobile Radio Communication & 5G Networks - 2025
					</h2>
				</div>
				<a href="https://www.springer.com/">
					<Image
						src={"/images/springer_logo.png"}
						alt="springer logo"
						width={80}
						height={80}
						className="rounded-full lg:w-28"
					/>
				</a>
			</div>
			<h2 className="bg-gray-700 py-2 px-4">22nd-23rd August-2025</h2>
			<h2>U.I.E.T. - KUK</h2>
			<div className="flex flex-col gap-4 bg-red-700 p-4 w-full">
				<h3>
					Organised by: Department of Electronics & Communication Engineering,
				</h3>
				<h3>University Institute of Engineering & Technology</h3>
				<h3>
					(A constituent Autonomous Institute and Recognized by UGC under
					section 12(B) And 2(F))
				</h3>
				<h3>Kurukshetra University, Kurukshetra, Haryana</h3>
				<h3>(Established by the State Legislature Act XII of 1956)</h3>
			</div>
		</div>
	);
}
