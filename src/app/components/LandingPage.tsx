import { Button } from "@/components/ui/button";

const LandingPage = () => {
    return(
        <>
        <div className="h-screen bg-black">
        <div className="p-48 flex flex-col justify-center items-center align-middle gap-5">
        <h1 className="font-sans text-5xl text-white text-center">97683392 days later, and you’re still procrastinating. Let’s change that today</h1>
        <Button>Get Started</Button>
        </div>
        </div>
        </>
    )
}

export default LandingPage;