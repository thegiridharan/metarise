function SectionA() {
    return (
        <div className="p-[20px] h-[580px] w-full flex items-center justify-evenly">
            <div>
                <p className="text-[clamp(1rem,4vw,2rem)]">An SEO App</p>
                <p className="text-[clamp(1rem,3vw,1.8rem)] text-black/40">Delivering Values through Software and AI.</p>
            </div>
            <div className="h-[250px] w-[250px]">
                <img src="https://intersmart.ae/wp-content/uploads/2024/08/SEO-for-Small-Business.webp" />
            </div>
        </div>
    );
};

function SectionB() {
    return (
        <>
            <div>
                <div>
                    <p>We Will be soon</p>
                </div>
            </div>
        </>
    );
};

function CaseStudies() {
    return (
        <div>
            <div>
                <p>MetaRise SEO</p>
            </div>
        </div>
    );
};

async function Test() {

    const res = await fetch("/api/integrations");


    console.log(res);

    return (
        <p>Completed Successfully</p>
    );
};

export default function LandingPage() {

    return (
        <>
            <SectionA />
            <SectionB />
            <CaseStudies />
        </>
    );
};