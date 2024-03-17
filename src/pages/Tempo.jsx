import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FetchData() {
	const [record, setRecords] = useState([]);

	useEffect(() => {
		fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8d81f0e12efe061269e2c7b1b9c821d8')
			.then(res => res.json())
			.then(data => setRecords(data))
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<Header />
			<main class='main' id='main'>
				<section class='section about-hero' style={{ backgroundImage: "url('./media/bg-about.jpg')" }} id='hero'>
					<h1 class='hero__title'>Time</h1>
				</section>

				<section class='section about container'>
					<div class='about__data'>
						<h3 class='about__data-title'>Time table</h3>
						load data somewhere here
					</div>
					
					<div>
						<ul>
							<li key={record.id}>
								{record.name} |{' '}
								{record.weather?.map(wt => (
									<span>
										{wt.main} | {wt.temp}
									</span>
								))}{' '}
								{record.main?.temp}
							</li>
						</ul>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default FetchData;
