import { Header } from "./Header/Header"
import { Hero } from "./Hero/Hero"
import { Companies } from "./Companies/Companies"
import { Rectangle } from "./Rectangle/Rectangle"
import { ContentBlock } from "./ContentBlock/ContentBlock"
import { ContentBlockTwo } from "./ContentBlockTwo/ContentBlockTwo"
import { Solutions } from "./Solutions/Solutions"


export const App = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <Companies/>
            <Rectangle/>
            <ContentBlock/>
            <ContentBlockTwo/>
            <Solutions/>
        </>
    )
}