import React from 'react'
import BookHeaderSection from '../Components/PagesSup/BookTable/BookHeaderSection/BookHeaderSection'
import BookFormSection from '../Components/PagesSup/BookTable/BookFormSection/BookFormSection'
import BookMapSection from '../Components/PagesSup/BookTable/BookMapSection/BookMapSection'
import goup from '../Common/GoUp'

export default function BookTable() {
  goup()

  return (
    <div>
        <BookHeaderSection />
        <BookFormSection />
        <BookMapSection />
    </div>
  )
}
