import { 
    Page, 
    SectionHowToCreatePortfolio, 
    Title, 
    Text, 
    ContainerCreationPortfolioMap, 
    SectionExplorePortfolios, 
    ListContainer, 
    List, 
    ContainerListNumber,
    NumberText, ListContent, 
    ListContentTitle, 
    ListContentText, 
    Header} from "./styles";


export function Portfolio() {
    return (
        <Page>
            <SectionHowToCreatePortfolio>
                <Header>
                <Title>Portfolios de Investimentos</Title>
                <Text>
                    Explore expertly crafted portfolios tailored to diverse investment strategies
                    and market themes.
                </Text>
                </Header>

                <ContainerCreationPortfolioMap>
                    <ListContainer>
                        <List>
                            <ContainerListNumber>
                            <NumberText>1</NumberText>
                            </ContainerListNumber>
                            
                            <ListContent>
                                <ListContentTitle>Choose Portfolio</ListContentTitle>
                                <ListContentText> 
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Porro optio, veritatis temporibus illo repudiandae quas nesciunt pariatur consectetur! 
                                    Odio, alias repellendus maiores ducimus id.
                                    </ListContentText>
                            </ListContent>
                        </List>

                        <List>
                            <ContainerListNumber>
                            <NumberText>2</NumberText>
                            </ContainerListNumber>
                            
                            <ListContent>
                                <ListContentTitle>Choose Portfolio</ListContentTitle>
                                <ListContentText>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Porro optio, veritatis temporibus illo repudiandae quas nesciunt pariatur consectetur! 
                                    Odio, alias repellendus maiores ducimus id.
                                    </ListContentText>
                            </ListContent>
                        </List>

                        <List>
                            <ContainerListNumber>
                            <NumberText>3</NumberText>
                            </ContainerListNumber>
                            
                            <ListContent>
                                <ListContentTitle>Choose Portfolio</ListContentTitle>
                                <ListContentText>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Porro optio, veritatis temporibus illo repudiandae quas nesciunt pariatur consectetur! 
                                    Odio, alias repellendus maiores ducimus id.
                                    </ListContentText>
                            </ListContent>
                        </List>

                    </ListContainer>
                </ContainerCreationPortfolioMap>
            </SectionHowToCreatePortfolio>

            <SectionExplorePortfolios>

            </SectionExplorePortfolios>
        </Page>
    )
}