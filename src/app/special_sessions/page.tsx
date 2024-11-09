export default function page() {
	return (
		<div className="flex flex-col font-medium px-4 pb-4 border-t-8">
			<h1 className="bg-gray-100 py-4">Special Sessions</h1>
			<table className="border-collapse w-full">
				<thead className="bg-gray-200">
					<tr>
						<th className="border p-2">Special Session ID</th>
						<th className="border p-2">Title / Organisers</th>
						<th className="border p-2">Brochure</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border p-2">1.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Smart Intelligent Computing in Emerging Sectors (SICES)"
							</p>
							<p className="author">
								Dr. Srikanta Kumar Mohapatra, Chitkara University Institute of
								Engineering & Technology, Chitkara University, Punjab, India
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session1.docx"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">2.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Innovations in Signal Processing, Advanced Communication and
								Computational Intelligence"
							</p>
							<p className="author">
								Dr. Rohit Anand, G.B. Pant DSEU Okhla-1 Campus, New Delhi, India
							</p>
							<p className="author">
								Dr. Nidhi Sindhwani, Amity University, Noida, Uttar Pradesh,
								India
							</p>
							<p className="author">
								Dr. (h.c.) Digvijay Pandey, IET, Dr. A.P.J. Abdul Kalam
								Technical University, Lucknow, India
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session2.docx"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr>
						<td className="border p-2">3.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Emerging Trends and Techniques for Intelligent Communication"
							</p>
							<p className="author">
								Dr. Sandhya Bansal, Maharishi Markandeshwar University, Mullana
								– Ambala (Haryana)
							</p>
							<p className="author">
								Er. Savita Wadhawan, MMICTBM, Maharishi Markandeshwar
								University, INDIA
							</p>
							<p className="author">
								Dr. Kavita Gupta, Chandigarh University, Gharuan (Mohali)
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session3.docx"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">4.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Recent Trends in Communication and Data Analysing Techniques
								for IoT"
							</p>
							<p className="author">
								Dr. Rohit Tanwar, School of Computer Science, UPES, Dehradun
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session4.docx"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr>
						<td className="border p-2">5.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Artificial Intelligence and Machine Learning Algorithms for
								Signal, Speech and Image Processing applications"
							</p>
							<p className="author">
								Prof. (Dr.) Raj Gaurang Tiwari, Chitkara University Institute of
								Engineering and Technology, Punjab, India
							</p>
							<p className="author">
								Dr. Ambuj Kumar Agarwal, Sharda University, Greater Noida, India
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session5.docx"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">6.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Computational Intelligent Techniques and Applications"
							</p>
							<p className="author">
								Dr. Shaveta Arora, The NorthCap University, Gurgaon, Haryana,
								India
							</p>
							<p className="author">
								Dr. Vikas Mittal, Chandigarh University, Mohali, India
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session6.docx"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr>
						<td className="border p-2">7.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Understanding the application of Markov chain, LSTM, and GAN
								for music generation"
							</p>
							<p className="author">
								Srinidhi K M, Nidhi Sindhwani, Amity University, Noida, India
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session7.pdf"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">8.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Credit Card Users Churn Prediction Using Ensemble Techniques"
							</p>
							<p className="author">
								Aishani Singh, Rashmi Vashisth, Nidhi Sindhwani, Amity
								University, Noida, India
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session8.pdf"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr>
						<td className="border p-2">9.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Study on Cybersecurity: Trending Challenges, Emerging Trends,
								and Threats"
							</p>
							<p className="author">
								Rabban Javed, Amity University, Noida, Uttar Pradesh, India
							</p>
							<p className="author">
								Dr. Rashmi Vashisht, Amity University, Noida, Uttar Pradesh,
								India
							</p>
							<p className="author">
								Nidhi Sindhwani, Amity University, Noida, Uttar Pradesh, India
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session9.pdf"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">10.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Advancement in Image Processing, Quantum Computing Principles
								and its Application"
							</p>
							<p className="author">
								Prof. Binay Kumar Pandey, Department of Information Technology,
								Govind Ballabh Pant University, Pantnagar, Uttarakhand, India
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session10.docx"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr>
						<td className="border p-2">11.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Emerging Smart Computing Technologies"
							</p>
							<p className="author">
								Session Chair Dr. Kamal Malik CT University, Ferozepur Road,
								Ludhiana, Punjab
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session11.docx"
								download
							>
								Download
							</a>
						</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">12.</td>
						<td className="border p-2">
							<p className="text-blue-700 font-bold">
								"Recent Trends and Techniques in Machine Learning, Deep Learning
								and Convolutional Neural Networks."
							</p>
							<p className="author">
								Session Chair Dr. Kamal Malik CT University, Ferozepur Road,
								Ludhiana, Punjab
							</p>
						</td>
						<td className="border p-2 cursor-pointer">
							<a
								className="bg-blue-500 text-white p-2 rounded-lg"
								href="/special_sessions/session12.docx"
								download
							>
								Download
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
