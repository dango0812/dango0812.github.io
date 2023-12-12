import ResumeIntroduce from '../resume-introduce'
import ResumeContactInformation from '../resume-contact-information'
import ResumeAwards from '../resume-awards'
import ResumeCareerExperience from '../resume-career-experience'

export default function ResumeView() {

    return (
        <>
            <div className="flex flex-col gap-4 px-4">
                <ResumeIntroduce />
                <div className='lg:flex'>
                    <div className='flex flex-col gap-4'>
                        <ResumeContactInformation />
                        <ResumeAwards />
                    </div>
                    <ResumeCareerExperience />
                </div>
            </div>
        </>
    )
}