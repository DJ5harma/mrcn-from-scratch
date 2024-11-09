const EventLocation = () => {
	return (
		<div className="flex flex-wrap lg:flex-nowrap justify-around items-center gap-4 p-6 border-t-8">
			<div className="flex flex-col gap-2">
				<h1>Event Location</h1>
				<p>U.I.E.T - University Institute of Engineering & Technology</p>
				<p>Kurukshetra University,</p>
				<p>Kurukshetra, Haryana</p>
				<p>
					Website -{" "}
					<a
						className="lin"
						href="https://uietkuk.ac.in"
						target="_blank"
						rel="noopener noreferrer"
					>
						www.uietkuk.ac.in
					</a>
				</p>
			</div>
			<div className="w-full">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.630355431823!2d76.81124881518008!3d29.96130932944995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e38b1c9410e23%3A0xff2e40965dcd7b69!2sUniversity%20Institute%20of%20Engineering%20and%20Technology%2C%20Kurukshetra%20University!5e0!3m2!1sen!2sin!4v1675453272100!5m2!1sen!2sin"
					width="400"
					height="300"
					style={{ border: 0 }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					allowFullScreen={true}
					className="w-full"
				></iframe>
			</div>
		</div>
	);
};

export default EventLocation;
