const ImportantDates = () => {
	return (
		<div className="flex flex-col font-medium">
			<h1 className="py-4">Important Dates</h1>
			<table className="border-collapse w-full">
				<thead className="bg-gray-200">
					<tr>
						<th className="border p-2">Event</th>
						<th className="border p-2">Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border p-2">Last Dates of Paper submission</td>
						<td className="border p-2">20th June 2025</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">Paper Acceptance Notification</td>
						<td className="border p-2">20th July 2025</td>
					</tr>
					<tr>
						<td className="border p-2">
							Last date for receiving CRP and Author Registration
						</td>
						<td className="border p-2">10th August 2025</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">Conference Dates</td>
						<td className="border p-2">22nd-23rd August 2025</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ImportantDates;
