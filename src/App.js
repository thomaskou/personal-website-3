import { Col, Container, Row, Stack } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { IoArrowForwardOutline, IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';

const iconOptions = {
    size: '1.25em',
};

const dateOptions = {
    month: 'short',
    year: 'numeric',
};

const dataLinks = [
    {
        text: "Email",
        link: "mailto:thomas.kou@uwaterloo.ca",
    },
    {
        text: "Resume",
        link: "files/resume.pdf",
    },
    {
        text: "LinkedIn",
        link: "https://linkedin.com/in/thomaskou",
    },
    {
        text: "GitHub",
        link: "https://github.com/thomaskou",
    },
];

const dataExperience = [
    {
        company: 'Citadel',
        team: 'Equity Quantitative Research & Global Trading',
        title: 'Software Engineer Intern',
        titleShort: 'SWE Intern',
        location: 'New York, NY',
        start: new Date('September 12, 2022'),
        end: new Date('December 16, 2022'),
        logo: 'logo_citadel.png',
        logoScale: 0.95,
        link: 'https://www.citadel.com/',
    },
    {
        company: 'Jane Street',
        title: 'Software Engineer Intern',
        titleShort: 'SWE Intern',
        location: 'New York, NY',
        start: new Date('May 31, 2022'),
        end: new Date('August 19, 2022'),
        logo: 'logo_janestreet.png',
        logoScale: 0.9,
        link: 'https://www.janestreet.com/',
    },
    {
        company: 'Meta',
        title: 'Software Engineer Intern',
        titleShort: 'SWE Intern',
        location: 'Menlo Park, CA',
        remote: true,
        start: new Date('January 18, 2022'),
        end: new Date('April 28, 2022'),
        logo: 'logo_meta.png',
        link: 'https://about.facebook.com/',
    },
    {
        company: 'NVIDIA',
        team: 'GeForce NOW',
        title: 'Software Engineer Intern',
        titleShort: 'SWE Intern',
        description: <>Full-stack for <a href='https://www.nvidia.com/en-us/geforce-now/' target='_blank' rel='noopener noreferrer'>GeForce NOW</a> content management system.</>,
        location: 'Santa Clara, CA',
        remote: true,
        start: new Date('May 3, 2021'),
        end: new Date('August 20, 2021'),
        logo: 'logo_nvidia.png',
        link: 'https://www.nvidia.com/',
    },
    {
        company: 'FISPAN',
        team: 'ERP Dev Team',
        title: 'Software Developer Co-op',
        titleShort: 'SDE Co-op',
        description: 'Full-stack fintech dev for ERP integrations team.',
        location: 'Vancouver, BC',
        remote: true,
        start: new Date('September 1, 2020'),
        end: new Date('December 31, 2020'),
        logo: 'logo_fispan.png',
        logoScale: 0.9,
        link: 'https://fispan.com/',
    },
    {
        company: 'Wish',
        team: 'Product Payments',
        title: 'Software Engineer Intern',
        titleShort: 'SWE Intern',
        description: 'Python backend dev for user payments.',
        location: 'San Francisco, CA',
        start: new Date('January 6, 2020'),
        end: new Date('April 17, 2020'),
        logo: 'logo_wish.png',
        logoScale: 0.8,
        link: 'https://www.wish.com/',
    },
    {
        company: 'Prizm Media',
        title: 'Junior Web Developer Intern',
        titleShort: 'Web Intern',
        description: <>Full-stack &amp; QA for <a href='https://rxtome.com/' target='_blank' rel='noopener noreferrer'>RxtoMe</a> prescription ordering service.</>,
        location: 'Vancouver, BC',
        start: new Date('April 29, 2019'),
        end: new Date('August 23, 2019'),
        logo: 'logo_prizm.png',
        link: 'https://www.prizmmedia.com/',
    },
];

const dataEducation = {
    school: 'University of Waterloo',
    degree: 'Bachelor of Computer Science, Honours, Co-op',
    degreeShort: 'B.C.S. Computer Science',
    location: 'Waterloo, ON',
    start: new Date('September 1, 2018'),
    end: new Date('April 30, 2023'),
};

const App = () => {
    return (
        <div className='App'>
            <IconContext.Provider value={iconOptions}>
                <Container>
                    <Row>
                        <Col>
                            <div className='section section-header'>
                                <div>
                                    <Stack direction='vertical' gap={4}>
                                        <div className='header-photo'>
                                            <img src={'photos/self-linkedin.jpg'} />
                                        </div>
                                        <div>
                                            <h1>Thomas Kou</h1>
                                            <h3>Senior CS Student @ UWaterloo</h3>
                                            <Stack direction='horizontal' gap={2}>
                                                <IoLocationOutline />
                                                <p>Vancouver, BC, Canada</p>
                                            </Stack>
                                        </div>
                                        <Stack direction='horizontal' gap={4}>
                                            {dataLinks.map((link, linkIndex) => (
                                                <a
                                                    href={link.link}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='header-link'
                                                    key={'header-link-' + linkIndex}
                                                    {...{download: link.download}}
                                                >
                                                    {link.text}
                                                </a>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row><Col><hr /></Col></Row>
                    <Row>
                        <Col>
                            <div className='mt-5 section section-experience'>
                                <h2>Experience</h2>
                                {dataExperience.map((data, dataIndex) => (
                                    <div className='experience-card' key={'experience-card-' + dataIndex}>
                                        <Stack direction='horizontal' gap={4} className='align-items-start'>
                                            <div className='experience-logo'>
                                                {data.logo && <img src={'logos/' + data.logo} style={{
                                                    maxWidth: (data.logoScale ? data.logoScale * 100 : 100) + '%',
                                                    maxHeight: (data.logoScale ? data.logoScale * 100 : 100) + '%'
                                                }} />}
                                            </div>
                                            <div className='experience-info'>
                                                <a className='company-link' href={data.link} target='_blank' rel='noopener noreferrer'>
                                                    <Stack direction='horizontal' gap={2}>
                                                        <h3>{Date.now() < data.start && 'Incoming '}{data.titleShort} @ {data.company}</h3>
                                                        <IoArrowForwardOutline size={'1em'} />
                                                    </Stack>
                                                </a>
                                                {data.description && <p className='experience-description'>{data.description}</p>}
                                                <Stack direction='horizontal' gap={2} className='mt-2'>
                                                    <IoCalendarOutline />
                                                    <p>{data.start.toLocaleString('default', dateOptions)} &ndash; {data.end.toLocaleString('default', dateOptions)}</p>
                                                </Stack>
                                                <Stack direction='horizontal' gap={2} className='mt-1'>
                                                    <IoLocationOutline />
                                                    <p>{data.location}{data.remote && ' (Remote)'}</p>
                                                </Stack>
                                            </div>
                                        </Stack>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='mt-5 section section-education'>
                                <h2>Education</h2>
                                <div className='education-info'>
                                    <h3>{Date.now() < dataEducation.end && 'Pursuing '}{dataEducation.degreeShort} @ {dataEducation.school}</h3>
                                    <Stack direction='horizontal' gap={2} className='mt-2'>
                                        <IoCalendarOutline />
                                        <p>{dataEducation.start.toLocaleString('default', dateOptions)} &ndash; {dataEducation.end.toLocaleString('default', dateOptions)}</p>
                                    </Stack>
                                    <Stack direction='horizontal' gap={2} className='mt-1'>
                                        <IoLocationOutline />
                                        <p>{dataEducation.location}</p>
                                    </Stack>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row><Col><div className='util-vspacing' /></Col></Row>
                    <Row><Col><hr /></Col></Row>
                    <Row><Col><div className='util-vspacing' /></Col></Row>
                    <Row>
                        <Col>
                            <div className='d-flex justify-content-center section-footer'>
                                <p>&copy; Thomas Kou, {new Date().getFullYear()}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row><Col><div className='util-vspacing' /></Col></Row>
                </Container>
            </IconContext.Provider>
        </div>
    );
};

export default App;
