import React from 'react'
import { About, Pricing, Reviewer } from '../components'
import reviewerListData from '../fakedata/reviewerListData'
import { scrollToViewId } from '../utils/utils'
import Dico from '../utils/dico'

function Home() {
  scrollToViewId('root')
  return (
    <>
      <About />
      <Pricing />
      <Reviewer
        title={Dico.SECTION_REVIEWER.TITLE_REVIEWER_HOME}
        withVideoBackground
        reviewerList={reviewerListData}
      />
    </>
  )
}

export default Home
