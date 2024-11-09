const RegistrationFees = () => {
	return (
		<div className="flex flex-col font-medium p-4">
			<h1 className="bg-gray-100 py-4">Registration Fees</h1>
			<table className="border-collapse w-full">
				<thead className="bg-black text-white">
					<tr>
						<th className="border p-2">Individual</th>
						<th className="border p-2">Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border p-2">Indian Author (Academician)</td>
						<td className="border p-2">Rs.4500</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">Industry Author</td>
						<td className="border p-2">Rs.4000</td>
					</tr>
					<tr>
						<td className="border p-2">
							Student Author(Student/Research Scholar)
						</td>
						<td className="border p-2">Rs.4000</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">Foreign Authors</td>
						<td className="border p-2">$100</td>
					</tr>
					<tr>
						<td className="border p-2">Indian Participant/Attendee</td>
						<td className="border p-2">Rs.1000</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">Foreign Participant/Attendee</td>
						<td className="border p-2">$50</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default RegistrationFees;
