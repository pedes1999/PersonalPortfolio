
import githubfinder from '../assets/portfolio/githubfinder.png'
import housemarketplace from '../assets/portfolio/housemarketplace.png'
import weatherapp from '../assets/portfolio/weatherapp.png'
import coronavirus from '../assets/portfolio/coronavirus.jpg'
import trees from '../assets/portfolio/trees.png'
import feedbackmain from '../assets/portfolio/feedbackmain.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            title: 'GitHub User Finder',
            src: githubfinder,
            hrefgit: 'https://github.com/pedes1999/GitHubFinderApp',
            hrefdemo: 'https://gitfinder99.netlify.app',
            style: ''
        },
        {
            id: 2,
            title: 'House Marketplace',
            src: housemarketplace,
            hrefdemo: 'https://housemarketplace99.netlify.app/',
            hrefgit: 'https://github.com/pedes1999/MarketPlaceReactFirebase',
            style: ''
        },
        {
            id: 3,
            title: 'Weather App',
            src: weatherapp,
            hrefgit: 'https://github.com/pedes1999/ReactWeatherApp',
            hrefdemo: 'https://weatherapp1999.netlify.app',
            style: ''
        },
        {
            id: 4,
            title: 'Covid Web Project',
            src: coronavirus,
            hrefgit: 'https://github.com/pedes1999/WebProjectCovid',
            hrefdemo: '',
            style: 'hidden'
        },

        {
            id: 5,
            title: 'Feedback UI',
            src: feedbackmain,
            hrefgit: 'https://github.com/pedes1999/ReactWeatherApp',
            hrefdemo: '',
            style: 'hidden'
        },
        {
            id: 6,
            title: 'Multidimensional Structures',
            src: trees,
            hrefgit: 'https://github.com/pedes1999/MultidimensionalStructures',
            hrefdemo: '',
            style: 'hidden'
        },

    ]


    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here!</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {portfolios.map(({ title, id, src, hrefgit, hrefdemo, style }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <a href={hrefgit}><p className='text-2xl justify-center items-center mx-auto p-2 flex flex-col'>{title}</p></a>
                            <img src={src} alt="CovidWebProject" className='rounded-md duration-200 hover:scale-105 h-48 w-full' />
                            <div className='flex items-center justify-center'>
                                <button className={`w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 + ${style}`}><a href={hrefdemo}>Demo</a></button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={hrefgit}>Code</a></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio