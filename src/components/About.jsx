import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screeen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About</p>
                </div>

                <p className='text-xl mt-20'>
                    Hello,I'm Periklis Desyllas an aspiring,young Computer Engineer.I'm hardworking,dedicated and above all eager to learn and contribute to the tech industry.I have the ability to work exceptionally in a team,since I have seen through many projects at my University.
                </p>
                <br />
                <p className='text-xl' >
                    Having worked with a plethora of popular technologies ranging from web development to Machine Learning and Neural Networks,I now aim to enter the tech industry and learn to work in a professional enviroment.I sure have a lot to learn,but given my enthusiasm I truly believe learning will be smooth and fun.
                </p>
            </div>
        </div>
    )
}

export default About