import ButtonOutline from "./ButtonOutline"
import PageSection from "./layout/page-section/PageSection"
import PageSectionHeader from "./layout/page-section/PageSectionHeader"
import SectionTitle from "./layout/page-section/PageSectionTitle"


const NewsletterCard = () => {
    return (
        <PageSection>
            <PageSectionHeader bgImg="bg-hero-3">
                <SectionTitle>Newsletter</SectionTitle>
            </PageSectionHeader>
            <div className="mx-auto w-4/5 my-4">
                <h3 className="font-sans-serif text-2xl lg:text-3xl font-normal text-brown-900 pb-4">Semi-regular Emails from E.M.</h3>
                <p>Sign up for updates, news, new book releases, and more fun from E.M. Denison</p>
                <ButtonOutline href="https://emdenison.us11.list-manage.com/subscribe?u=12b962f2de11d672395103e1e&id=5cfc518044" text="Join the Newsletter" />
            </div>
        </PageSection>
    )
}

export default NewsletterCard