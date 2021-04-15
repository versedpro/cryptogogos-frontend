import './App.css'
import 'react-multi-carousel/lib/styles.css'
import MintCountown from 'components/MintCountown/MintCountdown'
import Home from 'components/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DrawTrade from 'components/DrawTrade'
import Faq from 'components/Faq'
import Gallery from 'components/Gallery'
import Leaderboard from 'components/Leaderboard'
import MyCollection from 'components/MyCollection'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { UseWalletProvider } from 'use-wallet'
import AccountProvider from './contexts/AccountProvider'

function App() {
    return (
        <UseWalletProvider
            chainId={process.env.REACT_APP_ETHEREUM_CHAIN_ID}
            connectors={
                {
                    // TODO: use mainnet when in prod
                }
            }>
            <AccountProvider>
                <Router>
                    <div className="main-body text-center">
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/df2852a2b39ef0790c7acc806cdaca35" component={DrawTrade} />
                            <Route path="/faq" component={Faq} />
                            <Route path="/gallery" component={Gallery} />
                            <Route path="/leaderboard" component={Leaderboard} />
                            <Route
                                path="/df2852a2b39ef0790c7acc806cdaca35"
                                component={MintCountown}
                            />
                            <Route path="/mycollection" component={MyCollection} />
                        </Switch>

                        <section className="footer">
                            <Footer />
                        </section>
                    </div>
                </Router>
            </AccountProvider>
        </UseWalletProvider>
    )
}
export default App
