import React from 'react'

export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str
  }
  return `${str.slice(0, num)}...`
}

export const scrollToViewId = (id: string) => {
  document
    .getElementById(`${id}`)
    ?.scrollIntoView({ block: 'start', behavior: 'smooth' })
}

export const stopVideo = () => {
  const iframe = document.querySelector('iframe')
  const video = document.querySelector('video')

  if (iframe) {
    const iframeSrc = iframe.src
    iframe.src = iframeSrc
  }
  if (video) {
    video.pause()
  }
}

export const observer = (section: string) =>
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`scroll--show-${section}`)
      } else {
        entry.target.classList.remove(`scroll--show-${section}`)
        entry.target.classList.add(`scroll--hidden-${section}`)
      }
    })
  })

export const scrollAnimation = (section: string) => {
  const hiddenElements = document.querySelectorAll(`.scroll--hidden-${section}`)
  return {
    start: () =>
      hiddenElements.forEach((el) => {
        observer(section).observe(el)
      }),
    stop: () =>
      hiddenElements.forEach(() => {
        observer(section).disconnect()
      }),
  }
}

export const scrollVertical = (
  event: React.WheelEvent<HTMLDivElement>,
  containerId: string
) => {
  const container = document.getElementById(containerId)
  if (container) {
    container.scrollLeft += event.deltaY > 0 ? 20 : -20
  }
}

export const scrollBody = (isScroll: boolean) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (!isMobile) {
    document.body.style.cssText = `overflow: ${isScroll ? 'auto' : 'hidden'}`
  }
}

export const playOrPauseVideoById = (
  idVideo: string,
  actionType: 'play' | 'pause'
) => {
  const currentVideo: HTMLVideoElement = document.getElementById(
    idVideo
  ) as HTMLVideoElement
  const playPromise = currentVideo.play()
  if (playPromise) {
    playPromise.then(() => {
      if (actionType === 'pause') currentVideo.pause()
    })
  }
}
