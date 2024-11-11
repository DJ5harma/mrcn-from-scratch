import Image from "next/image";

// about UIET, Kurukshetra University and MCRN 2025
export default function About3() {
	return (
		<>
			<div className="flex w-full py-4 gap-8 flex-col px-4 lg:flex-row border-white">
				<div className="m-auto">
					<Image
						src={"/images/uiet.jpeg"}
						width={1000}
						height={1000}
						alt="UIET"
						style={{ minWidth: "45vw" }}
					/>
				</div>
				<div className="flex flex-col gap-4 items-start [&>p]:text-justify sm:px-8">
					<h1>U.I.E.T. KUK</h1>
					<p>
						University Institute of Engineering & Technology (UIET) was
						established by Kurukshetra University in 2004 with objective to
						develop as a “Centre of Excellence” and offer quality technical
						education and to undertake research in Engineering & Technology.{" "}
					</p>
					<p>
						{" "}
						University campus offers excellent environment for the overall
						personality development of the students. Within a short span of
						time, UIET has earned 25th all India Rank in India Today Survey
						2016.
					</p>
					<p>
						The institute is also serving as a nodal agency for the matters of
						academic importance like, development of scheme of examination,
						syllabus, academic plan and maintenance of standards in affiliated
						Engineering colleges and is headed by Director, Prof. Sunil Dhingra.{" "}
					</p>
					<p>
						With the hard work and able guidance of the faculty members at UIET,
						these students are sure to become the world class Engineers and
						Technologists. The ultimate aim of the UIET is to become role model
						for Engineering & Technology Education not only for State of Haryana
						but for world over to meet the challenges of 21st century.
					</p>
					<p>
						UIET, KUK has successfully organized 06 International Conferences in
						last 3 years in association with Springer namely MRCN-2020,
						MRCN-2021, MRCN-2022, MCRN-2023, ETBS-2021, SCIS-2020.
					</p>
				</div>
			</div>
			<div className="flex w-full py-4 gap-8 flex-col-reverse px-4 lg:flex-row bg-gray-100">
				<div className="flex flex-col gap-4 items-start [&>p]:text-justify sm:px-8">
					<h1 className="w-full text-center">Kurukshetra University</h1>
					<p>
						Kurukshetra University is one of the premier educational
						institutions of India. Established in 1956, the University is
						providing higher education to over half a million students on the
						campus and its affiliated colleges. By virtue of its commitment to
						excellence, the University has been awarded A+Grade by NAAC and has
						been placed at 8th position amongst the State Universities of the
						country in Category-I by the Ministry of Human Resource Development
						(MHRD) and has also been granted academic autonomy.
					</p>
					<p>
						Kurukshetra University embodies the values of Yogastha Kuru Karmani,
						enshrined in Bhagwadgita, which means performing one’s activities
						while remaining steadfast in Yoga.
					</p>
					<p>
						{" "}
						University offers 175 courses on the campus in 47
						Departments/institutes through a highly qualified faculty. The
						University also plays an important role in providing higher
						education to the youth of the State through its 282 affiliated
						colleges and institutes in seven district of Haryana.
					</p>
				</div>
				<div className="m-auto">
					<Image
						src={"/images/kuk.jpg"}
						width={1000}
						height={1000}
						alt="UIET"
						style={{ minWidth: "45vw" }}
					/>
				</div>
			</div>
			<div className="flex w-full py-4 gap-8 px-4 items-center flex-col lg:flex-row">
				<div className="flex flex-col items-center w-full">
					<Image
						src={"/images/mrcn.jpeg"}
						width={1000}
						height={1000}
						alt="MRCN"
						className="pl-4 w-52 lg:w-2/3"
					/>
				</div>
				<div className="flex flex-col gap-4 items-start [&>p]:text-justify sm:px-8">
					<h1>MRCN 2025</h1>
					<p>
						The scope of the conference covers original works that are seen as a
						turning point in developing the quality human life/ performance in
						the future, therefore it has been identified as the theme of the
						conference.
					</p>
					<p>
						The aim of publishing the book is to serve for researchers,
						developers and educators working in the area of recent advances and
						upcoming technologies in the field of Cellular systems,
						2G/2.5G/3G/4G/5G and beyond, LTE, WiMAX, WMAN, and other emerging
						broadband wireless networks, WLAN, WPAN, and other home/personal
						networking technologies, Pervasive and wearable computing and
						networking, Small cells and femtocell networks, Wireless mesh
						networks, Vehicular wireless networks, Cognitive radio networks and
						their applications, Wireless multimedia networks, Green wireless
						networks, Standardization activities of emerging wireless
						technologies Power management and energy conservation techniques.
					</p>
					<p>
						As the book includes recent advances in research issues and
						applications, the contents will be beneficial to professors,
						research scholars, researchers, and engineers. This book will
						provide support and aid to the researchers involved in designing
						decision support systems that will permit the societal acceptance of
						ambient intelligence.
					</p>
					<p>
						{" "}
						The overall goal of this conference is to present the latest
						snapshot of the ongoing research as well as to shed further light on
						future directions in this space. Authors are invited to submit
						papers presenting novel technical studies as well as position and
						vision papers comprising hypothetical/speculative scenarios
					</p>
				</div>
			</div>
		</>
	);
}
