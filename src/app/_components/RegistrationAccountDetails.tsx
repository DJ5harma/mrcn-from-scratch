const RegistrationAccountDetails = () => {
	return (
		<div className="flex flex-col font-medium p-4">
			<h1 className="bg-gray-100 p-4">Registration Account Details</h1>
			<table className="border-collapse w-full">
				<tbody>
					<tr>
						<td className="border p-2">Account No.</td>
						<td className="border p-2">----------</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">Account Name</td>
						<td className="border p-2">----------</td>
					</tr>
					<tr>
						<td className="border p-2">Bank</td>
						<td className="border p-2">----------</td>
					</tr>
					<tr className="bg-gray-200">
						<td className="border p-2">Branch</td>
						<td className="border p-2">----------</td>
					</tr>
					<tr>
						<td className="border p-2">IFSC Code</td>
						<td className="border p-2">----------</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default RegistrationAccountDetails;
