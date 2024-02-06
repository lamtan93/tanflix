import React from 'react'
import { render, screen } from '@testing-library/react'
import About from './About'
import Dico from '../../utils/dico'
import { CONFIG_API } from '../../utils/api'
import { IntersectionObserverMock } from '../../utils/mocksTest'
import ProviderWrapper from '../../utils/providerWrapper'

beforeAll(() => (() => new IntersectionObserverMock())())

const renderComponent = () => {
  const { container } = render(
    <ProviderWrapper>
      <About />
    </ProviderWrapper>
  )

  return container
}

test('should return general presentation title', () => {
  renderComponent()
  const titlePresentation = screen.getByRole('heading', {
    name: Dico.SECTION_ABOUT.TITLE_PRESENTATION_GENERAL,
  })

  expect(titlePresentation).toBeInTheDocument()
})

test('should return presentation title and paragraph 1', () => {
  renderComponent()
  const titlePresentation1 = screen.getByRole('heading', {
    name: Dico.SECTION_ABOUT.TITLE_PRESENTATION_1,
  })

  const paragraphPresentation1 = screen.getByText(
    Dico.SECTION_ABOUT.PARAGRAPH_PRESENTATION_1
  )

  expect(titlePresentation1).toBeInTheDocument()
  expect(paragraphPresentation1).toBeInTheDocument()
})

test('should return presentation title and paragraph 2', () => {
  renderComponent()
  const titlePresentation1 = screen.getByRole('heading', {
    name: Dico.SECTION_ABOUT.TITLE_PRESENTATION_2,
  })

  const paragraphPresentation1 = screen.getByText(
    Dico.SECTION_ABOUT.PARAGRAPH_PRESENTATION_2
  )

  expect(titlePresentation1).toBeInTheDocument()
  expect(paragraphPresentation1).toBeInTheDocument()
})

test('should return button Learn more with correct attribute href', () => {
  renderComponent()
  const buttonLearnMore = screen.getByRole('button')
  expect(buttonLearnMore).toBeInTheDocument()
  expect(buttonLearnMore).toHaveTextContent(
    Dico.SECTION_ABOUT.BUTTONLINK_LEARN_MORE
  )
  expect(buttonLearnMore).toHaveAttribute('href', '/movies')
})

test('should return 3 videos', () => {
  const container = renderComponent()
  const videos = container.querySelectorAll('video')
  expect(videos).toHaveLength(3)
})

test('should return 3 videos with correct attribute source ', () => {
  const container = renderComponent()
  const videoSources = container.querySelectorAll('source')
  expect(videoSources[0].getAttribute('src')).toContain(
    CONFIG_API.BASE_VIDEO_URL_COMPOSITION_1
  )
  expect(videoSources[1].getAttribute('src')).toContain(
    CONFIG_API.BASE_VIDEO_URL_COMPOSITION_2
  )
  expect(videoSources[2].getAttribute('src')).toContain(
    CONFIG_API.BASE_VIDEO_URL_COMPOSITION_3
  )
})
