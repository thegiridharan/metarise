function SectionA() {
    return (
        <div className="relative h-screen w-full">
            <img
                src="https://bambooagile.eu/wp-content/uploads/2021/09/1-10.png"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Background"
            />
            <div className="h-full w-full absolute inset-0 flex flex-col items-start justify-center text-white bg-black/40 px-4 text-center bg-gradient-to-r from-black to-transparent">
                <p className="text-3xl md:text-5xl font-bold mb-4">MetaRise, An SEO App</p>
                <p className="text-lg md:text-2xl text-gray-200">Delivering Values through Software and AI.</p>
            </div>
        </div>
    );
};


function SectionB() {
    return (
        <>
            <div className="h-[250px] bg-accent flex flex-row p-[20px]">
                <a className="w-[350px]" href="/">
                    <p className="text-[28px] font-semibold">MetaRise</p>
                    <p className="text-[22px] text-gray-500">Delivering Values</p>
                </a>
                <div className="flex flex-row gap-[50px] justify-center w-full">
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-semibold">Application Review</p>
                        <a href="/docs" className="mt-[10px] hover:text-gray-600">Documentation</a>
                        <a href="/feedback" className="hover:text-gray-600">FeedBack</a>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-semibold">Application Usage</p>
                        <a href="/account" className="mt-[10px] hover:text-gray-600">LogIn / Register</a>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-semibold">Core Application Features</p>
                        <a href="/integrations" className="mt-[10px] hover:text-gray-600">Integrations</a>
                        <a href="/chats" className="hover:text-gray-600">ChatBot</a>
                        <a href="/monitoring" className="hover:text-gray-600">Monitoring</a>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-semibold">Value Added Features</p>
                        <a href="/changelog" className="mt-[10px] hover:text-gray-600">ChangeLog</a>
                        <a href="/settings" className="hover:text-gray-600">Settings</a>
                        <a href="/subscriptions" className="hover:text-gray-600">Subscriptions</a>
                    </div>
                </div>
            </div>
            <p className="bg-accent flex justify-center w-full h-[30px] items-center">All Rights Reserved @ MetaRise</p>
        </>
    );
};

export default function LandingPage() {

    return (
        <>
            <SectionA />
            <SectionB />
        </>
    );
};