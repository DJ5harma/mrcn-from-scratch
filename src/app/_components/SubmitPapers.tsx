export default function SubmitPapers() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="bg-gray-50 py-4">Submit Paper</h1>
			<div className="flex flex-col gap-4 px-4 [&>p]:text-justify">
				<p>
					Authors are encouraged to submit their papers using E-mail:{" "}
					<a href="mailto:mrcnuiet2025@kuk.ac.in">mrcnuiet2025@kuk.ac.in</a>.
					All the papers will undergo plagiarism check followed by peer review
					by at least three independent referees from the panel of international
					reviewers.
				</p>
				<p id="colorify">
					All the accepted papers will be published in LNNS Springer, which is
					“Lecture Notes in Networks and Systems”{" "}
					<a href="https://www.springer.com/series/15179">
						(https://www.springer.com/series/15179)
					</a>{" "}
					Indexed by SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago.
				</p>
				<p>
					The organizers are using standard plagiarism checking tools to
					scrutinize the paper and paper will be rejected if found with
					significant plagiarism.
				</p>
				<p>
					Authors of accepted papers will need to sign a copyright form and
					at-least one author must present the paper at the conference. All the
					accepted and presented papers will be published in the Springer Nature
					series, Mobile Radio Communications & 5G Network. The organizers are
					using standard plagiarism checking tools to scrutinize the paper and
					paper will be rejected if found with significant plagiarism.
				</p>
			</div>
		</div>
	);
}
