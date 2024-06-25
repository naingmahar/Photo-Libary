import { BrowserView, MobileView } from "react-device-detect"
import { ELABELS } from "../../assets/static_string"
import { ColumnContainer, RowContainer } from "../../componet/atoms/Container/FlexContainer"
import {  Collapses } from "../../componet/atoms/collapse"
import { LogoDark } from "../../componet/atoms/icons/icons"
import { UnderLineFluid } from "../../componet/atoms/lineBreak"
import { ButtonLabel,  SmLabel } from "../../componet/atoms/typography/typography"
import HomeTopNavBar from "../../componet/organisms/topNavBar/homeTopNavBar"

const HeaderText = () => {
    return (
        <>
            <BrowserView>
                <div className="lg:text-6xl sm:text-2xl leading-relaxed font-bold mb-5">
                        Get Your Shop <br />  Online Today With <br /> Picoshop
                    </div>
            </BrowserView>
            <MobileView>
                <div className="text-1xl leading-relaxed font-bold mb-5">
                    Get Your Shop Online Today With Picoshop
                </div>
            </MobileView>
        </>
    )
}

const CreateShopButton = () => {
    return (
            <button className="btn lg:btn-lg btn-sm btn-neutral lg:mt-10 mt-3">
                <ButtonLabel>{ELABELS.hoemButton}</ButtonLabel>
            </button>
    )
}


export const Home = () => {
    return(
        <div className="w-screen">
            <HomeTopNavBar />
            <MobileView>
                <div className="flex flex-grow justify-center items-center mt-5">
                    <HeaderText />
                </div>
            </MobileView>
            <RowContainer className="justify-center items-center lg:px-20 sm:px-2">
                <ColumnContainer className="lg:py-20 justify-center items-center">
                    <img src="iphone-xr.png" height="auto" width="65%" />
                </ColumnContainer>
                <ColumnContainer className="justify-center">
                    <BrowserView><HeaderText /></BrowserView>
                    <p className="lg:text-2xl">{ELABELS.homeDescription}</p>
                    <BrowserView>
                        <CreateShopButton />
                    </BrowserView>
                </ColumnContainer>
            </RowContainer>
            <MobileView>
                <div className="flex flex-grow justify-end items-center mb-5 px-3">
                    <CreateShopButton />
                </div>  
            </MobileView>
            <ColumnContainer className="justify-center items-center mb-10">
                <div className="lg:text-4xl text-2xl font-semibold mb-5"> Start your shop now</div>
                <p className="lg:text-2xl"> 1... 2... 3... Go! </p>
            </ColumnContainer>

            <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 px-5">
                <BrowserView><div /></BrowserView>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://www.tooveys.com/files/default/no-photo.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Step 1</h2>
                        <p>Choose a unique link for your shop</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://www.tooveys.com/files/default/no-photo.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Step 2</h2>
                        <p>Add your products, delivery and paymentmethods</p>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://www.tooveys.com/files/default/no-photo.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Step 3</h2>
                        <p>Share your URL on your social media and earn money!</p>
                    </div>
                </div>
                <div></div>
            </div>

            <ColumnContainer className="justify-center items-center lg:my-20 my-5 mx-5">
                <div className="lg:text-4xl text-2xl  font-semibold mb-5"> Frequently asked questions</div>
                <p className="lg:text-2xl"> Everything you need to know bout the productnd billing.</p>
            </ColumnContainer>

            <Collapses className="lg:px-20 lg:mb-10 px-5 mb-5" data={[
                    {
                        label:`Yes, you can try us for free for 30 days. If you want, 
                                we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.`,
                        title:"Is there a free trial available?"
                    },
                    {
                        label:`Yes, you can try us for free for 30 days. If you want`,
                        title:"Can I change my plan later?"
                    },
                    {
                        label:`Yes, you can try us for free for 30 days. If you want`,
                        title:"What is your cancellation policy?"
                    },
                    {
                        label:`Yes, you can try us for free for 30 days. If you want`,
                        title:"Can other info be added to an invoice?"
                    },
                    {
                        label:`Yes, you can try us for free for 30 days. If you want`,
                        title:"How does billing work?"
                    },
                    {
                        label:`Yes, you can try us for free for 30 days. If you want`,
                        title:"How do I change my account email?"
                    },
                ]} 
            />

            <UnderLineFluid />

            <div className="flex flex-1 justify-center flex-col items-center pt-10 lg:px-28 px-5 mb-10" >
                <LogoDark  />
                <h4 className="lg:text-4xl font-semibold my-5">Let’s get started on something great</h4>
                <p className="lg:text-2xl mb-5">Join over 4,000+ startups already growing with Picoshop</p>
                <RowContainer className="justify-center items-center mb-10">
                    <button className="btn btn-ghost me-5">
                        <SmLabel>View More</SmLabel>
                    </button>
                    <button className="btn btn-neutral">
                        <ButtonLabel>Get Started</ButtonLabel>
                    </button>
                </RowContainer>

                <UnderLineFluid />

                <RowContainer className="pt-10">
                    <RowContainer>
                        <h5 className="text-sm font-semibold">© 2023 Picoshop. All rights reserved.</h5>
                    </RowContainer>
                    <RowContainer className="justify-end"> 
                        <span className="text-sm px-3">Terms</span> 
                        <span className="text-sm px-3">Privacy</span>  
                        <span className="text-sm px-3">Cookies</span>
                    </RowContainer>
                </RowContainer>
            </div>

        </div>
    )
} 