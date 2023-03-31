import React from 'react'
import { Rating } from 'react-simple-star-rating'

const RatingStarts = ({avg}) => {
    return (
        <Rating
            initialValue={Number(avg)}
            allowFraction fillColor='#F6303F'
            id='mouseDefault'
            readonly={true}
            size={22}
        />
    )
}

export default RatingStarts