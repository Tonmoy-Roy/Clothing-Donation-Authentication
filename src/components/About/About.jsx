import React from 'react';

const About = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='mt-5 mb-[19vh] p-5 md:w-[60vw]'>
                {/* <Helmet><title>About</title></Helmet> */}
                <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">About Us</h2>
                <p className=' mb-5'>Welcome to <span className='font-bold'>Clothing Donation</span> We started Clothing Donation with a simple yet profound vision: to bridge the gap between abundance and need within our communities. We observed the vast amount of perfectly usable clothing often discarded, while many individuals struggle to access basic necessities. This inspired us to create a streamlined, efficient, and compassionate solution for clothing donation.</p>
                <p className=' mb-5'> <span className='font-bold'>Our Mission</span> <br />
                    To empower communities by facilitating the easy and impactful donation of pre-loved clothing. We aim to:

                    Reduce Waste: By extending the life cycle of clothing, we contribute to environmental sustainability.
                    Support Individuals: Provide dignity and comfort to those facing hardship, empowering them to thrive.
                    Build Community: Create a seamless connection between those who have to give and those who are in need.
                    We are committed to transparency, efficiency, and making the donation process as rewarding as possible for our donors, and as beneficial as possible for our recipients. Every piece of clothing has a story, and we help it find a new chapter.</p>
                <p><span className='font-bold'>Our Vision <br /> </span>That's why we've created this platform: to make it incredibly easy for you to donate your gently used clothes and see the tangible impact of your generosity. We partner with clothing donation to ensure that every donation reaches the hands of someone who truly needs it, whether they are:

                    Families recovering from [e.g., natural disasters]
                    Individuals transitioning out of homelessness
                    Children needing school uniforms
                    Anyone experiencing unexpected hardship
                    Your contribution, no matter how small, helps us clothe individuals and foster a spirit of shared humanity. Thank you for being a part of our mission.</p>
            </div>
        </div>
    );
};

export default About;