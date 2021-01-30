import React from 'react';

export default function UpdateTime(time) {
        const now = new Date();
        const writtenTime = new Date(time.time);

        const TimeDiff = Math.floor((now.getTime() - writtenTime) / 1000 / 60);
        const TimeDiffHour = Math.floor(TimeDiff / 60);
        const TimeDiffDay = Math.floor(TimeDiff / 60 / 24);

        if (TimeDiff < 1) {
            return '방금 전'
        } else if (TimeDiff < 60) {
            return `${TimeDiff}분 전`;
        } else if (TimeDiffHour < 24) {
            return `${TimeDiffHour}시간 전`;
        } else if (TimeDiffDay < 365) {
            return `${TimeDiffDay}일 전`;
        }

        return (
            <div>
                {`${Math.floor(TimeDiffDay / 365)}년 전`}
            </div>
        )
}



