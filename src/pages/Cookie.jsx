import React, { useState } from 'react';

const Cookie = () => {
	const [cookieVisible, setCookieVisible] = useState(localStorage.consent ? false : true);

	const setCookie = () => {
		// Settar o cookie
		localStorage.consent = true;

		if (localStorage.consent) {
			// Se o cookie estiver setado
			hideCookieBox();
		} else {
			// Se o cookie não estiver setado
			showError();
		}
	};

	const showError = () => {
		alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
	};

	const hideCookieBox = () => {
		setCookieVisible(false);
	};

	// Ler o cookie

	return (
		<div class= 'cookie__container'>
		<div class={`cookie ${cookieVisible ? '' : 'hide'}`}>
			<img src='./media/cookie.jpg' alt='cookie image' class = "cookie__img" />
			<div class='content'>
				<header>Cookies Consent</header>
				<p>Este site usa cookies para garantir que tenha a melhor experiência a utilizar o nosso site.</p>
				<div class='buttons'>
					<button onClick={setCookie} class='item'>
						Quero continuar
					</button>
					<a href='#' class='item'>
						Saber mais
					</a>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Cookie;
