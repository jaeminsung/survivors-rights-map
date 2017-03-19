import React from 'react';
import Datamap from './datamap';

export default class Map extends React.Component {

	render() {
		return (
			<div className="page">
				<div className="header">
					<h3 className="map-label">Follow the Movement: Click Your State</h3>
					<h4 className="map-label-h4">Join the fight!</h4>
					{/*<p className="map-legend">
						Follow the progress of the implementation of Sexual Assault Survivors' Rights in all 50 states.
					</p>*/}
				</div>
				<div className="map-container">
					<div className="map-header">
						<div className="category-container">
							<i className="fa fa-circle impl-icon no-impl"></i>
							<div className="category">No Implementation</div>
						</div>
						<div className="category-container">
							<i className="fa fa-circle impl-icon partial-impl "></i>
							<div className="category">In Progress</div>
						</div>
						<div className="category-container">
							<i className="fa fa-circle impl-icon full-impl"></i>
							<div className="category">Laws Implemented</div>
						</div>
					</div>
					<div className="map">
						<Datamap
							id="dataMap"
							scope="usa"
							geographyConfig={{
								borderColor: 'white',
								highlightBorderColor: '#bada55',
								highlightFillColor: '${fills[data.fillKey]}',
								popupOnHover: false,
								highlightBorderWidth: 4
							}}
							fills={{
								'No Impl': '#d9d9d9',
								'Partial Impl': '#f9cb9c',
								'Full Impl': '#409fdf',
								'defaultFill': '#fffff'
							}}
							data={{
								AL: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-alabama'
								},
								AK: {
									fillKey: 'Partial Impl',
									sponsors: 'Sen Berta Gardner',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-alaska'
								},
								AR: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Vivian Flowers',
									status: '',
									riser: 'RISER NEEDED',
									narrative: 'https://actonthis.org/causes/rise-arkansas'
								},
								AZ: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Athena Salman-D',
									status: 'Filed',
									riser: 'Sabrina Dobson',
									narrative: 'There is a tremendous need for a Sexual Assault Survivors’ Bill of Rights throughout the country. One of the reasons I am passionate about this cause is due to my work with survivors. I have worked with many survivors who have struggled to have their voice heard throughout their experience. I have worked with clients who have become suicidal due to the unfair treatment they experienced. I have witnessed the lack of services, including timely and affordable mental health care. It is disheartening to realize the horrible criminal justice experiences survivors face is the norm.  By implementing a Bill of Rights, many of these concerns can be addressed. I have hope for a better future for survivors.',
									url: 'https://actonthis.org/causes/rise-arizona'
								},
								CA: {
									fillKey: 'Partial Impl',
									sponsors: 'Senator Pat Bates (R) and Rep Lorena Gonzalez (D) ',
									status: 'Bill intent filed',
									riser: 'Jennifer Li',
									narrative: 'I have not been sexually assaulted. But it does not mean I may not. It does not mean that my best friends or my sister may not. It does not mean that millions of women, along with men, may not. Though there is the hope that we may someday live in a world without a rape culture, it is not yet a reality. However, we can do something to help those who fall victim to the rape culture, and to validate that sexual assault is an abhorrent crime. Give them the ability to preserve their rape kits. Give them the ability to have a medical examination without having to worry about the cost. Give them the ability to have statutory rights. And through these rights, let it be known that this crime is unacceptable. Let it be known that now begins the fight against sexual assault.',
									url: 'https://actonthis.org/causes/rise-california'
								},
								CO: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Emily Ivker',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-colorado'
								},
								CT: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Mae Flexer (D)',
									status: 'Preparing to file bill',
									riser: 'Sergio Lopez',
									narrative: 'I’m a student at Yale University, originally from the California Bay Area, and currently serving as Connecticut State Director for Rise. In 2013, I was one of the founding members of Students Against Sexual Violence at Yale, a coalition of student leaders, law students, and alumni which was formed to advocate for reform of sexual assault policies at Yale and was featured in Huffington Post, The New Haven Register, and The New York Times. The group was founded on a philosophy of decentralizing leadership to empower members to tell their stories in order to bring about concrete policy change. Discussions between SASVY and the Yale administration led to a slate of reforms by the university, including the permanent formation of a Title IX Student Advisory Board to ensure student voice in the process. In addition, I’ve done legislative advocacy work in the Connecticut state legislature on women’s rights, healthcare, and other issues. I’m currently at work on a book about the origins of Title IX law, which was shaped through a coalition of pioneering student activists and public interest lawyers, correcting the historical record by placing the incredible women who worked to shape the law at the center of their own story.',
									url: 'https://actonthis.org/causes/rise-connecticut'
								},
								DE: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Williams (D) and Senator Poore (D)',
									status: 'Preparing to file bill',
									riser: 'Sage Carson',
									narrative: 'I am passionate about RISE because I am a advocate, activist, and survivor of sexual assault. After going public as a survivor many other survivors began reaching out and sharing their story with me. I learned that many survivors, like myself, had not gotten medical attention or engaged in the criminal justice process because they feared how they would be treated. I also spoke with survivors who had received medical exams and later decided that they did want to report their rape to the police, but found that their kits had been destroyed. As a survivor and advocate I have learned that though rape is a horribly violating experience, often the aftermath of an attack can be just as, if not more, traumatizing. I am lucky enough to have the privilege to speak out about what myself and other survivors have experienced, and because of that I am working with RISE to limit the retraumatization for survivors in Delaware.',
									url: 'https://actonthis.org/causes/rise-delaware'
								},
								FL: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-florida'
								},
								GA: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								HI: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								IA: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Liz Bennett (D) and Bill Anderson (D)',
									status: 'Bill intent filed',
									riser: 'Maridith Morris',
									narrative: 'I am motivated to join with RISE because I am a sexual assault survivor and a sexual assault nurse examiner. I have witnessed the anguish and betrayal my patients experience when they learn they have no right to their testing information, if their kit is tested at all.  This information is not only forensic evidence, it is health information. Sexual assault survivors did not ask to be in the position they are in, and the systems set up to bring justice should not bring further pain and trauma.  That’s why I am joining with RISE to bring true justice to survivors of sexual assault.',
									url: 'https://actonthis.org/causes/rise-iowa'
								},
								ID: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								IL: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								IN: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Cindy Ziemke (R), Rep Linda Lawson (D)',
									status: 'Bill intent filed',
									riser: 'Grace Watkins',
									narrative: 'When I was 18 I was raped by a Notre Dame athlete while his friends filmed. I was hospitalized for my injuries at a facility that did not have Sexual Assault Nurse Examiners on staff. I was told that I would have to pay thousands of dollars for a rape kit, which I simply could not afford. I did not know that this was a violation of Indiana law. The untrained nurses told me that I wasn’t “really assaulted”, despite treating and documenting my open cuts and tissue damage. My hospital experience was as horrific as the assault itself. In the following months and years, I found myself dwelling just as much on the callousness of the nurses and the lost opportunity of my rape kit as I did on the assault itself. I came to understand that this is what it feels like to have your rights denied. Injustice is not just bad rules, it is a collection of deeply painful lived experiences. I still struggle daily with what happened to me, and I am frustrated by my inability to express myself in ways that are new or compelling enough to help others understand. In my victim impact statement I even wrote, “I am angry and in pain and so, so tired. I apologize for the bluntness of my words, but I don’t know how to make myself any clearer.” I have only found solace in community with other survivors and those willing to help our efforts to improve institutionalized responses to sexual violence. I am very passionate about my work, but angry that I have to do it. I mourn for the interests I had prior to being raped, which receive less time and attention now that I have devoted my career path to prevention and response efforts. The trauma of a rape is not isolated to its direct aftermath, but also in the tragedy of every subsequent hour lost. Time that I spent parsing through the particularities of FERPA with Notre Dame’s General Counsel could have been spent reading, writing, or laughing with friends. At any rate, I continue to fight because I can’t abandon these problems now that I know they are there. And I know that I am not alone in this.',
									url: 'https://actonthis.org/causes/rise-indiana'
								},
								KS: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								KY: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								LA: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								MA: {
									fillKey: 'Full Impl',
									sponsors: "Representative Tricia-Farley Bouvier, Senator Cindy Creem, 31 bipartisan Co-Sponsors",
									status : "Passed Unanimously through House and Senate; Signed by Governor Baker",
									riser : "Amanda Nguyen and Sophie Gould",
									narrative : "This legislation was born from my experience with a broken justice system. I am a rape survivor. I remember walking into the local area rape crisis center waiting room and seeing so many survivors there. The greatest injustice I have ever faced was not the act of rape itself, but the subsequent denial of my rights by the country I love. I grew up believing that America is special because it recognizes universal, inalienable rights. But as a rape survivor, I learned that not all are equal in the eyes of the law. Survivors are continually re-victimized by the very system that was built to seek justice for them. It’s completely unconscionable that a survivor in one state would have a completely different set of rights than a survivor in another state. In building a legal argument for why I deserve to know where the DNA samples taken from my body were stored, I found a patchwork of rights across America. Two survivors shouldn’t have two completely different sets of rights just because they are in two different states. Justice should not depend on geography. My story with a broken system is not mine alone. In facing all of these disparities I realized I had a choice. Accept the injustice or re-write the law. So I, along with an incredible team, wrote this bill. Now it is Federal law and Massachusetts law. I’m going to be honest. Talking about something so personal is scary. But I’m sharing this because I hope you see the importance of these civil rights and I hope that you join us to champion these rights in your state. ",
									victory: true,
									url: 'https://actonthis.org/causes/rise-massachusetts'
								},
								MD: {
									fillKey: 'Partial Impl',
									sponsors: 'Delegate Shelly Hettleman',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-maryland'
								},
								ME: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								MI: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Kristy Pagan',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-michigan'
								},
								MN: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Jamie Cheever',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-minnesota'
								},
								MO: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								MS: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								MT: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NC: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: 'Research and outreach',
									riser: 'Patty Killmer',
									narrative: 'I am a victim of sexual assault and the law failed me. My story started over 40+ years ago when I was a little girl. When you are little it’s hard to run away or have a voice and it’s hard to understand that the man who is supposed to protect you is leaving you with fear and confusion. When I was thirteen years old I was admitted into the emergency room in fear that I may have appendicitis. After an exam, it was apparent that the nurses and doctors knew, based on their questioning, that I was being abused. Well, with my father outside the door- I didn’t dare say a word! A few years later, knowing that I needed help, I went to Catholic Charities to request counseling (a free service).With much apprehension, I tell my story to three nuns and they sat and cried for me. They cried but they didn’t report or do anything else for that matter. These professionals are there to help, guide, save lives and to report abuse, yet they sent me home without raising any red flags. They failed; they failed to give a young girl a voice. Decades later, reading and hearing hundreds of sexual assault stories, some of those stories are from people closest to me, I am appalled that the justice system is still failing- as it failed me. Why do survivors go through so much before anyone would listen? Why are their lives disrupted again through the process? It was time; it was time for me to do something. This brought me to RISE. Why RISE, you ask? It is the guts and the perseverance of these brilliant young men and women who put this federal bill in place. Most of all, the hope that these social innovators can change America is what inspires me. RISE is the voice and the force that helps survivors heal and seek justice. It is time- it is time for me to speak up and to be an advocate for those who need to be heard. I am fortunate to be part of this team and it is my way of supporting survivor’s civil rights.',
									url: 'https://actonthis.org/causes/rise-north-carolina'
								},
								ND: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NE: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: 'Preparing for next session',
									riser: 'Julia Reilly',
									narrative: 'In November of 2010, I was sexually assaulted. I was not raped, for which I feel a profound, albeit twisted, gratitude. Experts can disagree about whether what happened to me was technically illegal, as the country I was in at the time has a flimsy patchwork of laws on sexual violence, with even flimsier application. Although I was a mere tourist, I knew enough about the country to know that if I reported what happened to me, I risked being charged with a crime myself—that of “illicit sexual relations.” Flying out of there, I felt deep relief and pride that I come from a different place. I told myself that if this had happened to me at home, then surely I would report it, surely I would pursue justice, as there was a system to pursue it with me. What happened to me abroad sensitized me to a whole world of experiences that had been simmering under the surface of my home. I noticed that I knew many women who had experiences similar to, or far beyond, mine. Like I did, these women understood that what happened to them was a crime. All of them decided not to report. They understood the obstacles they would face, if not in detail, then certainly in degree. They all found other ways they wanted to occupy the first years of their adult lives. I quickly accepted that I could never hold my attacker to account. This was a surprisingly easy peace to make, as I had the youthful confidence that I came from a place of more protection, that I was privileged by a society with strong structures in place to address these crimes, and that my society held the standard for others to be better. Indeed, much of the sadness, rage, and loss I felt after my assault came when I thought of the millions of women who could not just fly out of that country, whose struggle for protection in their own legal system is held up around the world as a hallmark of the continuing scourge of violence against women. I still wonder how many of them have crossed him, as I did, alone and unaware. As I stayed with the stories I heard at home, I began to realize that so many of the blithe assumptions I had about the protections that would be afforded me here were simply untrue. Hearing stories of countless survivors, I realized that the overwhelming truth of their experience is that they fight against the current of the system, when they should be buoyed up by it. I can accept this from a country that is not my own, with a culture over which I can claim no ownership, with a legal system often cited as an international example of the failure to protect women from violence. However, I cannot accept this from my own country, and the magic thing about this country is that I do not have to. That is why I am here.',
									url: 'https://actonthis.org/causes/rise-nebraska'
								},
								NH: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NJ: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NM: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NV: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								NY: {
									fillKey: 'Partial Impl',
									sponsors: 'Assemblywoman Simotas (D)',
									status: 'Preparing to file bill',
									riser: 'Amanda Wingle',
									narrative: 'In the early morning hours of April 11, 2008, I was raped after a night of partying with friends. I came from a conservative Catholic family and had grown up hearing messages about victims “asking for it” by consuming alcohol, wearing a short skirt, any number of imagined offenses which I was taught to believe somehow justified the violation of another’s body in the most intimate and horrific way possible. So, because of my upbringing and the fear that I would be blamed for what happened, I was not going to go to the hospital or report to the police. It was never even an option in my mind that anyone would take this seriously; I had brought it on myself, after all (or so I believe at the time). I knew I needed medical attention so instead opted for Planned Parenthood, where I underwent a pelvic exam, STD testing, HIV testing, and received the morning-after pill. One of the experiences at Planned Parenthood that stands out in my mind the most was the day I was tested for HIV at the 3-month mark. It was an oral swab which took about 20 minutes to process. Those 20 minutes were among the most intense of my life. I sat there, terrified, feeling lightheaded and dizzy. Of all the possible outcomes of this incident, HIV was by far the scariest to me. The test stick looked like a pregnancy test in that there was one “control” line that turned blue to ensure the test was working; the second line would only turn blue if HIV antibodies were present and the test was positive. My vision played tricks on me as I sat there and tried not to look at, but couldn’t look away from, the test; I could swear I saw that second line turn blue multiple times. Thankfully, it never did. I struggled silently with this incident until over a year later when I finally disclosed to my longtime nurse practitioner. The only reason I disclosed was because I was struggling in school and thought that this incident might have something to do with it. She responded with immense compassion and concern, encouraged me to get into counseling, and regularly checked in with me for the rest of the duration of our patient-provider relationship. The timeline gets fuzzy, but after awhile I decided I wanted to try to make something positive out of this experience, so I began volunteering with the RAINN Online Hotline in the hopes that I could keep someone else from feeling as alone as I had felt. I was also a medical student at the time and designed curricula and programming around issues of sexual assault and domestic violence for my fellow medical professionals. I wanted every patient to have the same positive, life-changing experience that my nurse practitioner provided for me. We did an Interpersonal Violence Awareness week during which providers from local rape crisis centers, DV agencies, the ER, etc. would come in and speak about working with patients who were survivors of these heinous crimes. We also developed an extensive curriculum for second year medical students about working with sexual assault survivors specifically. I worked with the RAINN Speakers Bureau to find a survivor who had underwent the evidence collection process in the ER to come in and speak about that experience. Her name was Lydia Cuomo, and in addition to participating with my project she was also championing a “rape is rape” bill in the NYS Legislature to change the definition of rape under NYS law. I attended a press conference about this bill and this is how I first became familiar with Assemblywoman Simotas as she was the lead sponsor on the bill. Eventually I got to a point where I realized medical school was no longer where I should be. I was miserable, anxious, depressed, struggling academically, and I just didn’t want to be in medicine anymore. After some self-reflection I realized that the only things I was enjoying or feeling any kind of motivation for were the RAINN Online Hotline and the medical school curriculum I was developing. I took this as a sign that I needed to get out of medical school and pursue different avenues. So that is what I did -- in October 2014 I left medical school. By April of 2015 I had been employed by my local domestic violence agency as a residential counselor -- essentially the lowest rung on the ladder. I went from looking forward to a 6-figure salary to making $11/hour at the domestic violence shelter. I’m sure people thought I was crazy but I could not sustain the medical school lifestyle anymore, and I was immensely happier and more satisfied working at the DV shelter that I had been in medical school. Since April 2015 I have been promoted several times to case manager, courtroom advocate, and as of November 2016 I became the Program Services Coordinator for the department. I am returning to school this January 2017 for graduate level classes in women and public policy at SUNY Albany. I love my work immensely, but one of the most difficult parts is seeing my clients struggle to navigate a legal system which often does not serve their needs in the way that it should. Hardly anything is easy or straightforward, and often times it seems like it’s one thing after the other for my clients. Ultimately it is a combination of all my experiences that led me to become interested in RISE. I knew how long that 20 minutes waiting for my HIV test felt, so I can only imagine the stress and anxiety affiliated with having a rape kit out there somewhere, but not knowing its status, whether it has been tested, or even if it exists anymore, as some state laws allow the kits to be destroyed after as little as 30 days. I can’t imagine constantly just WAITING for the phone to ring -- have they tested the kit? Did they find a perpetrator? And if so, what comes next? I also saw the struggles faced by survivors I spoke with through both RAINN and my full time job with the DV agency, and I am moved to make things better for them. In many cases they do everything they are “supposed” to do and still do not receive justice. We tell them to report it, to go to the ER, to do all these really hard, retraumatizing things, and then after they do it we do not give them the support or resolution that they need. To me, what RISE is doing seems like a very common sense, straightforward approach to removing some of the roadblocks that should not exist in the first place. If I had to summarize this in one sentence, it would be that what we put survivors through is completely unacceptable, it has to be fixed, and I want to be a part of the solution.',
									url: 'https://actonthis.org/causes/rise-ny'
								},
								OH: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: 'Research and Outreach',
									riser: 'Nadia Dawisha and Selena Baumgardner',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-ohio'
								},
								OK: {
									fillKey: 'Partial Impl',
									sponsors: 'Senator Floyd (D), Rep Munson (D)',
									status: 'Bill filed',
									riser: 'Danielle Tudor',
									narrative: `As a rape survivor, I have experienced several areas of the criminal justice system that were intended to serve and protect me.  I was failed at many points and junctures but it has only served to make me more determined to make our system more "victim" friendly.  The most basic principle is for a sexual assault victim to know what their rights are.  You cannot exercise rights you don't know you have.  I think what really became the tipping point for me was in June of 2012 when the Oregon State Board of Parole and Post-Prison Supervision made the decision that I was not a victim of rape by Portland's "Jogger Rapist" Richard Gillmore that could give a victim impact statement at his upcoming parole hearing.  I didn't receive justice because the statute of limitations had expired. (3-years at the time). It was my evidence, a composite sketch of Gillmore, that solved the case, 7 years later.  I went through the trial process for Gillmore, knowing he would not be tried for my rape, or 7 others.  I understand what it means to be raped, report to law enforcement, go through the trial process and face that mountain again 20 years later at parole hearings.  None of it is or was easy, but I've turned into a warrior because of it.`,
									url: 'https://actonthis.org/causes/rise-oklahoma'
								},
								OR: {
									fillKey: 'Full Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Jackie Swanson and Brenda Tracy',
									narrative: '',
									victory: true,
									url: 'https://actonthis.org/causes/rise-oregon'
								},
								PA: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Michael Schlossberg',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-pennsylvania'
								},
								RI: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Teresa Tanzi',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-rhode-island'
								},
								SC: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								SD: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								TN: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								TX: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Wendy Davis',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-texas'
								},
								UT: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-utah'
								},
								WA: {
									fillKey: 'Full Impl',
									sponsors: 'Senator Ann Rivers (R)',
									status: 'Bill filed',
									riser: 'Leah Griffin',
									narrative: 'I was raped in April of 2014, and encountered obstacles in every part of a system that was supposed to assist me. The hospital turned me away. The police ignored me. The prosecutors blamed me. The treatment of rape survivors must improve, and to that end I have emailed, called, and collaborated with as many stakeholders as possible. I testified for HB1068 to mandate rape kits be tested in Washington State. I serve on the Sexual Assault Forensic Examination Task Force which will make recommendations for action to the legislature. I met with Sen Patty Murray’s staff, and she drafted The Survivor’s Access to Supportive Care Act based on my experience of being turned away from the ER.',
									victory: true,
									url: 'https://actonthis.org/causes/rise-washington'
								},
								WI: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'John Scanlon',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-wisconsin'
								},
								WV: {
									fillKey: 'Partial Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-west-virginia'
								},
								WY: {
									fillKey: 'No Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'RISER NEEDED',
									narrative: ''
								},
								VA: {
									fillKey: 'Full Impl',
									sponsors: 'SPONSORS NEEDED',
									status: '',
									riser: 'Lara McLoed',
									narrative: '',
									victory: true,
									url: 'https://actonthis.org/causes/rise-virginia'
								},
								VT: {
									fillKey: 'Partial Impl',
									sponsors: 'Rep Maxine Grad (D)',
									status: '',
									riser: 'RISER NEEDED',
									narrative: '',
									url: 'https://actonthis.org/causes/rise-vermont'
								},
							}}
							labels
						/>
					</div>
				</div>
				{/*<div className="footer">
					<p className="map-footer">
						Copyright &#169; 2017 <a href="http://www.risenow.us/" className="rise">
							Rise Up, Inc
						</a>
					</p>
				</div>*/}
			</div>
		);
	}
}
