function SectionA() {
    return (
        <div className="p-[20px] h-[580px] w-full flex items-center justify-evenly">
            <div>
                <p className="text-[clamp(1rem,4vw,2rem)]">An SEO App</p>
                <p className="text-[clamp(1rem,3vw,1.8rem)] text-black/40">Delivering Values through Software and AI.</p>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2W1AMMQG79HoABTFtcKWO1z2U_HgDBmgOBw&s" />
            </div>
        </div>
    );
};

function SectionB() {
    return (
        <>
            <div>
                <p>Data-Driven SEO Services: Making Informed Decisions for Better Revenue</p>
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