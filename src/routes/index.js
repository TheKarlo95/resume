import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ResumeEnglish } from './ResumeEnglish'
import { ResumeCroatian } from './ResumeCroatian'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ResumeEnglish} exact />
      <Route path="/en" component={ResumeEnglish} exact />
      <Route path="/hr" component={ResumeCroatian} exact />
    </Switch>
  </BrowserRouter>
)
export * from './ResumeEnglish'
export * from './ResumeCroatian'
