import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { CountryPage } from '../pages/CountryPage'
import { FlagsPage } from '../pages/FlagsPage'
import { HomePage } from '../pages/HomePage'
import { NoPageFound404 } from '../pages/NoPageFound404'
import { StatesPage } from '../pages/StatesPage'
export const AppRouter = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/states/:country">
                        <StatesPage />
                    </Route>
                    <Route path="/countries/:country">
                        <CountryPage />
                    </Route>
                    <Route path="/countries">
                        <FlagsPage />
                    </Route>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/404">
                        <NoPageFound404 />
                    </Route>
                    <Route path="*">
                        <NoPageFound404 />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}
