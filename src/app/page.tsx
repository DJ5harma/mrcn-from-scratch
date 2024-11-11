import IntroHeader from "./_components/IntroHeader";
import AcceptedPapers from "./_components/AcceptedPapers";
import About3 from "./_components/About3";
import CallForPapers from "./_components/CallForPapers";
import ImportantDates from "./_components/ImportantDates";
import SubmitPapers from "./_components/SubmitPapers";
import RegistrationFees from "./_components/RegistrationFees";
import RegistrationAccountDetails from "./_components/RegistrationAccountDetails";
import InternationalAdvisoryCommittee from "./_components/InternationalAdvisoryCommittee";
import TechnicalProgramCommittee from "./_components/TechnicalProgramCommittee";
import OrganizingCommittee from "./_components/OrganizingCommittee";
import EventLocation from "./_components/EventLocation";
import PastConferences from "./_components/PastConferences";

export default function Home() {
	return (
		<div className="flex flex-col w-full flex-1 pb-4 [&>div]:border-t-8 gap-4">
			<IntroHeader />
			<AcceptedPapers />
			<About3 />
			<CallForPapers />
			<ImportantDates />
			<SubmitPapers />
			<div className="flex flex-wrap w-full justify-around items-center">
				<RegistrationFees />
				<RegistrationAccountDetails />
			</div>
			<InternationalAdvisoryCommittee />
			<TechnicalProgramCommittee />
			<OrganizingCommittee />

			<EventLocation />
			<PastConferences />
		</div>
	);
}
