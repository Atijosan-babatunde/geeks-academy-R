import React from 'react';
import * as Query from '../graphql';
import { useQuery } from '@apollo/client';
import { BaseContainer } from '../layouts/Containers';
import * as Section from '../layouts/Sections';



export default function Landing() {
    document.title = "Learn Fast. Let Smart | Avila";
    const { loading, error, data: courses } = useQuery(Query.GET_COURSES);

    React.useEffect(() => {
        var $ = window && window.$;
        $(".sliderFirst").length && window.tns({
            container: ".sliderFirst",
            loop: !1,
            startIndex: 1,
            items: 1,
            nav: !1,
            autoplay: !0,
            swipeAngle: !1,
            speed: 400,
            autoplayButtonOutput: !1,
            mouseDrag: !0,
            lazyload: !0,
            gutter: 20,
            controlsContainer: "#sliderFirstControls",
            responsive: {
                768: {
                    items: 2
                },
                990: {
                    items: 4
                }
            }
        })
    }, [courses])

    React.useEffect(() => {
        var $ = window && window.$;
        $(".sliderSecond").length && window.tns({
            container: ".sliderSecond",
            loop: !1,
            startIndex: 1,
            items: 1,
            nav: !1,
            autoplay: !0,
            swipeAngle: !1,
            speed: 400,
            autoplayButtonOutput: !1,
            mouseDrag: !0,
            lazyload: !0,
            gutter: 20,
            controlsContainer: "#sliderSecondControls",
            responsive: {
                768: {
                    items: 4
                },
                990: {
                    items: 4
                }
            }
        })
    }, [courses])

    React.useEffect(() => {
        var $ = window && window.$;
        $(".sliderThird").length && window.tns({
            container: ".sliderThird",
            loop: !1,
            startIndex: 1,
            items: 1,
            nav: !1,
            autoplay: !0,
            swipeAngle: !1,
            speed: 400,
            autoplayButtonOutput: !1,
            mouseDrag: !0,
            lazyload: !0,
            gutter: 20,
            controlsContainer: "#sliderThirdControls",
            responsive: {
                768: {
                    items: 2
                },
                990: {
                    items: 4
                }
            }
        })
    }, [courses])

    return (
        <BaseContainer>
            <Section.HomeBanner />

            <Section.CourseStats />

            <Section.RecommendedCourses
                loading={loading}
                error={error}
                courses={
                    courses?.geeksAcademies?.filter(v => v.recommended)
                }
            />

            <Section.MostPopularCourses
                loading={loading}
                error={error}
                courses={
                    courses?.geeksAcademies?.filter(v => v.popular)
                }
            />

            <Section.TrendingCourses
                loading={loading}
                error={error}
                courses={
                    courses?.geeksAcademies?.filter(v => v.trending)
                }
            />

        </BaseContainer>
    )
}