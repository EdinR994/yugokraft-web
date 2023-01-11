import React from 'react';
import './style.scss';
import i18n from 'i18n-js';

/**
 * @desc UI for Terms of Use screen
 * @returns {JSX.Element}
 */
const TermsOfUse = () => {
	if (i18n.locale !== 'de') {
		return (
			<article className='termsOfUse'>
				<h1 className='termsOfUse__header'>Data protection</h1>
				<h2 className='termsOfUse__header2'>Scope</h2>
				<p className='termsOfUse__text'>
					This data protection statement explains to users the nature, scope and purposes of the collection and use of personal data by the
					responsible provider YUGOKRAFT GmbH, Leipziger Platz 15, 10017 Berlin, Deutschland,{' '}
					<a className='termsOfUse__link' target='_blank' href='mailto: datenschutz@yugokraft.de' rel='noopener noreferrer'>
						datenschutz@yugokraft.de
					</a>
					, +49 30 25894066, on this website.
				</p>
				<h2 className='termsOfUse__header2'>Access data/server log files</h2>
				<p className='termsOfUse__text'>
					YUGOKRAFT GmbH (or its web space provider) collects data about every access to the website (so-called server log files). The
					access data includes:
					<br />
					Name of the website accessed, file, date and time of access, amount of data transferred, notification of successful access,
					browser type and version, the user’s operating system, referrer URL (the page visited prior), IP address and the requesting
					provider. <br />
					YUGOKRAFT GmbH uses the log data only for statistical evaluations for the purpose of operating, security and optimisation of the
					website. However, YUGOKRAFT GmbH reserves the right to subsequently check the log data if there is a justified suspicion of
					illegal use based on concrete evidence. By visiting the website, information about the access (date, time, page accessed) may be
					stored on the server. This does not constitute an evaluation of personal data (e.g. name, address or email address).
				</p>
				<h2 className='termsOfUse__header2'>Handling of personal data</h2>
				<p className='termsOfUse__text'>
					Personal data is information with the help of which a person can be identified, i.e. information that can be traced back to a
					person. This includes the name, email address or telephone number, but data about preferences, hobbies, memberships or which
					websites were viewed by somebody are also considered personal data. <br />
					Personal data is only collected, used and passed on by YUGOKRAFT GmbH if this is permitted by the law or if the user agrees to the
					collection of data. <br />
					If personal data is collected, this is only done, if possible, with the prior consent of the user of the website. The data will
					not be passed on to third parties without the express consent of the user. We expressly point out that the transmission of data on
					the Internet (e.g. by email) may have security gaps. A comprehensive protection of data against access by third parties is not
					possible. We cannot accept any liability for any damages caused by such security gaps. The use of all published contact data by
					third parties for advertising purposes is expressly prohibited. <br />
					YUGOKRAFT GmbH reserves the right to carry out a credit check on individuals applying for a flat using the application form. In
					case of a rejection, application documents are not saved and stored, but are disposed of professionally!
				</p>
				<h2 className='termsOfUse__header2'>Recipients of personal data</h2>
				<p className='termsOfUse__text'>
					YUGOKRAFT GmbH only transfers data to external processors if it has concluded an agreement with them that meets the legal
					requirements for processor contracts. YUGOKRAFT GmbH only transfers personal data to processors outside the European Union if an
					adequate level of data protection is guaranteed.
				</p>
				<h2 className='termsOfUse__header2'>Contact</h2>
				<p className='termsOfUse__text'>
					When contacting YUGOKRAFT GmbH (e.g. via contact form, telephone or email), the user’s details will be stored for the purpose of
					processing the enquiry and in the event that follow-up questions arise. <br />
					YUGOKRAFT GmbH records users’ master data as entered in the enquiry and contact form (salutation, name, email) as well as
					additional information that is part of a contact enquiry and is designated as voluntary information. By submitting his or her
					consent, the user agrees that YUGOKRAFT GmbH may store and use (mainly for the purpose of sending concrete information on projects
					of YUGOKRAFT GmbH) this master data and additional information for contact, information and marketing purposes (contacts that
					serve to process your project request; regular newsletter dispatch is excluded).
				</p>
				<h2 className='termsOfUse__header2'>Distribution</h2>
				<p className='termsOfUse__text'>
					YUGOKRAFT GmbH has a sales network comprising direct sales and sales partners. User data will therefore be forwarded to sales
					partners and agents commissioned by YUGOKRAFT GmbH for processing, but only for the individual processing of the enquiry, not for
					their advertising and marketing purposes.
				</p>
				<h2 className='termsOfUse__header2'>Newsletter</h2>
				<p className='termsOfUse__text'>
					YUGOKRAFT GmbH uses the newsletter to inform users about offers. <br />
					If the user would like to receive the YUGOKRAFT newsletter, YUGOKRAFT GmbH requires a valid email address from the user as well as
					information that allows YUGOKRAFT GmbH to verify that the user is the owner of the email address/post address provided or that the
					owner of the email address/post address agrees to receive the newsletter. <br />
					Further data will not be collected. This data is only used for sending the newsletter and will not be passed on to third parties.
					<br />
					When registering for the newsletter, YUGOKRAFT GmbH saves the user’s IP address and the date of registration. This storage is only
					used as proof in the event that a third party misuses an email address and registers to receive the newsletter without the
					knowledge of the entitled person. <br />
					YUGOKRAFT GmbH is therefore entitled to send information to the participating user by post or email after registration for the
					newsletter (provided this data was provided when the user contacted YUGOKRAFT GmbH). This information can be oriented towards the
					user’s individual interests. The alignment to individual interests results from the data provided by the user.
				</p>
				<h2 className='termsOfUse__header2'>Unsubscribe from newsletter</h2>
				<p className='termsOfUse__text'>
					Consent to the storage of the data, the email address and its use for sending the newsletter can be revoked by the user at any
					time free of charge. The revocation can be done via an unsubscribe link in the newsletter of YUGOKRAFT GmbH itself or by sending a
					message to the email address: <br />
					<a className='termsOfUse__link' target='_blank' href='mailto: datenschutz@yugokraft.de' rel='noopener noreferrer'>
						datenschutz@yugokraft.de
					</a>
					<br />
					Upon revocation, all master data and voluntary information will be blocked by the system operator and deleted after the statutory
					retention period has expired.
				</p>
				<h2 className='termsOfUse__header2'>Integration of third-party services and content</h2>
				<p className='termsOfUse__text'>
					It is possible that third-party content, such as videos from YouTube, map material from Google Maps, RSS feeds or graphics from
					other websites may be integrated within this online offer. This always presupposes that the providers of this content (hereinafter
					referred to as “third-party providers”) are aware of the IP address of the users. Without the IP address, they would not be able
					to send the content to the browser of the respective user. The IP address is therefore necessary for the display of this content.
					YUGOKRAFT GmbH endeavours to use only content whose respective providers use the IP address solely for the purpose of provision of
					the content. However, YUGOKRAFT GmbH has no influence on whether or not the third-party providers store the IP address, e.g. for
					statistical purposes. As far as YUGOKRAFT GmbH is aware of this, the users will be informed.
				</p>
				<h2 className='termsOfUse__header2'>Cookies</h2>
				<p className='termsOfUse__text'>
					Cookies are small files that enable specific information relating to the device to be stored on the user’s access device (PC,
					smartphone or similar). On the one hand, they serve the user-friendliness of websites and thus the users (e.g. storage of login
					data). On the other hand, they are used to record statistical data on website usage and thereby enable analysis for the purpose of
					improving the services offered. Users can influence the use of cookies. <br />
					When you surf our website for the first time, we will ask you for your permission regarding which cookies we may use. Without your
					consent, we only use those cookies that are absolutely necessary for the operation of the website. You may of course revoke any
					consent to the cookies we have set at any time without providing reasons. Please note that blocking or deleting cookies may affect
					your online experience and prevent you from fully using this website.
				</p>
				<h2 className='termsOfUse__header2'>Google Analytics</h2>
				<p className='termsOfUse__text'>
					This website uses Google Analytics, a web analysis service of Google Inc. (“Google”). Google Analytics uses so-called “cookies”,
					text files that are stored on the user’s computer, which enable an analysis of the use of the website by them. The information
					generated by the cookie about the use of the website by the user is usually transferred to a Google server in the USA and stored
					there. <br />
					The IP address of the users is shortened by Google within member states of the European Union or in other states which are party
					to the Agreement on the European Economic Area; the personal data is thus made anonymous. <br />
					The IP address transmitted by the user’s browser within the framework of Google Analytics is not merged with other Google data.
					Users can prevent the storage of cookies by adjusting their browser settings accordingly; YUGOKRAFT GmbH points out to users that
					in this case not all functions of the website may be fully available. Furthermore, users can prevent the collection of data
					generated by the cookie and related to their use of the website (including their IP address) being sent to Google and the
					processing of this data by Google by downloading and installing the browser plug-in available at the following link:
					<a className='termsOfUse__link' target='_blank' href='http://tools.google.com/dlpage/gaoptout?hl=de' rel='noopener noreferrer'>
						http://tools.google.com/dlpage/gaoptout?hl=de
					</a>
					. <br />
					Further information on Google’s use of data for advertising purposes, setting and objection options can be found on Google’s
					websites:{' '}
					<a
						className='termsOfUse__link'
						target='_blank'
						href='https://www.google.com/intl/de/policies/privacy/partners/'
						rel='noopener noreferrer'
					>
						https://www.google.com/intl/de/policies/privacy/partners/
					</a>{' '}
					(“Data use by Google when you use websites or apps of our partners”),
					<a className='termsOfUse__link' target='_blank' href='http://www.google.com/policies/technologies/ads' rel='noopener noreferrer'>
						http://www.google.com/policies/technologies/ads
					</a>{' '}
					(“Data use for advertising purposes”),
					<a className='termsOfUse__link' target='_blank' href='http://www.google.de/settings/ads' rel='noopener noreferrer'>
						http://www.google.de/settings/ads
					</a>
					(“Manage information that Google uses to show you advertisements”) and
					<a className='termsOfUse__link' target='_blank' href='http://www.google.com/ads/preferences/' rel='noopener noreferrer'>
						http://www.google.com/ads/preferences/
					</a>
					(“Determine which advertisements Google shows you”).
				</p>
				<h2 className='termsOfUse__header2'>Use of Facebook social media plug-ins</h2>
				<p className='termsOfUse__text'>
					This website uses social media plug-ins (“plug-ins”) of the social media network facebook.com, which is operated by Facebook
					Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland (“Facebook”). The plug-ins can be recognised by one of
					the Facebook logos (white “f” on blue tile, the word “Like” or a “Thumbs up” sign) or are marked with the addition “Facebook
					social media plug-in”. The list and appearance of the Facebook social media plug-ins can be viewed here:
					<a className='termsOfUse__link' target='_blank' href='https://developers.facebook.com/docs/plugins/' rel='noopener noreferrer'>
						https://developers.facebook.com/docs/plugins/
					</a>
					. <br />
					When a user calls up a website of this offer that contains such a plug-in, his/her browser establishes a direct connection with
					the Facebook servers. The content of the plug-in is transmitted by Facebook directly to your browser, which integrates it into the
					website. YUGOKRAFT GmbH therefore has no influence on the extent of the data that Facebook collects with the help of this plug-in
					and therefore informs the users according to its state of knowledge: by integrating the plug-in, Facebook receives the information
					that a user has called up the corresponding page of the website. If the user is logged in to Facebook, Facebook can assign the
					visit to his or her Facebook account. If users interact with the plug-ins, for example by pressing the Like button or posting a
					comment, the corresponding information is transmitted directly from their browser to Facebook and stored there. If a user is not a
					member of Facebook, it is still possible for Facebook to find out his or her IP address and store it. <br />
					The purpose and scope of the data collection and the further processing and use of the data by Facebook, as well as the relevant
					rights and setting options to protect the privacy of users, can be found in the Facebook privacy policy:
					<a className='termsOfUse__link' target='_blank' href='https://www.facebook.com/about/privacy/' rel='noopener noreferrer'>
						https://www.facebook.com/about/privacy/
					</a>
					. <br />
					If a user is a Facebook member and does not want Facebook to collect data about him or her via the website and associate it with
					his or her membership data stored on Facebook, he or she must log out of Facebook before visiting the website. Further settings
					and objections to the use of data for advertising purposes are possible within the Facebook profile settings:
					<a className='termsOfUse__link' target='_blank' href='https://www.facebook.com/settings?tab=ads' rel='noopener noreferrer'>
						https://www.facebook.com/settings?tab=ads
					</a>
					.
				</p>
				<h2 className='termsOfUse__header2'>Use of Instagram social plug-ins</h2>
				<p className='termsOfUse__text'>
					Our website uses social plug-ins provided by Instagram, which is operated by Instagram LLC., 1601 Willow Road, Menlo Park, CA
					94025, United States (“Instagram”). The plug-ins are marked with an Instagram logo, e.g. in the form of an “Instagram camera”. If
					you visit any part of our website that contains such a plug-in, your browser will establish a direct connection with the Instagram
					servers. Instagram transmits the content of the plug-in directly to your browser and integrates it in the website. Through this
					integration, Instagram receives notification that your browser has accessed the corresponding part of our website even if you do
					not have any Instagram profile of your own or are not currently logged onto Instagram. Your browser sends this information
					(including your IP address) directly to an Instagram server in the United States, where it is stored. <br />
					If you are currently logged onto Instagram, it can directly link your visit to our website with your Instagram account. If you
					interact with the plug-ins, e.g. by clicking on the “Instagram” button, this information will also be automatically sent to and
					stored on an Instagram server. In addition, the information will be published in your Instagram account and shown to your contacts
					there. <br />
					Details of the purpose of collecting, processing and using the data and the scope of such activities by Instagram as well as your
					rights in this regard and the settings available to you for protecting your privacy can be found in Instagram’s privacy at
					<a className='termsOfUse__link' target='_blank' href='https://help.instagram.com/155833707900388/' rel='noopener noreferrer'>
						https://help.instagram.com/155833707900388/
					</a>{' '}
					<br />
					If you don’t want Instagram to directly link the data collected from our website with your Instagram account, you must log off
					from Instagram before visiting our website. You can also prevent your browser from loading Instagram plug-ins, e.g. by using the
					“NoScript” script blocker (
					<a className='termsOfUse__link' target='_blank' href='http://noscript.net' rel='noopener noreferrer'>
						http://noscript.net
					</a>
					).
				</p>
				<h2 className='termsOfUse__header2'>Use of Twitter plug-ins</h2>
				<p className='termsOfUse__text'>
					Our website integrates plug-ins provided by Twitter Inc. (“Twitter”). You can recognise the Twitter plugins (“tweet” button) by
					the Twitter logo on our website. An overview of the tweet buttons can be found here ({' '}
					<a className='termsOfUse__link' target='_blank' href='https://about.twitter.com/resources/buttons' rel='noopener noreferrer'>
						https://about.twitter.com/resources/buttons
					</a>
					). <br />
					If you access any part of our website containing one of these plug-ins, this will establish a direct link between your browser and
					the Twitter server. In this way, Twitter will know that you have visited our website with your IP address. If you click on the
					Twitter “tweet” button while you are logged into your Twitter account, you can share the contents of our website on your Twitter
					profile. This allows Twitter to link the visit to our website with your user account. Please note that as the operator of this
					website we have no knowledge of the content of the transmitted data or how it is used by Twitter. If you do not want Twitter to be
					able to link your visit to our website, make sure you first log out from your Twitter account. Further information can be found in
					Twitter’s privacy policy at{' '}
					<a className='termsOfUse__link' target='_blank' href='https://twitter.com/privacy' rel='noopener noreferrer'>
						https://twitter.com/privacy
					</a>
					.
				</p>
				<h2 className='termsOfUse__header2'>Use of LinkedIn social plug-ins</h2>
				<p className='termsOfUse__text'>
					Our website uses functions provided by LinkedIn. These services are provided by LinkedIn Corporation, 2029 Stierlin Court,
					Mountain View, CA 94043, United States. <br />
					Whenever you visit any part of our website containing LinkedIn functions, a connection with LinkedIn servers is established.
					LinkedIn is informed that you have visited our website with your IP address. If you click on the LinkedIn “Recommend” button and
					are logged into your LinkedIn account, LinkedIn is able to link your visit to our website with you and your user account. Please
					note that as the operator of this website we have no knowledge of the content of the transmitted data or how it is used by
					LinkedIn. <br />
					The LinkedIn plugin is used on the basis of Article 6 (1) (f) of the European General Data Protection Regulation. The website
					operator has a legitimate interest in the widest possible visibility in social media. <br />
					Further information can be found in LinkedIn’s privacy policy at
					<a className='termsOfUse__link' target='_blank' href='https://www.linkedin.com/legal/privacy-policy' rel='noopener noreferrer'>
						https://www.linkedin.com/legal/privacy-policy
					</a>
					.
				</p>
				<h2 className='termsOfUse__header2'>Use of YouTube social plug-ins</h2>
				<p className='termsOfUse__text'>
					This website may also include a plug-in provided by YouTube, a company owned by Google Inc., domiciled in San Bruno, California,
					United States. As soon as you visit a page on our website featuring a YouTube plug-in, a connection will be established with the
					YouTube servers. In this connection, the YouTube server will be told the specific part of our website you have visited. If you are
					simultaneously logged into your YouTube account, YouTube will be able to directly link your Internet activities with your personal
					profile. You can prevent this by first logging out of your account. Further information on how YouTube collects and uses your data
					can be found in YouTube’s privacy policy at
					<a className='termsOfUse__link' target='_blank' href='www.youtube.com' rel='noopener noreferrer'>
						www.youtube.com
					</a>
					.
				</p>
				<h2 className='termsOfUse__header2'>Revocation, changes, corrections and updates</h2>
				<p className='termsOfUse__text'>
					The user has the right to request information free of charge about the personal data stored about him/her. In addition, the user
					has the right to correct incorrect data and to block and delete his/her personal data, provided that this does not conflict with
					any legal storage obligation. The user also has the right to limit processing, the right of revocation, objection and the right to
					data transferability. <br />
					<br />
					YUGOKRAFT GmbH reserves the right to amend or supplement this data protection declaration if and to the extent that this is
					necessary in the interest of simple and secure processing and in particular to prevent misuse.
				</p>
				<h2 className='termsOfUse__header2'>Data protection officer</h2>
				<p className='termsOfUse__text'>
					YUGOKRAFT GmbH has a data protection officer (“DPO”), who is responsible for ensuring compliance with data protection legislation.
					The data protection officer at YUGOKRAFT GmbH or the data protection officer’s office are available to you at all times if you
					have any questions or concerns relating to the processing of your personal data or any other matters regarding data protection.
					You can contact the data protection officer, Mr. Amil Hota, at YUGOKRAFT GmbH via{' '}
					<a className='termsOfUse__link' target='_blank' href='mailto: datenschutz@yugokraft.de' rel='noopener noreferrer'>
						datenschutz@yugokraft.de
					</a>
					.
				</p>
			</article>
		);
	}

	return (
		<article className='termsOfUse'>
			<h1 className='termsOfUse__header'>{i18n.t('Datenschutz')}</h1>
			<p className='termsOfUse__text'>{i18n.t('datenschultz-1')}</p>
			<br />
			<p className='termsOfUse__text'>{i18n.t('datenschultz-2')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Verantwortlicher')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Verantwortlicher-description-1')}</p>
			<br />
			<p className='termsOfUse__text'>{i18n.t('Verantwortlicher-description-2')}</p>
			<div className='termsOfUse__contactWrapper'>
				<div>
					<p className='termsOfUse__microHeader'>
						{i18n.t('Yugokraft GmbH')}
						<p className='termsOfUse__text'>{i18n.t('Leipziger Platz 15')}</p>
						<p className='termsOfUse__text'>{i18n.t('10117 Berlin')}</p>
					</p>
				</div>

				<div>
					<p className='termsOfUse__microHeader'>
						{i18n.t('Kontakt')}
						<p className='termsOfUse__text'>{i18n.t('Telefon: +49 (0) 30 25894066')}</p>
						<div className='termsOfUse__linksWrapper'>
							<p className='termsOfUse__text'>{i18n.t('E-Mail')}</p>
							<a className='termsOfUse__link' target='_blank' href='datenschutz@yugokraft.de' rel='noopener noreferrer'>
								datenschutz@yugokraft.de
							</a>
						</div>

						<div className='termsOfUse__linksWrapper'>
							<p className='termsOfUse__text'>{i18n.t('Web')}</p>
							<a className='termsOfUse__link' target='_blank' href='https://yugokraft.de' rel='noopener noreferrer'>
								https://yugokraft.de
							</a>
						</div>
					</p>
				</div>
			</div>
			<h2 className='termsOfUse__header2'>{i18n.t('Welche personenbezogenen Daten')}</h2>
			<ul>
				<li className='termsOfUse__text'>{i18n.t('Informationen über den Browsertyp')}</li>
				<li className='termsOfUse__text'>{i18n.t('Das Betriebssystem des Abrufgerätes')}</li>
				<li className='termsOfUse__text'>{i18n.t('Die IP-Adresse des Abrufgerätes')}</li>
				<li className='termsOfUse__text'>{i18n.t('Datum und Uhrzeit des Zugriffs')}</li>
				<li className='termsOfUse__text'>{i18n.t('Websites und Ressorucen')}</li>
				<li className='termsOfUse__text'>{i18n.t('Websites')}</li>
				<li className='termsOfUse__text'>{i18n.t('Meldung, ob der Abruf erfolgreich war')}</li>
				<li className='termsOfUse__text'>{i18n.t('übertragene Datenmenge')}</li>
			</ul>
			<p className='termsOfUse__text'>{i18n.t('Diese Daten werden in den Logfile')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Rechtsgrundlage für die')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Rechtsgrundlage für die description')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Zweck der Datenverarbeitung')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Zweck der Datenverarbeitung description')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Dauer der Speicherung')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Dauer der Speicherung description')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Widerspruchs- und Löschungsmöglichkeit')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Widerspruchs- und Löschungsmöglichkeit description')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Besondere Funktionen der Internetseite')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Besondere Funktionen der Internetseite description')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Bewerbungsformular')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Welche personenbezogenen')}
					<br />
					{i18n.t('Die von Ihnen in die Formularfelder')}
				</li>

				<li className='termsOfUse__text'>
					{i18n.t('Rechtsgrundlage für')}
					<br />
					{i18n.t('Rechtsgrundlage für description')}
				</li>

				<li className='termsOfUse__text'>
					{i18n.t('Zweck der Datenverarbeitung')}
					<br />
					{i18n.t('Zweck der Datenverarbeitung 2 description')}
				</li>

				<li className='termsOfUse__text'>
					{i18n.t('Dauer der Speicherung')}
					<br />
					{i18n.t('Dauer der Speicherung description 2')}
				</li>

				<li className='termsOfUse__text'>
					{i18n.t('Widerspruchs- und Löschungsmöglichkeit')}
					<br />
					{i18n.t('Widerspruchs- und Löschungsmöglichkeit description 2')}
				</li>

				<li className='termsOfUse__text'>
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten')}
					<br />
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten description')}
				</li>
			</ul>
			<h2 className='termsOfUse__header2'>{i18n.t('Bewerbungsformular')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Welche personenbezogenen')}
					<br />
					{i18n.t('Welche personenbezogenen description 2')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Rechtsgrundlage für die')}
					<br />
					{i18n.t('Rechtsgrundlage für die description 2')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Zweck der Datenverarbeitung')}
					<br />
					{i18n.t('Zweck der Datenverarbeitung description 2')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Dauer der Speicherung')}
					<br />
					{i18n.t('Dauer der Speicherung description 3')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Widerrufs- und Löschungsmöglichkeiten')}
					<br />
					{i18n.t('Widerrufs- und Löschungsmöglichkeiten description')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten')}
					<br />
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten d2')}
				</li>
			</ul>
			<h2 className='termsOfUse__header2'>{i18n.t('Kommentar-Funktion')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Welche personenbezogenen Daten')}
					<br />
					{i18n.t('Welche personenbezogenen Daten d3')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Rechtsgrundlage für die')}
					<br />
					{i18n.t('Rechtsgrundlage für die description 2')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Zweck der Datenverarbeitung')}
					<br />
					{i18n.t('Zweck der Datenverarbeitung d3')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Dauer der Speicherung')}
					<br />
					{i18n.t('Dauer der Speicherung d3')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Widerrufs- und Löschungsmöglichkeit')}
					<br />
					{i18n.t('Widerrufs- und Löschungsmöglichkeit d')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten')}
					<br />
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten d3')}
				</li>
			</ul>
			<h2 className='termsOfUse__header2'>{i18n.t('Kontaktformular')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Welche personenbezogenen Daten')}
					<br />
					{i18n.t('Welche personenbezogenen Daten d4')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Rechtsgrundlage für die')}
					<br />
					{i18n.t('Rechtsgrundlage für die description 2')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Zweck der Datenverarbeitung')}
					<br />
					{i18n.t('Zweck der Datenverarbeitung d4')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Dauer der Speicherung')}
					<br />
					{i18n.t('Dauer der Speicherung d4')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Widerrufs- und Löschungsmöglichkeit')}
					<br />
					{i18n.t('Widerrufs- und Löschungsmöglichkeit d4')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten')}
					<br />
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten d4')}
				</li>
			</ul>
			<h2 className='termsOfUse__header2'>{i18n.t('Formular zur Newsletter-Anmeldung')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Welche personenbezogenen Daten')}
					<br />
					{i18n.t('Welche personenbezogenen Daten d5')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Rechtsgrundlage für die')}
					<br />
					{i18n.t('Rechtsgrundlage für die description 2')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Zweck der Datenverarbeitung')}
					<br />
					{i18n.t('Zweck der Datenverarbeitung d5')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Dauer der Speicherung')}
					<br />
					{i18n.t('Dauer der Speicherung d5')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Widerrufs- und Löschungsmöglichkeit')}
					<br />
					{i18n.t('Widerrufs- und Löschungsmöglichkeit d5')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten')}
					<br />
					{i18n.t('Erforderlichkeit der Angabe personenbezogener Daten d5')}
				</li>
			</ul>
			<h2 className='termsOfUse__header2'>{i18n.t('Statistische Auswertung der')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Statistische Auswertung der d')}</p>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Google Tag Manager')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Welche personenbezogenen Daten')}
					<br />
					{i18n.t('Welche personenbezogenen Daten d6')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Rechtsgrundlage für die')}
					<br />
					{i18n.t('Rechtsgrundlage für die d6')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Zweck der Datenverarbeitung')}
					<br />
					{i18n.t('Zweck der Datenverarbeitung d6')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Dauer der Speicherung')}
					<br />
					{i18n.t('Dauer der Speicherung d6')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Widerspruchs- und Löschungsmöglichkeit')}
					<br />
					{i18n.t('Widerspruchs- und Löschungsmöglichkeit d6')}
					<a
						href={`http://tools.google.com/dlpage/gaoptout?hl=${i18n.locale}`}
						className='termsOfUse__link'
						target='_blank'
						rel='noopener noreferrer'
					>
						http://tools.google.com/dlpage/gaoptout?hl={i18n.locale}
					</a>
					{i18n.t('Widerspruchs- und Löschungsmöglichkeit d6-2')}
					<a href='https://policies.google.com/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						https://policies.google.com/privacy
					</a>
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Twitter Advertising')}</h2>
			<p className='termsOfUse__text'>
				{i18n.t('Twitter Advertising d1')}
				<a href='https://twitter.com/de/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://twitter.com/de/privacy
				</a>
				<br />
				<br />
				{i18n.t('Twitter Advertising d2')}
				<a href='https://twitter.com/de/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://twitter.com/de/privacy
				</a>
			</p>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Google Ads')}</h2>
			<p className='termsOfUse__text'>
				{i18n.t('Google Ads d1')}
				<a href='https://policies.google.com/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://policies.google.com/privacy
				</a>
				<br />
				<br />
				{i18n.t('Google Ads d2')}
				<a href='https://policies.google.com/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://policies.google.com/privacy
				</a>
			</p>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Google-Analytics')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Umfang der Verarbeitung')}
					<br />
					{i18n.t('Umfang der Verarbeitung d')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Rechtsgrundlage für die')}
					<br />
					{i18n.t('Rechtsgrundlage für die d7')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Zweck der Datenverarbeitung')}
					<br />
					{i18n.t('Zweck der Datenverarbeitung d7')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Dauer der Speicherung')}
					<br />
					{i18n.t('Dauer der Speicherung d7')}
				</li>
				<li className='termsOfUse__text'>
					{i18n.t('Widerspruchs- und Löschungsmöglichkeiten')}
					<br />
					{i18n.t('Widerspruchs- und Löschungsmöglichkeiten d7-1')}
					<a
						href={`http://tools.google.com/dlpage/gaoptout?hl=${i18n.locale}`}
						className='termsOfUse__link'
						target='_blank'
						rel='noopener noreferrer'
					>
						{`http://tools.google.com/dlpage/gaoptout?hl=${i18n.locale}`}
					</a>
					{i18n.t('Widerspruchs- und Löschungsmöglichkeiten d7-2')}
					<a
						href={`https://policies.google.com/privacy?hl=${i18n.locale}`}
						className='termsOfUse__link'
						target='_blank'
						rel='noopener noreferrer'
					>
						{`https://policies.google.com/privacy?hl=${i18n.locale}`}
					</a>
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Hotjar')}</h2>
			<p className='termsOfUse__text'>
				{i18n.t('Hotjar d-1')}
				<a href='https://www.hotjar.com/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://www.hotjar.com/privacy
				</a>
				<br />
				<br />
				{i18n.t('Hotjar d-2')}
			</p>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Facebook Connect')}</h2>
			<p className='termsOfUse__text'>
				{i18n.t('Facebook Connect d-1')}
				<a href='https://www.facebook.com/about/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://www.facebook.com/about/privacy
				</a>
				<br />
				<br />
				{i18n.t('Facebook Connect d-2')}
				<a href='https://www.facebook.com/about/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://www.facebook.com/about/privacy
				</a>
			</p>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Facebook Custom Audience')}</h2>
			<p className='termsOfUse__text'>
				{i18n.t('Facebook Custom Audience d-1')}
				<a href='https://www.facebook.com/about/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://www.facebook.com/about/privacy
				</a>
				<br />
				<br />
				{i18n.t('Facebook Custom Audience d-2')}
				<a href='https://www.facebook.com/about/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					https://www.facebook.com/about/privacy
				</a>
			</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Einbindung externer Webservices')}</h2>
			<p className='termsOfUse__text'>
				{i18n.t('Einbindung externer Webservices d1')}
				<br />
				<br />
				{i18n.t('Einbindung externer Webservices d2')}
			</p>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Bootstrap CDN')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Bootstrap CDN d-1')}
					<a href='https://www.privacyshield.gov/list' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						https://www.privacyshield.gov/list
					</a>
					{i18n.t('Bootstrap CDN d-2')}
					<a href='http://data.europa.eu/eli/dec_impl/2016/1250/oj' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						http://data.europa.eu/eli/dec_impl/2016/1250/oj
					</a>
					{i18n.t('Bootstrap CDN d-3')}
					<a href='https://www.bootstrapcdn.com/privacy-policy/' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						https://www.bootstrapcdn.com/privacy-policy/
					</a>
					<br />
					<br />
					{i18n.t('Bootstrap CDN d-4')}
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Doubleclick')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Doubleclick d1')}
					<a href='https://policies.google.com/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						https://policies.google.com/privacy
					</a>
					<br />
					<br />
					{i18n.t('Doubleclick d2')}
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Google')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Google d1')}
					<a href='https://policies.google.com/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						https://policies.google.com/privacy
					</a>
					<br />
					<br />
					{i18n.t('Google d2')}
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Google APIS')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Google APIS d1')}
					<a href='https://policies.google.com/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						https://policies.google.com/privacy
					</a>
					<br />
					<br />
					{i18n.t('Google APIS d2')}
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Gstatic')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Gstatic d1')}
					<a href='https://policies.google.com/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						https://policies.google.com/privacy
					</a>
					<br />
					<br />
					{i18n.t('Gstatic d2')}
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('MyFonts Counter')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('MyFonts Counter d1')}
					<a href='http://www.myfonts.com/info/legal/#Privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						http://www.myfonts.com/info/legal/#Privacy
					</a>
					<br />
					<br />
					{i18n.t('MyFonts Counter d2')}
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Youtube')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('Youtube d1')}
					<a href='https://policies.google.com/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						https://policies.google.com/privacy
					</a>
					<br />
					<br />
					{i18n.t('Youtube d2')}
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('website-checkde')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('website-checkde d1')}
					<a
						href='https://www.website-check.de/datenschutzerklaerung/'
						className='termsOfUse__link'
						target='_blank'
						rel='noopener noreferrer'
					>
						https://www.website-check.de/datenschutzerklaerung/
					</a>
					<br />
					<br />
					{i18n.t('website-checkde d2')}
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('wwwpages03net')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					{i18n.t('wwwpages03net d1')}
					<a href='http://www.pages03.net/' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						http://www.pages03.net/
					</a>
					<br />
					<br />
					{i18n.t('wwwpages03net d2')}
				</li>
			</ul>
			<h2 className='termsOfUse__headerOverList'>{i18n.t('Social Plug')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Welche personenbezogenen Daten')}</p>
					{i18n.t('Welche personenbezogenen Daten d8')}
				</li>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Rechtsgrundlage für die')}</p>
					{i18n.t('Rechtsgrundlage für die d8')}
				</li>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Zweck der Datenverarbeitung')}</p>
					{i18n.t('Zweck der Datenverarbeitung d8')}
					<a href='https://twitter.com/de/privacy' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
						https://twitter.com/de/privacy
					</a>
				</li>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Dauer der Speicherung')}</p>
					{i18n.t('Rechtsgrundlage für die d8')}
				</li>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Widerspruchs- und Löschungsmöglichkeit')}</p>
					{i18n.t('Widerspruchs- und Löschungsmöglichkeit d8')}
				</li>
			</ul>
			<h2 className='termsOfUse__header2'>{i18n.t('Unterrichtung über die Nutzung von Cookies')}</h2>
			<ul className='termsOfUse__list'>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Umfang der Verarbeitung')}</p>
					{i18n.t('Umfang der Verarbeitung d9')}
				</li>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Rechtsgrundlage für die')}</p>
					{i18n.t('Rechtsgrundlage für die d9')}
				</li>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Zweck der Datenverarbeitung')}</p>
					{i18n.t('Zweck der Datenverarbeitung d9')}
				</li>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Dauer der Speicherung')}</p>
					{i18n.t('Dauer der Speicherung d9')}
				</li>
				<li className='termsOfUse__text'>
					<p className='termsOfUse__text'>{i18n.t('Widerspruchs- und Beseitigungsmöglichkeit')}</p>
					{i18n.t('Widerspruchs- und Beseitigungsmöglichkeit d9')}
				</li>
			</ul>
			<h2 className='termsOfUse__header2'>{i18n.t('Datensicherheit und Datenschutz')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Datensicherheit und Datenschutz d')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Auskunftsanspruch und Berichtigungswünsche')}</h2>
			<h2 className='termsOfUse__header2'>{i18n.t('Auskunftsanspruch')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Auskunftsanspruch d')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Berichtigungsanspruch')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Berichtigungsanspruch d')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Recht auf Löschung')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Recht auf Löschung d')}</p>
			<ul>
				<li className='termsOfUse__text'>{i18n.t('die Daten entweder nicht mehr benötigt werden')}</li>
				<li className='termsOfUse__text'>{i18n.t('aufgrund des Widerrufs Ihrer Einwilligung')}</li>
				<li className='termsOfUse__text'>{i18n.t('Sie Widerspruch gegen die Verarbeitung')}</li>
				<li className='termsOfUse__text'>{i18n.t('Sie Widerspruch gegen die Verarbeitung')}</li>
				<li className='termsOfUse__text'>{i18n.t('Ihre Daten unrechtmäßig verarbeitet werden')}</li>
				<li className='termsOfUse__text'>{i18n.t('eine rechtliche Verpflichtung dies erfordert oder')}</li>
			</ul>
			<p className='termsOfUse__text termsOfUse__marginText'>{i18n.t('Das Recht besteht gem Art 17 Abs 3 DSGVO dann nicht wenn')}</p>
			<ul>
				<li className='termsOfUse__text'>{i18n.t('die Verarbeitung zur Ausübung')}</li>
				<li className='termsOfUse__text'>{i18n.t('Ihre Daten auf Grundlage einer rechtlichen')}</li>
				<li className='termsOfUse__text'>{i18n.t('die Verarbeitung aus Gründen des')}</li>
				<li className='termsOfUse__text'>{i18n.t('die Daten zur Geltendmachung')}</li>
			</ul>
			<h2 className='termsOfUse__header2'>{i18n.t('Recht auf Einschränkung der Verarbeitung')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Recht auf Einschränkung der Verarbeitung d1')}</p>
			<br /> <br />
			<p className='termsOfUse__text'>{i18n.t('Recht auf Einschränkung der Verarbeitung d2')}</p>
			<ul>
				<li className='termsOfUse__text'>{i18n.t('die Richtigkeit der personenbezogenen')}</li>
				<li className='termsOfUse__text'>{i18n.t('die Verarbeitung unrechtmäßig')}</li>
				<li className='termsOfUse__text'>{i18n.t('ein Widerspruch gegen die Verarbeitung')}</li>
			</ul>
			<h2 className='termsOfUse__header2'>{i18n.t('Recht auf Widerruf')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Recht auf Widerruf d')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Recht auf Widerspruch')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Recht auf Widerspruch d')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Wie nehme ich meine Rechte wahr')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Wie nehme ich meine Rechte wahr d1')}</p>
			<br />
			<br />
			<p className='termsOfUse__text'>{i18n.t('Wie nehme ich meine Rechte wahr d2')}</p>
			<ul>
				<li className='termsOfUse__text'>{i18n.t('Wie nehme ich meine Rechte wahr ul1')}</li>
				<li className='termsOfUse__text'>{i18n.t('Wie nehme ich meine Rechte wahr ul2')}</li>
				<li className='termsOfUse__text'>{i18n.t('Wie nehme ich meine Rechte wahr ul3')}</li>
			</ul>
			<p className='termsOfUse__text termsOfUse__marginText'>{i18n.t('Die Übertragung der personenbezogenen')}</p>
			<h2 className='termsOfUse__header2'>{i18n.t('Beschwerderecht bei der Aufsichtsbehörde')}</h2>
			<p className='termsOfUse__text'>{i18n.t('Sofern Sie den Verdacht haben')}</p>
			<p className='termsOfUse__text termsOfUse__marginText'>
				{i18n.t('Erstellt durch')}
				<br />
				{i18n.t('IT-Recht-Kanzlei DURY')}
				<a href='https://dury.de' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					www.dury.de
				</a>
				<br />
				{i18n.t('Website-Check GmbH')}
				<a href='https://website-check.de' className='termsOfUse__link' target='_blank' rel='noopener noreferrer'>
					www.website-check.de
				</a>
			</p>
		</article>
	);
};

export default TermsOfUse;
