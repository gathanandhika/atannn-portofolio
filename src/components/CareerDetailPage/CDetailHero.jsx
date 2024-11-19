import CDetailDesc from './CDetailDesc';
import { EXPERIENCES } from '../../constants';
import { useParams } from 'react-router-dom';

const CDetailHero = () => {
    const { company } = useParams(); // Mendapatkan 'company' dari URL

    const experience = EXPERIENCES.flatMap(category => category.experiences) // Perbaiki .items menjadi .experiences
        .find(experience => experience.company === company);

    if (!experience) {
        return <p>Career not found</p>; // Jika proyek tidak ditemukan
    }

    return (
        <div data-scroll-section className="pb-2 lg:mb-35 mt-[-50px]">
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-full">
                    <div className="flex flex-col items-start">
                        <p className="lg:my-20 my-12 lg:text-7xl text-4xl text-zinc-950 lg:px-24 px-8">
                            {experience.role}
                        </p>
                        <p className="lg:text-lg text-zinc-950 lg:px-24 px-8 lg:mt-[-30px]">
                            {experience.description}
                        </p>
                    </div>
                    <div className="items-start lg:px-12 lg:py-8">
                        <CDetailDesc />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CDetailHero;
