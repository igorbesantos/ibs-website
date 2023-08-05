import Head from "next/head";

function Header() {
    return (
        <header>
            <div className='header-item'>
                <span className='header-icon'>{'>_'}</span>
                <span className='header-title'>Igor Santos</span>
                <div className="nav-items-container">
                    <a className="nav-item">~/<span>(Início)</span></a>
                    <a className="nav-item">~/experiencia-profissional</a>
                    <a className="nav-item">~/sobre-mim </a>
                </div>
            </div>
            <div className='header-item'>
                <button>./contacte-me.sh</button>
                <svg className='light-mode-config' width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5" cy="15" r="11" stroke="black" stroke-width="2"/>
                    <path d="M23.455 7.04505C21.3452 4.93526 18.4837 3.75 15.5 3.75C12.5163 3.75 9.65483 4.93526 7.54505 7.04505C5.43526 9.15483 4.25 12.0163 4.25 15C4.25 17.9837 5.43526 20.8452 7.54505 22.955L15.5 15L23.455 7.04505Z" fill="black"/>
                </svg>
                <div className='language-config'>
                    <a><b>PT</b></a>/<a>EN</a>
                </div>
            </div>
        </header>
    );
}

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Igor Santos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </>
    );
}
