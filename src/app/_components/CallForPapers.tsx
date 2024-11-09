import React from "react";

export default function CallForPapers() {
	return (
		<div className="flex flex-col items-center gap-4 py-4 bg-gray-50">
			<h1 className="max-w-fit bg-gray-200 p-3">Call For Papers</h1>
			<p>
				Authors are invited to submit their original, unpublished and quality
				research papers in the areas including but not limited to:
			</p>
			<div className="flex justify-between flex-wrap w-full font-medium px-4">
				<div>
					<li>Cellular systems,2G/2.5G/3G/4G/5G and beyond</li>
					<li>
						LTE,WiMAX,WMAN, and other emerging broadband wireless networks
					</li>
					<li>Small cell and femtocell networks</li>
					<li>Vehicular radio networks</li>
					<li>Cognitive radio networks</li>
					<li>Green wireless networks</li>
					<li>Standardization activities of Emerging Wireless Technology</li>
					<li>Artificial Intelligence</li>
					<li>RF Communication</li>
					<li>Optimization Techniques</li>
				</div>
				<div>
					<li>Software-defined wireless networks</li>
					<li>Power managment and energy conservation techniques</li>
					<li>Wireless edge computing, fog computing, and cloud computing</li>
					<li>
						Inter-networking of wireless heterogeneous and multi-tier networks
					</li>
					<li>Machine-to-machine communications</li>
					<li>Pervasive and wearable computing and networking</li>
					<li>Wireless Adhoc-Networks</li>
					<li>Signal Processing</li>
					<li>Electric Vehicles</li>
				</div>
			</div>
		</div>
	);
}
