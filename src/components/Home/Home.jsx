import React, { useEffect } from 'react'
import MakingFabricSlider from '../MakingFabricSlider/MakingFabricSlider'
import YearsOfExperience from '../YearsOfExperience/YearsOfExperience'
import WelcomeToDaga from '../WelcomeToDaga/WelcomeToDaga'
import OurCategories from '../OurCategories/OurCategories'
import ActiveWear from '../ActiveWear/ActiveWear'
import OurMostViewedProduct from '../OurMostViewedProduct/OurMostViewedProduct'
import OurPartners from '../OurPartners/OurPartners'
import OurFabrics from '../OurFabrics/OurFabrics'
import HomeContactUs from '../HomeContactUs/HomeContactUs'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <div>
                <MakingFabricSlider />
            </div>
            <div>
                <YearsOfExperience />
            </div>
            <div>
                <WelcomeToDaga />
            </div>
            <div>
                <OurCategories />
            </div>
            <div>
                <ActiveWear />
            </div>
            <div>
                <OurMostViewedProduct />
            </div>
            <div>
                <OurPartners />
            </div>

            <div>
                <OurFabrics />
            </div>

            <div>
                <HomeContactUs />
            </div>
        </div>
    )
}

export default Home
