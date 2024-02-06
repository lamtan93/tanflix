import React from 'react'
import { Title, ButtonLink } from '../UI'
import '../../styles/_components/_pricing.scss'
import APPLICATION_PATHS from '../../utils/paths'
import Dico from '../../utils/dico'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function Pricing() {
  useScrollAnimation('pricing')
  return (
    <section className="pricing">
      <Title
        name={Dico.SECTION_PRICING.TITLE_PRICING}
        position="left"
        size="big"
      />
      <div className="pricing__container">
        <div className="pricing__box scroll--hidden-pricing">
          <div className="pricing__item pricing__item--front">
            <div className="pricing__header pricing__header--1">
              <div className="pricing__title">
                <Title
                  name={Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.TITLE}
                  position="right"
                  size="med"
                />
              </div>
            </div>
            <div className="pricing__body" data-testid="pricing__body--SOLO">
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.SCREEN}</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.DEVICE}</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.DOWNLOAD}</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.SUPPORT}</span>
            </div>
          </div>
          <div className="pricing__item pricing__item--back">
            <div className="pricing__register">
              <span>Only</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_SOLO.PRICE}</span>
              <ButtonLink
                name={Dico.SECTION_PRICING.BUTTONLINK_JOIN_NOW}
                color="white"
                size="med"
                animated
                href={APPLICATION_PATHS.MOVIE_LIST}
              />
            </div>
          </div>
        </div>

        <div className="pricing__box scroll--hidden-pricing">
          <div className="pricing__item pricing__item--front">
            <div className="pricing__header pricing__header--2">
              <div className="pricing__message">
                <p>{Dico.SECTION_PRICING.LIMITED_PRICING_PARAGRAPH}</p>
              </div>
              <div className="pricing__title">
                <Title
                  name={Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.TITLE}
                  position="right"
                  size="med"
                />
              </div>
            </div>
            <div className="pricing__body" data-testid="pricing__body--FAMILY">
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.SCREEN}</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.DEVICE}</span>
              <span>
                {Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.DOWNLOAD}
              </span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.SUPPORT}</span>
            </div>
          </div>
          <div className="pricing__item pricing__item--back">
            <div className="pricing__register">
              <span>Only</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_FAMILY.PRICE}</span>
              <ButtonLink
                name={Dico.SECTION_PRICING.BUTTONLINK_JOIN_NOW}
                color="white"
                size="med"
                animated
                href={APPLICATION_PATHS.MOVIE_LIST}
              />
            </div>
          </div>
        </div>

        <div className="pricing__box scroll--hidden-pricing">
          <div className="pricing__item pricing__item--front">
            <div className="pricing__header pricing__header--3">
              <div className="pricing__title">
                <Title
                  name={Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.TITLE}
                  position="right"
                  size="med"
                />
              </div>
            </div>
            <div className="pricing__body" data-testid="pricing__body--GROUP">
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.SCREEN}</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.DEVICE}</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.DOWNLOAD}</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.SUPPORT}</span>
            </div>
          </div>
          <div className="pricing__item pricing__item--back">
            <div className="pricing__register">
              <span>Only</span>
              <span>{Dico.SECTION_PRICING.DETAILS.FORMULA_GROUP.PRICE}</span>
              <ButtonLink
                name={Dico.SECTION_PRICING.BUTTONLINK_JOIN_NOW}
                color="white"
                size="med"
                animated
                href={APPLICATION_PATHS.MOVIE_LIST}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
